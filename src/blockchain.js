const got = require('got')
const pkg = require('../package.json')
const env = require('./env')

const blockchain = got.extend({
  baseUrl: env.BLOCKCHAIN_API_URL,
  json: true,
  headers: {
    'x-api-key': env.BLOCKCHAIN_API_KEY,
    'user-agent': `cpn-pdr-api/${pkg.version}`,
  },
})

module.exports = blockchain
