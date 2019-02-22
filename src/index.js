const { json, send, createError } = require('micro')
const Joi = require('joi')
const logger = require('./logger')
const schema = require('./schema')

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
    throw createError(400, 'The json input does not match the schema')
  } else {
    logger.info('The event match the schema', result)
  }

  return js
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
      return send(res, 405, `Expected: POST, got: ${req.method}`)
  }
}
