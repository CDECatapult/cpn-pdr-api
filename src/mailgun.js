const got = require('got')
const pkg = require('../package.json')
const env = require('./env')

const mailgun = got.extend({
  baseUrl: 'https://api.mailgun.net/v3',
  auth: `api:${env.MAILGUN_API_KEY}`,
  headers: {
    'user-agent': `cpn-pdr/${pkg.version}`,
  },
  form: true,
  json: true,
})

module.exports = mailgun
