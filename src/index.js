const { json, send } = require('micro')
const Joi = require('joi')
const { nanoid } = require('nanoid')
const env = require('./env')
const logger = require('./logger')
const schema = require('./schema')
const createReceipt = require('./receipt')
const mailgun = require('./mailgun')
const blockchain = require('./blockchain')
const { sha384 } = require('./utils')

async function handleRequest(req, res) {
  req.logger.info('Parsing event...')
  let event
  try {
    event = await json(req)
    req.logger.info('Event parsed')
  } catch (err) {
    req.logger.error('Failed to parse the json')
    req.logger.error(err)
    return send(res, 400, { error: 'The input is not a valid JSON' })
  }

  req.logger.info('Validating event against schema...')
  const result = Joi.validate(event, schema)
  if (result.error === null) {
    req.logger.info('Event validated')
  } else {
    req.logger.error('Failed to validate the event')
    req.logger.error(result.error)
    return send(res, 400, { error: 'The json input does not match the schema' })
  }

  req.logger.info('Creating receipt...')
  const now = new Date()
  const date = now.toISOString().split('.')[0] + 'Z'
  const hash = sha384(JSON.stringify({ date, ...event })).toString('hex')
  const receipt = createReceipt(event, now.toGMTString(), hash)
  req.logger.info('Receipt created')

  req.logger.info('Sending receipt...')
  const body = {
    from: env.MAIL_FROM,
    subject: env.MAIL_SUBJECT,
    to: event.cpn_registered_email,
    html: receipt,
  }
  let mail
  try {
    mail = await mailgun.post(`/${env.MAILGUN_DOMAIN}/messages`, { body })
    req.logger.info('Receipt sent', mail.body)
  } catch (err) {
    req.logger.error('Failed to send the receipt')
    req.logger.error(err)
    return send(res, 502, { error: "The receipt couldn't be sent" })
  }

  req.logger.info(`Storing hash (${hash}) in blockchain...`)
  try {
    const res = await blockchain.post('/', { body: { hash, date } })
    req.logger.info(`Hash stored (${hash})`)
    req.logger.info(res.body)
  } catch (err) {
    req.logger.error('Failed to store the hash', err)
    req.logger.error(err)
  }

  return mail.body
}

module.exports = async (req, res) => {
  req.requestId = nanoid()
  req.logger = logger.child({ requestId: req.requestId })

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST')
  res.setHeader('X-Request-ID', req.requestId)

  req.logger.info(`Request ${req.method} from ${req.connection.remoteAddress}`)

  res.on('finish', () => {
    req.logger.info(`Response ${res.statusCode} ${res.statusMessage}`)
  })

  switch (req.method.toUpperCase()) {
    case 'POST':
      return await handleRequest(req, res)
    case 'OPTIONS':
      return send(res, 204, '')
    default:
      return send(res, 405, {
        error: `Invalid method, expected: POST, got: ${req.method}`,
      })
  }
}
