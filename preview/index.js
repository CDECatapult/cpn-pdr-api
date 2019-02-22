const createReceipt = require('../src/receipt')

const sampleEvent = {
  trigger: 'PROFILE_UPDATE',
  cpn_user_id: '5b222556f8ac34000a1d1562',
  cpn_registered_email: 'anthony.garcia@digicatapult.org.uk',
  user_name: 'Anthony Garcia',
  given_personal_data: ['Email address', 'Name', 'Twitter handle'],
  consents: [
    {
      description: "Processing of user's location data",
      reason: 'To recommend content based on user location',
    },
    {
      description: "Processing of user's time usage data",
      reason: 'To recommend content based on last user connection',
    },
    {
      description: "Processing of user's preferences data",
      reason: 'To generate personalised content',
    },
  ],
}

module.exports = () => {
  return createReceipt(sampleEvent)
}
