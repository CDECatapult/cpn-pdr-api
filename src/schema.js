const Joi = require('joi')

const personalData = Joi.string()

const consent = Joi.object().keys({
  description: Joi.string().required(),
  reason: Joi.string().required(),
})

const schema = Joi.object().keys({
  trigger: Joi.string()
    .valid('PROFILE_UPDATE')
    .required(),
  cpn_user_id: Joi.string()
    .alphanum()
    .required(),
  cpn_registered_email: Joi.string()
    .email()
    .required(),
  user_name: Joi.string(),
  given_personal_data: Joi.array()
    .items(personalData)
    .required(),
  consents: Joi.array()
    .items(consent)
    .required(),
})

module.exports = schema
