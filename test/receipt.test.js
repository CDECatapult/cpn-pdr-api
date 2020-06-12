process.env.LOG_LEVEL = 'silent'
process.env.MAILGUN_API_URL = 'http://mailgun-api'
process.env.MAILGUN_API_KEY = 'fakeAPI'
process.env.MAILGUN_DOMAIN = 'sandbox.mailgun.org'
process.env.MAIL_FROM = 'Postmaster <postmaster@projectcpn.eu>'
process.env.BLOCKCHAIN_API_URL = 'http://blockchain'
process.env.BLOCKCHAIN_API_KEY = 'blockchain_key'

const test = require('ava')
const createReceipt = require('../src/receipt')

test('The header depends on trigger source', (t) => {
  const base = {
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [],
    consents: [],
  }

  const receipts = new Set()
  receipts.add(createReceipt({ ...base, trigger: 'REGISTRATION' }))
  receipts.add(createReceipt({ ...base, trigger: 'MANUAL_REQUEST' }))
  receipts.add(createReceipt({ ...base, trigger: 'PROFILE_UPDATE' }))
  receipts.add(createReceipt({ ...base }))

  t.is(receipts.size, 4)
})

test('Purpose are listed', (t) => {
  const input = {
    trigger: 'REGISTRATION',
    cpn_user_id: '255b2256256f8ac34000a1d1',
    cpn_registered_email: 'anthony.garcia@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [
      { description: 'Allow foo', purpose: 'FeatureX' },
      { description: 'Allow bar', purpose: 'FeatureX' },
      { description: 'Allow baz', purpose: 'FeatureY' },
    ],
    consents: [],
  }

  const date = 'Some date'
  const receipt = createReceipt(input, date)

  t.is(receipt.match(/FeatureX/g).length, 1)
  t.true(receipt.includes(date))
})

test('Third-parties are listed and grouped', (t) => {
  const input = {
    trigger: 'REGISTRATION',
    cpn_user_id: '255b2256256f8ac34000a1d1',
    cpn_registered_email: 'anthony.garcia@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [
      { description: '#A', purpose: 'X', shared_with: ['@foo', '@bar'] },
      { description: '#B', purpose: 'X' },
      { description: '#C', purpose: 'Y', shared_with: ['@bar', '@baz'] },
    ],
    consents: [{ description: '#D', purpose: 'Z', shared_with: ['@bar'] }],
  }

  const receipt = createReceipt(input, '')

  t.is(receipt.match(/@foo/g).length, 1)
  t.is(receipt.match(/@bar/g).length, 1)
  t.is(receipt.match(/@baz/g).length, 1)
  t.true(receipt.includes('(#A)'))
  t.true(receipt.includes('(#A, #C, #D)'))
  t.true(receipt.includes('(#C)'))
  t.false(
    receipt.includes("We don't share your information with any third-party.")
  )
})

test('Show text when no third-party', (t) => {
  const input = {
    trigger: 'REGISTRATION',
    cpn_user_id: '255b2256256f8ac34000a1d1',
    cpn_registered_email: 'anthony.garcia@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [
      { description: '#A', purpose: 'X' },
      { description: '#B', purpose: 'X' },
      { description: '#C', purpose: 'Y' },
    ],
    consents: [{ description: '#D', purpose: 'Z' }],
  }

  const receipt = createReceipt(input, '')

  t.true(
    receipt.includes("We don't share your information with any third-party.")
  )
})
