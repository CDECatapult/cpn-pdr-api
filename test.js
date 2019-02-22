process.env.LOG_LEVEL = 'silent'

const micro = require('micro')
const test = require('ava')
const listen = require('test-listen')
const got = require('got')
const api = require('./src')

const baseEvent = {
  cpn_user_id: '5b222556f8ac34000a1d1562',
  cpn_registered_email: 'anthony.garcia@digicatapult.org.uk',
  user_name: 'Anthony Garcia',
  given_personal_data: ['email address', 'name', 'twitter handle'],
  consents: [
    {
      description: "processing of user's location data",
      reason: 'To recommend content based on user location',
    },
    {
      description: "processing of user's time usage data",
      reason: 'To recommend content based on last user connection',
    },
    {
      description: "processing of user's preferences data",
      reason: 'To generate personalised content',
    },
  ],
}

test('Does not accept GET requests', async t => {
  const service = micro(api)
  const url = await listen(service)
  const res = await got(url, { throwHttpErrors: false })

  t.deepEqual(res.statusCode, 405)

  service.close()
})

test('Handle malformed json', async t => {
  const service = micro(api)
  const url = await listen(service)
  const res = await got.post(url, {
    body: '{[}',
    headers: 'application/json',
    throwHttpErrors: false,
  })

  t.deepEqual(res.statusCode, 400)

  service.close()
})

test('Handle input that does not match the schema', async t => {
  const service = micro(api)
  const url = await listen(service)
  const res = await got.post(url, {
    body: { ...baseEvent, trigger: 'invalid' },
    throwHttpErrors: false,
    json: true,
  })

  t.deepEqual(res.statusCode, 400)

  service.close()
})

test.skip('Send PDR after user updated their profile', async t => {
  const service = micro(api)
  const url = await listen(service)
  const res = await got.post(url, {
    body: { ...baseEvent, trigger: 'PROFILE_UPDATE' },
    json: true,
  })

  t.deepEqual(res.statusCode, 400)

  service.close()
})
