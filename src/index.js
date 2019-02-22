const { json, send } = require('micro')
const Joi = require('joi')
const env = require('./env')
const logger = require('./logger')
const schema = require('./schema')
const createReceipt = require('./receipt')
const mailgun = require('./mailgun')

async function handleRequest(req, res) {
  logger.info('Parsing event...')
  let event
  try {
    event = await json(req)
    logger.info('Event parsed')
  } catch (err) {
    logger.error('Malformed json', err)
    return send(res, 400, 'Malformed json', err)
  }

  logger.info('Validating event against schema...')
  const result = Joi.validate(event, schema)
  if (result.error !== null) {
    logger.error('The json input does not match the schema', result)
    return send(res, 400, 'The json input does not match the schema')
  } else {
    logger.info('The event match the schema', result)
  }

  logger.info('Creating receipt...')
  const receipt = createReceipt(event)
  logger.info('Receipt created')

  logger.info('Sending receipt...')
  const body = {
    from: env.MAIL_FROM,
    subject: env.MAIL_SUBJECT,
    to: event.cpn_registered_email,
    html: receipt,
  }
  try {
    const mail = await mailgun.post(`/${env.MAILGUN_DOMAIN}/messages`, { body })
    logger.info('Receipt sent', mail.body)
  } catch (err) {
    logger.error("The receipt couldn't be sent", err)
    return send(res, 502, "The receipt couldn't be sent", err)
  }

  return event
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST')

  switch (req.method.toUpperCase()) {
    case 'POST':
      return await handleRequest(req, res)
    case 'OPTIONS':
      return send(res, 204, '')
    default:
      logger.error(`Invalid method, expected: POST, got: ${req.method}`)
      return send(
        res,
        405,
        `Invalid method, expected: POST, got: ${req.method}`
      )
  }
}
