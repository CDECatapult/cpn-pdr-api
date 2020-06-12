const test = require('ava')
const Joi = require('joi')
const schema = require('../src/schema')

test('trigger = PROFILE_UPDATE | MANUAL_REQUEST | REGISTRATION', (t) => {
  const profileUpdate = {
    trigger: 'PROFILE_UPDATE',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: 'Anthony Garcia',
    given_personal_data: [],
    consents: [],
  }

  const res1 = Joi.validate(profileUpdate, schema)
  t.is(res1.error, null)

  const manualRequest = {
    trigger: 'MANUAL_REQUEST',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: 'Anthony Garcia',
    given_personal_data: [],
    consents: [],
  }

  const res2 = Joi.validate(manualRequest, schema)
  t.is(res2.error, null)

  const registration = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: 'Anthony Garcia',
    given_personal_data: [],
    consents: [],
  }

  const res3 = Joi.validate(registration, schema)
  t.is(res3.error, null)

  const invalid = {
    trigger: 'INVALID',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: 'Anthony Garcia',
    given_personal_data: [],
    consents: [],
  }

  const res4 = Joi.validate(invalid, schema)
  t.not(res4.error, null)

  const empty = {
    trigger: '',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: 'Anthony Garcia',
    given_personal_data: [],
    consents: [],
  }

  const res5 = Joi.validate(empty, schema)
  t.not(res5.error, null)

  const unset = {
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: 'Anthony Garcia',
    given_personal_data: [],
    consents: [],
  }

  const res6 = Joi.validate(unset, schema)
  t.not(res6.error, null)
})

test('cpn_user_id = string (base64), mandatory', (t) => {
  const valid = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: 'Anthony Garcia',
    given_personal_data: [],
    consents: [],
  }

  const res1 = Joi.validate(valid, schema)
  t.is(res1.error, null)

  const invalid = {
    trigger: 'REGISTRATION',
    cpn_user_id: 'random text with %%',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: 'Anthony Garcia',
    given_personal_data: [],
    consents: [],
  }

  const res2 = Joi.validate(invalid, schema)
  t.not(res2.error, null)

  const empty = {
    trigger: 'REGISTRATION',
    cpn_user_id: '',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: 'Anthony Garcia',
    given_personal_data: [],
    consents: [],
  }

  const res3 = Joi.validate(empty, schema)
  t.not(res3.error, null)

  const unset = {
    trigger: 'REGISTRATION',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: 'Anthony Garcia',
    given_personal_data: [],
    consents: [],
  }

  const res4 = Joi.validate(unset, schema)
  t.not(res4.error, null)
})

test('cpn_registered_email = string (email) required', (t) => {
  const withoutAt = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3digicatapult.org.uk',
    user_name: 'Anthony Garcia',
    given_personal_data: [],
    consents: [],
  }

  const res1 = Joi.validate(withoutAt, schema)
  t.not(res1.error, null)

  const empty = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: '',
    user_name: 'Anthony Garcia',
    given_personal_data: [],
    consents: [],
  }

  const res2 = Joi.validate(empty, schema)
  t.not(res2.error, null)

  const unset = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    user_name: 'Anthony Garcia',
    given_personal_data: [],
    consents: [],
  }

  const res3 = Joi.validate(unset, schema)
  t.true(res3.error !== null)
})

test('user_name = string', (t) => {
  const isNull = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [],
    consents: [],
  }

  const res1 = Joi.validate(isNull, schema)
  t.is(res1.error, null)

  const unset = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    given_personal_data: [],
    consents: [],
  }

  const res2 = Joi.validate(unset, schema)
  t.not(res2.error, null)

  const isEmpty = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [],
    consents: [],
  }

  const res3 = Joi.validate(isEmpty, schema)
  t.is(res3.error, null)
})

test('given_personal_data contains description, purpose and possibly shared', (t) => {
  const empty = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [],
    consents: [],
  }

  const res1 = Joi.validate(empty, schema)
  t.is(res1.error, null)

  const emptyObject = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [{}],
    consents: [],
  }

  const res2 = Joi.validate(emptyObject, schema)
  t.not(res2.error, null)

  const onlyDescription = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [{ description: 'Foo' }],
    consents: [],
  }

  const res3 = Joi.validate(onlyDescription, schema)
  t.not(res3.error, null)

  const onlyPurpose = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [{ purpose: 'Foo' }],
    consents: [],
  }

  const res4 = Joi.validate(onlyPurpose, schema)
  t.not(res4.error, null)

  const withShared = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [
      { description: 'Bar', purpose: 'Foo', shared_with: ['Baz'] },
    ],
    consents: [],
  }

  const res5 = Joi.validate(withShared, schema)
  t.is(res5.error, null)

  const withoutShared = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [{ description: 'Bar', purpose: 'Foo' }],
    consents: [],
  }

  const res6 = Joi.validate(withoutShared, schema)
  t.is(res6.error, null)

  const randomCrap = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [
      { description: 'Bar', purpose: 'Foo', random: 'Crap' },
    ],
    consents: [],
  }

  const res7 = Joi.validate(randomCrap, schema)
  t.not(res7.error, null)

  const nullDescription = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [{ description: null, purpose: 'Foo' }],
    consents: [],
  }

  const res8 = Joi.validate(nullDescription, schema)
  t.not(res8.error, null)

  const nullPurpose = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [{ description: 'Bar', purpose: null }],
    consents: [],
  }

  const res9 = Joi.validate(nullPurpose, schema)
  t.not(res9.error, null)

  const emptyPurpose = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [{ description: 'Bar', purpose: '' }],
    consents: [],
  }

  const res10 = Joi.validate(emptyPurpose, schema)
  t.not(res10.error, null)

  const emptyDescription = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [{ description: '', purpose: 'Bar' }],
    consents: [],
  }

  const res11 = Joi.validate(emptyDescription, schema)
  t.not(res11.error, null)
})

test('consent contains description, purpose and possibly shared', (t) => {
  const noArray = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [],
    consents: null,
  }

  const res0 = Joi.validate(noArray, schema)
  t.not(res0.error, null)

  const empty = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [],
    consents: [],
  }

  const res1 = Joi.validate(empty, schema)
  t.is(res1.error, null)

  const emptyObject = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [],
    consents: [{}],
  }

  const res2 = Joi.validate(emptyObject, schema)
  t.not(res2.error, null)

  const onlyDescription = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [],
    consents: [{ description: 'Foo' }],
  }

  const res3 = Joi.validate(onlyDescription, schema)
  t.not(res3.error, null)

  const onlyPurpose = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [],
    consents: [{ purpose: 'Foo' }],
  }

  const res4 = Joi.validate(onlyPurpose, schema)
  t.not(res4.error, null)

  const withShared = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [],
    consents: [{ description: 'Bar', purpose: 'Foo', shared_with: ['Baz'] }],
  }

  const res5 = Joi.validate(withShared, schema)
  t.is(res5.error, null)

  const withoutShared = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [],
    consents: [{ description: 'Bar', purpose: 'Foo' }],
  }

  const res6 = Joi.validate(withoutShared, schema)
  t.is(res6.error, null)

  const randomCrap = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [],
    consents: [{ description: 'Bar', purpose: 'Foo', random: 'Crap' }],
  }

  const res7 = Joi.validate(randomCrap, schema)
  t.not(res7.error, null)

  const nullDescription = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [],
    consents: [{ description: null, purpose: 'Foo' }],
  }

  const res8 = Joi.validate(nullDescription, schema)
  t.not(res8.error, null)

  const nullPurpose = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [],
    consents: [{ description: 'Bar', purpose: null }],
  }

  const res9 = Joi.validate(nullPurpose, schema)
  t.not(res9.error, null)

  const emptyPurpose = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [],
    consents: [{ description: 'Bar', purpose: '' }],
  }

  const res10 = Joi.validate(emptyPurpose, schema)
  t.not(res10.error, null)

  const emptyDescription = {
    trigger: 'REGISTRATION',
    cpn_user_id: '5b222556f8ac34000a1d1562',
    cpn_registered_email: 'anthony.garcia+u3@digicatapult.org.uk',
    user_name: null,
    given_personal_data: [],
    consents: [{ description: '', purpose: 'Bar' }],
  }

  const res11 = Joi.validate(emptyDescription, schema)
  t.not(res11.error, null)
})
