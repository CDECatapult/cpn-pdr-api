const test = require('ava')
const createReceipt = require('../src/receipt')

test('The header depends on trigger source', t => {
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

test('Purpose are grouped', t => {
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
  //t.true(receipt.includes('(Allow foo, Allow bar)'))
  t.true(receipt.includes(date))
})
