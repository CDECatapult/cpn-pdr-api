const Joi = require('joi')

const dataProcessed = Joi.object().keys({
  description: Joi.string().required(),
  purpose: Joi.string().required(),
  shared_with: Joi.array().items(Joi.string().required()),
})

const schema = Joi.object().keys({
  trigger: Joi.string()
    .valid('REGISTRATION', 'PROFILE_UPDATE', 'MANUAL_REQUEST')
    .required(),
  cpn_user_id: Joi.string().alphanum().required(),
  cpn_registered_email: Joi.string().email().required(),
  user_name: Joi.string().required().allow(null),
  given_personal_data: Joi.array().items(dataProcessed).required(),
  consents: Joi.array().items(dataProcessed).required(),
})

module.exports = schema
