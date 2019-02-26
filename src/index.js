const { json, send } = require('micro')
const Joi = require('joi')
const nanoid = require('nanoid')
const env = require('./env')
const logger = require('./logger')
const schema = require('./schema')
const createReceipt = require('./receipt')
const mailgun = require('./mailgun')

async function handleRequest(req, res) {
  logger.info(req.requestId, 'Parsing event...')
  let event
  try {
    event = await json(req)
    logger.info(req.requestId, 'Event parsed')
  } catch (err) {
    logger.error(req.requestId, 'Failed to parse the json', err)
    return send(res, 400, { error: 'The input is not a valid JSON' })
  }

  logger.info(req.requestId, 'Validating event against schema...')
  const result = Joi.validate(event, schema)
  if (result.error === null) {
    logger.info(req.requestId, 'Event validated')
  } else {
    logger.error(req.requestId, 'Failed to validate the event', result.error)
    return send(res, 400, { error: 'The json input does not match the schema' })
  }

  logger.info(req.requestId, 'Creating receipt...')
  const date = new Date().toGMTString()
  const receipt = createReceipt(event, date)
  logger.info(req.requestId, 'Receipt created')

  logger.info(req.requestId, 'Sending receipt...')
  const body = {
    from: env.MAIL_FROM,
    subject: env.MAIL_SUBJECT,
    to: event.cpn_registered_email,
    html: receipt,
  }
  let mail
  try {
    mail = await mailgun.post(`/${env.MAILGUN_DOMAIN}/messages`, { body })
    logger.info(req.requestId, 'Receipt sent', mail.body)
  } catch (err) {
    logger.error(req.requestId, 'Failed to send the receipt', err)
    return send(res, 502, { error: "The receipt couldn't be sent" })
  }

  return mail.body
}

module.exports = async (req, res) => {
  req.requestId = nanoid()

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST')
  res.setHeader('X-Request-ID', req.requestId)

  logger.info(
    req.requestId,
    `Request ${req.method} from ${req.connection.remoteAddress}`
  )

  res.on('finish', () => {
    logger.info(
      req.requestId,
      `Response ${res.statusCode} ${res.statusMessage}`
    )
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
