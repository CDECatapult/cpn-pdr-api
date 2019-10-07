const { cleanEnv, makeValidator, testOnly, host, str, url } = require('envalid')

const color = makeValidator(c => {
  if (/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(c)) return c.toLowerCase()
  else throw new Error('Expected a string in hex color format')
})

module.exports = cleanEnv(process.env, {
  LOG_LEVEL: str({ default: 'info', devDefault: 'debug' }),
  BLOCKCHAIN_API_URL: url({ devDefault: 'http://localhost:3042' }),
  BLOCKCHAIN_API_KEY: str({
    example: 'RyKbvJqVphx8L6jLA6WFphYd6HFmzDxv',
    devDefault: testOnly('blockchain_key'),
  }),
  MAILGUN_API_URL: url({
    default: 'https://api.mailgun.net/v3',
    devDefault: testOnly('http://mailgun-api'),
  }),
  MAILGUN_API_KEY: str({
    example: '94b00922dfa91f2fc1573896c71e373d-47217ca8-837a15ba',
    devDefault: testOnly('fakeAPI'),
  }),
  MAILGUN_DOMAIN: host({
    example: 'projectcpn.eu',
    devDefault: testOnly('sandbox.mailgun.org'),
  }),
  MAIL_FROM: str({
    example: 'Postmaster <postmaster@projectcpn.eu>',
    devDefault: testOnly('CPN <postmaster@projectcpn.eu>'),
  }),
  MAIL_SUBJECT: str({ default: 'Your personal data receipt' }),
  THEME_PRIMARY_COLOR: color({ default: '#BE005A' }),
  THEME_ACCENT_COLOR: color({ default: '#FF3C7D' }),
})
