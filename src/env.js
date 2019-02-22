const { cleanEnv, makeValidator, host, str, url } = require('envalid')

const color = makeValidator(c => {
  if (/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(c)) return c.toLowerCase()
  else throw new Error('Expected a string in hex color format')
})

module.exports = cleanEnv(process.env, {
  LOG_LEVEL: str({ default: 'info', devDefault: 'debug' }),
  MAILGUN_API_URL: url({ default: 'https://api.mailgun.net/v3' }),
  MAILGUN_API_KEY: str({
    example: '94b00922dfa91f2fc1573896c71e373d-47217ca8-837a15ba',
  }),
  MAILGUN_DOMAIN: host({ example: 'projectcpn.eu' }),
  MAIL_FROM: str({
    example: 'CPN <postmaster@projectcpn.eu>',
  }),
  MAIL_SUBJECT: str({ default: 'Your personal data receipt' }),
  THEME_PRIMARY_COLOR: color({ default: '#BE005A' }),
  THEME_ACCENT_COLOR: color({ default: '#FF3C7D' }),
})
