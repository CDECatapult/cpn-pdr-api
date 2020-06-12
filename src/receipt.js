const html = require('dedent-js')
const env = require('./env')

function header(trigger) {
  switch (trigger) {
    case 'REGISTRATION':
      return 'When you recently joined the CPN platform you gave us some of your personal information.'
    case 'PROFILE_UPDATE':
      return 'You are receiving this email because you recently updated your personal information.'
    case 'MANUAL_REQUEST':
      return 'You are receiving this email because you requested a receipt of the usage of your personal information.'
    default:
      return ''
  }
}

function groupShared(allData) {
  const shared = new Map()

  for (let entry of allData) {
    const sharedWith = entry.shared_with
    if (sharedWith) {
      for (let thirdParty of sharedWith) {
        if (!shared.has(thirdParty)) {
          shared.set(thirdParty, [])
        }
        shared.get(thirdParty).push(entry.description)
      }
    }
  }
  return shared
}

function createReceipt(
  { trigger, user_name, given_personal_data, consents },
  date,
  hash
) {
  const allData = given_personal_data.concat(consents)
  const purposes = new Set(allData.map((d) => d.purpose))
  const shared = groupShared(allData)

  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Personal Data receipt</title>
      </head>
      <body
        style="max-width:960px; background-color:#F0F0F0; color:#1e1e1e; font-family: Arial,sans-serif;"
      >
        <table
          border="0"
          cellspacing="0"
          cellpadding="10"
          style="max-width:960px"
        >
          <tr>
            <td>
              <img
                src="https://static1.squarespace.com/static/595cd20e1b10e30e621770e9/t/59fae594085229169f34c6c3/1530174350046/?format=100w"
              />
            </td>
            <td align="right">${date}</td>
          </tr>
          <tr>
            <td colspan="2">
              <p>Dear ${user_name || 'CPN user'},</p>
              <p>${header(trigger)}</p>
              <p>
                Below is a receipt of your personal information to show what we
                collected, and how we use it; we use this receipt to show how
                individuals and organisations can track and manage the use of
                personal data.
                <a
                  style="color:${env.THEME_ACCENT_COLOR}; text-decoration: none"
                  href="https://www.projectcpn.eu"
                  >Find out more
                </a>
              </p>
              <p>Please keep this email for future reference.</p>
            </td>
          </tr>
          <tr align="center">
            <td colspan="2">
              <table
                style="background-color:#FFFFFF;max-width:600px;border:10px solid #ffffff"
              >
                <tr>
                  <td>
                    <h3>
                      <a
                        style="color:#1E1E1E; text-decoration: none"
                        href="https://www.projectcpn.eu"
                        target="_top"
                        >Your Personal Data Receipt</a
                      >
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:15px" colspan="2">
                    <hr COLOR="${env.THEME_ACCENT_COLOR}" size="1" />
                  </td>
                </tr>
                <tr>
                  <td align="center" colspan="2">
                    <h4>
                      The personal information you gave to the CPN platform
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <table>
                      <tr>
                        <td valign="top">
                          <img
                            src="https://s3-eu-west-1.amazonaws.com/pd-receipt/privacy-icon.png"
                          />
                        </td>
                        <td>
                          <ul>
                            ${given_personal_data
                              .map(
                                (pi) =>
                                  `<li style="color:#969696"><span style="color:#1E1E1E">${pi.description}</span></li>`
                              )
                              .join('')}
                          </ul>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" colspan="2">
                    <h5>
                      ${consents.length === 0
                        ? `You did not give us consent to collect more data`
                        : 'You also gave us consent to collect'}
                    </h5>
                  </td>
                </tr>
                ${consents.length > 0
                  ? html`
                      <tr>
                        <td colspan="2">
                          <table>
                            <tr>
                              <td valign="top">
                                <img
                                  src="https://s3-eu-west-1.amazonaws.com/pd-receipt/privacy-icon.png"
                                />
                              </td>
                              <td>
                                <ul>
                                  ${consents
                                    .map(
                                      (c) =>
                                        `<li style="color:#969696"><span style="color:#1E1E1E">${c.description}</span></li>`
                                    )
                                    .join('')}
                                </ul>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    `
                  : ''}
                <tr>
                  <td style="padding:15px 0" colspan="2">
                    <hr
                      width="15%"
                      COLOR="${env.THEME_ACCENT_COLOR}"
                      size="1"
                    />
                  </td>
                </tr>
                <tr>
                  <td align="center" colspan="2">
                    <h4>The purpose of collecting your personal information</h4>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <table>
                      <tr>
                        <td valign="top">
                          <img
                            src="https://s3-eu-west-1.amazonaws.com/pd-receipt/purpose.png"
                          />
                        </td>
                        <td>
                          <ul>
                            ${[...purposes]
                              .map(
                                (purpose) =>
                                  `<li style="color:#969696"><span style="color:#1E1E1E">${purpose}</span></li>`
                              )
                              .join('')}
                          </ul>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:15px 0" colspan="2">
                    <hr
                      width="15%"
                      COLOR="${env.THEME_ACCENT_COLOR}"
                      size="1"
                    />
                  </td>
                </tr>
                <tr>
                  <td align="center" colspan="2">
                    <h4>How your personal information will be treated</h4>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <table>
                      <tr>
                        <td valign="top">
                          <img
                            src="https://s3-eu-west-1.amazonaws.com/pd-receipt/share.png"
                          />
                        </td>
                        <td>
                          <ul>
                            <li style="color:#FFFFFF;list-style-type:none">
                              <span style="color:#1E1E1E"
                                ><strong>Sharing</strong></span
                              >
                            </li>
                            ${shared.size
                              ? ''
                              : `<li style="color:#969696"><span style="color:#1E1E1E">We don't share your information with any third-party.</span></li>`}
                            ${[...shared]
                              .map(
                                ([thirdParty, descriptions]) =>
                                  `<li style="color:#969696"><span style="color:#1E1E1E">${thirdParty} (${descriptions.join(
                                    ', '
                                  )})</span></li>`
                              )
                              .join('')}
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td valign="top">
                          <img
                            src="https://s3-eu-west-1.amazonaws.com/pd-receipt/storage.png"
                          />
                        </td>
                        <td>
                          <ul>
                            <li style="color:#FFFFFF;list-style-type:none">
                              <span style="color:#1E1E1E"
                                ><strong>Storage</strong></span
                              >
                            </li>
                            <li style="color:#969696">
                              <span style="color:#1E1E1E"
                                >Your personal information is stored securely on
                                servers within the EU.</span
                              >
                            </li>
                            <li style="color:#969696">
                              <span style="color:#1E1E1E"
                                >We will hold your data for as long as
                                necessary, but no longer than seven years or
                                until you ask for it to be removed.</span
                              >
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td valign="top">
                          <img
                            src="https://s3-eu-west-1.amazonaws.com/pd-receipt/delete_me.png"
                          />
                        </td>
                        <td>
                          <ul>
                            <li style="color:#FFFFFF;list-style-type:none">
                              <span style="color:#1E1E1E"
                                ><strong>Your rights</strong></span
                              >
                            </li>
                            <li style="color:#969696">
                              <span style="color:#1E1E1E"
                                >If you want us to stop using the above
                                information, delete the information or port your
                                information to another service, please
                                <a
                                  style="color:${env.THEME_ACCENT_COLOR}; text-decoration: none"
                                  href="https://www.projectcpn.eu"
                                  target="_top"
                                  >send us a request</a
                                >
                                and reference the Receipt ID below.</span
                              >
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:15px 0" colspan="2">
                    <hr
                      width="15%"
                      COLOR="${env.THEME_ACCENT_COLOR}"
                      size="1"
                    />
                  </td>
                </tr>
                <tr>
                  <td align="center" colspan="2">
                    <p>
                      Receipt ID:
                      <a
                        href="${env.BLOCKCHAIN_API_URL}/${hash}"
                        target="_blank"
                        rel="noopener noreferrer"
                        >${hash}</a
                      >
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td colspan="2" align="center">
              <p>
                This personal receipt is one of the tools we have developed to
                achieve compliance to the European General Data Protection
                Regulation (GDPR).
              </p>
              ${env.GDPR_EMAIL
                ? `<p>For any GDPR queries, please contact: <a href="mailto:${env.GDPR_EMAIL}">${env.GDPR_EMAIL}</a></p>`
                : ''}
              <p>
                <a
                  href="https://www.projectcpn.eu"
                  style="font-weight: bold;padding: 0px;background-color: ${env.THEME_PRIMARY_COLOR};color: #ffffff;border: 11px solid ${env.THEME_PRIMARY_COLOR};border-radius: 5px;word-wrap: break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;text-decoration: none;"
                  target="_blank"
                  title="Project CPN"
                  >Find out more</a
                >
              </p>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <hr width="80%" COLOR="${env.THEME_ACCENT_COLOR}" size="1" />
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <p>We take the management of your personal data seriously,</p>
              <p>
                <strong>The CPN platform</strong><br />
                <a rel="nofollow" style="text-decoration:none; color:#1E1E1E"
                  >${env.MAIL_FROM}</a
                >
              </p>
            </td>
          </tr>
          <tr>
            <td colspan="2" height="50px"></td>
          </tr>
          <tr style="background-color:${env.THEME_PRIMARY_COLOR}">
            <td align="center" colspan="2">
              <img
                src="https://static1.squarespace.com/static/595cd20e1b10e30e621770e9/t/59fae594085229169f34c6c3/1530174350046/?format=100w"
              />
            </td>
          </tr>
          <tr
            style="background-color:${env.THEME_PRIMARY_COLOR}; color:#FFFFFF"
          >
            <td align="center" colspan="2" style="font-size:0.8em;">
              <strong>The CPN platform</strong><br />
              Company Registration number: XXX<br />
              <br />
              <a rel="nofollow" style="text-decoration:none; color:#ffffff"
                >www.projectcpn.eu</a
              >
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}

module.exports = createReceipt
