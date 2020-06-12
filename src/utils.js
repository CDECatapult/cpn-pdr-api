const crypto = require('crypto')

function sha384(input) {
  const hash = crypto.createHash('sha384')
  const data = hash.update(input, 'utf-8')
  return data.digest('hex')
}

module.exports = { sha384 }
