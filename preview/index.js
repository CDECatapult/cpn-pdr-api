const createReceipt = require('../src/receipt')

const sampleEvent = {
  trigger: 'PROFILE_UPDATE',
  cpn_user_id: '5b222556f8ac34000a1d1562',
  cpn_registered_email: 'anthony.garcia@digicatapult.org.uk',
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

module.exports = () => {
  return createReceipt(sampleEvent)
}
