const pino = require('pino')
const env = require('./env')

module.exports = pino(
  {
    name: 'CPN_PDR_API',
    level: env.LOG_LEVEL,
  },
  process.stdout
)
