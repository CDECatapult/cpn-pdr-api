const { json, send, createError } = require('micro')
const Joi = require('joi')
const logger = require('./logger')
const schema = require('./schema')
const createReceipt = require('./receipt')

async function handleRequest(req, res) {
  logger.info('Parsing event...')
  let event
  try {
    event = await json(req)
    logger.info('Event parsed')
  } catch (err) {
    logger.error('Malformed json', err)
    throw createError(400, 'Malformed json', err)
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
