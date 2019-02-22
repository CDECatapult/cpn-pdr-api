process.env.LOG_LEVEL = 'silent'
process.env.MAILGUN_API_URL = 'http://mailgun-api'
process.env.MAILGUN_API_KEY = 'fakeAPI'
process.env.MAILGUN_DOMAIN = 'sandbox.mailgun.org'
process.env.MAIL_FROM = 'CPN <postmaster@projectcpn.eu>'

const micro = require('micro')
const test = require('ava')
const nock = require('nock')
const listen = require('test-listen')
const got = require('got')
const api = require('./src')

const baseEvent = {
  cpn_user_id: '5b222556f8ac34000a1d1562',
  cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
  user_name: 'Anthony Garcia',
  given_personal_data: [
    { description: 'Email address', purpose: 'To contact the user' },
    { description: 'Name', purpose: '...' },
    {
      description: 'Twitter handle',
      purpose: 'Get further insight on user preferences',
      shared: 'TruthNest',
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

test.afterEach.always(() => nock.cleanAll())

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

test('Send PDR after user updated their profile', async t => {
  const mailgun = nock('http://mailgun-api')
    .filteringRequestBody(/html=[^&]*/g, 'html=XXX')
    .post('/sandbox.mailgun.org/messages', {
      from: 'CPN <postmaster@projectcpn.eu>',
      subject: 'Your personal data receipt',
      to: baseEvent.cpn_registered_email,
      html: 'XXX',
    })
    .reply(200, { status: 'SENT' })
  const service = micro(api)
  const url = await listen(service)
  const res = await got.post(url, {
    body: { ...baseEvent, trigger: 'PROFILE_UPDATE' },
    json: true,
  })

  t.is(mailgun.isDone(), true)
  t.deepEqual(res.statusCode, 200)

  service.close()
})
