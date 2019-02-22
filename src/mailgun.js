const got = require('got')
const pkg = require('../package.json')
const env = require('./env')

const mailgun = got.extend({
  baseUrl: env.MAILGUN_API_URL,
  auth: `api:${env.MAILGUN_API_KEY}`,
  headers: {
    'user-agent': `cpn-pdr-api/${pkg.version}`,
  },
  form: true,
  json: true,
})

module.exports = mailgun
