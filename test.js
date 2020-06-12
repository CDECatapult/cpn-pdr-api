process.env.LOG_LEVEL = 'silent'
process.env.MAILGUN_API_URL = 'http://mailgun-api'
process.env.MAILGUN_API_KEY = 'fakeAPI'
process.env.MAILGUN_DOMAIN = 'sandbox.mailgun.org'
process.env.MAIL_FROM = 'Postmaster <postmaster@projectcpn.eu>'
process.env.BLOCKCHAIN_API_URL = 'http://blockchain'
process.env.BLOCKCHAIN_API_KEY = 'blockchain_key'

const micro = require('micro')
const test = require('ava')
const nock = require('nock')
const listen = require('test-listen')
const got = require('got')
const api = require('./src')
const { sha384 } = require('./src/utils')

const baseEvent = {
  cpn_user_id: '5b222556f8ac34000a1d1562',
  cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
  user_name: 'Anthony Garcia',
  given_personal_data: [
    { description: 'Email address', purpose: 'To contact the user' },
    { description: 'Name', purpose: 'Address the user in a more personal way' },
    {
      description: 'Twitter handle',
      purpose: 'Get further insight on user preferences',
      shared_with: ['TruthNest'],
    },
  ],
  consents: [
    {
      description: "Processing of user's location data",
      purpose: 'To recommend content based on user location',
    },
    {
      description: "Processing of user's time usage data",
      purpose: 'To recommend content based on last user connection',
    },
    {
      description: "Processing of user's preferences data",
      purpose: 'To generate personalised content',
    },
  ],
}

// Disable all network requests to prevent accidental access to external APIs
nock.disableNetConnect()
// Whitelist localhost (graphql server)
nock.enableNetConnect('localhost')

test.afterEach.always(() => {
  nock.cleanAll()
})

test('Accept OPTIONS requests', async (t) => {
  const service = micro(api)
  const url = await listen(service)
  const res = await got(url, { method: 'OPTIONS', throwHttpErrors: false })

  t.is(res.statusCode, 204)
  t.is(res.body, '')
  t.true(res.headers['x-request-id'] != null)

  service.close()
})

test('Does not accept GET requests', async (t) => {
  const service = micro(api)
  const url = await listen(service)
  const res = await got(url, { throwHttpErrors: false, json: true })

  t.is(res.statusCode, 405)
  t.is(res.body.error, 'Invalid method, expected: POST, got: GET')

  service.close()
})

test('Handle malformed json', async (t) => {
  const service = micro(api)
  const url = await listen(service)
  const res = await got.post(url, {
    body: '{[}',
    headers: 'application/json',
    throwHttpErrors: false,
  })

  const { error } = JSON.parse(res.body)
  t.is(res.statusCode, 400)
  t.is(error, 'The input is not a valid JSON')

  service.close()
})

test('Handle input that does not match the schema', async (t) => {
  const service = micro(api)
  const url = await listen(service)
  const res = await got.post(url, {
    body: { ...baseEvent, trigger: 'invalid' },
    throwHttpErrors: false,
    json: true,
  })

  t.is(res.statusCode, 400)
  t.is(res.body.error, 'The json input does not match the schema')

  service.close()
})

test('Send PDR after user updated their profile', async (t) => {
  const event = { ...baseEvent, trigger: 'PROFILE_UPDATE' }
  const now = new Date()
  const date = now.toISOString().split('.')[0] + 'Z'
  const hash = sha384(JSON.stringify({ date, ...event })).toString('hex')

  const blockchain = nock('http://blockchain')
    .post('/', { hash, date })
    .reply(204)
  const mailgun = nock('http://mailgun-api')
    .filteringRequestBody(/html=[^&]*/g, 'html=XXX')
    .post('/sandbox.mailgun.org/messages', {
      from: 'Postmaster <postmaster@projectcpn.eu>',
      subject: 'Your personal data receipt',
      to: baseEvent.cpn_registered_email,
      html: 'XXX',
    })
    .reply(200, {
      id: '<20190223135858.1.65B2E1E6374895F0@sandbox.mailgun.org>',
      message: 'Queued. Thank you.',
    })
  const service = micro(api)
  const url = await listen(service)
  const res = await got.post(url, {
    body: event,
    json: true,
  })

  t.is(mailgun.isDone(), true)
  t.is(blockchain.isDone(), true)
  t.is(res.statusCode, 200)
  t.is(res.body.error, undefined)
  t.is(res.body.message, 'Queued. Thank you.')
  t.is(res.body.id, '<20190223135858.1.65B2E1E6374895F0@sandbox.mailgun.org>')

  service.close()
})
