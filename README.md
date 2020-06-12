[![CircleCI](https://circleci.com/gh/CDECatapult/cpn-pdr-api.svg?style=svg)](https://circleci.com/gh/CDECatapult/cpn-pdr-api)
[![Known Vulnerabilities](https://snyk.io/test/github/CDECatapult/cpn-pdr-api/badge.svg)](https://snyk.io/test/github/CDECatapult/cpn-pdr-api)

# Personal data receipt API

This is a micro-service responsible of sending personal data receipts to data-subjects.

## Request

It expects a `POST` http request with a JSON input in the following format:

```js
{
  "trigger": "PROFILE_UPDATE", // enum { PROFILE_UPDATE | MANUAL_REQUEST | REGISTRATION }, mandatory

  "cpn_user_id": "5b222556f8ac34000a1d1562", // string (base64), mandatory

  "cpn_registered_email": "anthony.garcia@digicatapult.org.uk", // string (email) required

  "user_name": "Anthony Garcia", // string or null (if the user didn't fill the profile section)

  "given_personal_data": [
    // description of what the user entered + justification for the platform to ask for those informations

    { "description": "Email address", "purpose": "To contact the user" },
    {
      "description": "Name",
      "purpose": "Address the user in a more friendly/ personal way"
    },
    {
      "description": "Twitter handle",
      "purpose": "Get further insight on user preferences",
      "shared_with": ["TruthNest"]
    } // The shared key is only present for the data that are shared with 3rd-party
  ],

  "consents": [
    // description of what the user consented to + justification for the platform to collect them
    {
      "description": "Processing of user's location data",
      "purpose": "To recommend content based on user location"
    },
    {
      "description": "Processing of user's time usage data",
      "purpose": "To recommend content based on last user connection"
    },
    {
      "description": "Processing of user's preferences data",
      "purpose": "To generate personalised content"
    }
  ]
}
```

## Response

The service will always reply with a valid JSON. The format is either:

- `{ "error": "<Error message here>" }` in case of failure
- [The result of the Mailgun sending API](https://documentation.mailgun.com/en/latest/api-sending.html#sending)

## Configuration

The micro-service can be configured using environment variables.
All of the variables listed below _must_ be passed when the service run:

| Name            | Type   | Example                                            | Description                                                                      |
| --------------- | ------ | -------------------------------------------------- | -------------------------------------------------------------------------------- |
| BLOCKCHAIN_API_URL | url | http://localhost:3042                              | The url of the blockchain API                                                    |
| BLOCKCHAIN_API_KEY | string | RyKbvJqVphx8L6jLA6WFphYd6HFmzDxv                | The API key to send to the blockchain API                                        |
| MAILGUN_API_KEY | string | 94b00921dfa91f2fc1573196c71e373d-47217ca8-837a15ba | [See](https://documentation.mailgun.com/en/latest/api-intro.html#authentication) |
| MAILGUN_DOMAIN  | host   | projectcpn.eu                                      | The domain configured in Mailgun                                                 |
| MAIL_FROM       | string | Postmaster <postmaster@sandboxXXX.mailgun.org>     | Email address for `From` header                                                  |

Additionally, it is possible to change the behaviour of the service by using those variables:

| Name                | Type   | Default value              | Description                                                                                            |
| ------------------- | ------ | -------------------------- | ------------------------------------------------------------------------------------------------------ |
| LOG_LEVEL           | string | info                       | [One of pino/winston log levels](https://getpino.io/#/docs/api?id=level-string)                        |
| MAILGUN_API_URL     | url    | https://api.mailgun.net/v3 | Base url of the [Mailgun API](https://documentation.mailgun.com/en/latest/api_reference.html#base-url) |
| MAIL_SUBJECT        | string | Your personal data receipt | The subject of the email                                                                               |
| THEME_PRIMARY_COLOR | color  | #BE005A                    | The main colour used in the email                                                                      |
| THEME_ACCENT_COLOR  | color  | #FF3C7D                    | The accent colour used in the email                                                                    |
