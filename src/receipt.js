const html = require('dedent-js')
const env = require('./env')

const sender = env.MAIL_FROM

function createReceipt({
  user_name,
  cpn_user_id,
  given_personal_data,
  consents,
}) {
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
            <td align="right">${new Date().toGMTString()}</td>
          </tr>
          <tr>
            <td colspan="2">
              <p>Dear ${user_name || 'CPN user'},</p>
              <p>
                When you recently joined the CPN platform you gave us some of
                your personal information.
              </p>
              <p>
                Below is a receipt of your personal information to show what we
                collected, and how we use it; we use this receipt to show how
                individuals and organisations can track and manage the use of
                personal data.
                <a
                  style="color:#FF3C7D; text-decoration: none"
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
                    <hr COLOR="#FF3C7D" size="1" />
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
                                pi =>
                                  `<li style="color:#969696"><span style="color:#1E1E1E">${pi}</span></li>`
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
                                      c =>
                                        `<li style="color:#969696"><span style="color:#1E1E1E">${
                                          c.description
                                        }</span></li>`
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
                    <hr width="15%" COLOR="#FF3C7D" size="1" />
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
                            ${consents
                              .map(
                                c =>
                                  `<li style="color:#969696"><span style="color:#1E1E1E">${
                                    c.purpose
                                  }</span></li>`
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
                    <hr width="15%" COLOR="#FF3C7D" size="1" />
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
                            <li style="color:#969696">
                              <span style="color:#1E1E1E"
                                >We don't share your information with any
                                third-party.</span
                              >
                            </li>
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
                                  style="color:#FF3C7D; text-decoration: none"
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
                    <hr width="15%" COLOR="#FF3C7D" size="1" />
                  </td>
                </tr>
                <tr>
                  <td align="center" colspan="2">
                    <p>Receipt ID: ${cpn_user_id}</p>
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
              <p>
                <a
                  href="https://www.projectcpn.eu"
                  style="font-weight: bold;padding: 0px;background-color: #BE005A;color: #ffffff;border: 11px solid #BE005A;border-radius: 5px;word-wrap: break-word;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;text-decoration: none;"
                  target="_blank"
                  title="How to enter the UXUK Awards"
                  >Find out more</a
                >
              </p>
            </td>
          </tr>
          <tr>
            <td colspan="2"><hr width="80%" COLOR="#FF3C7D" size="1" /></td>
          </tr>
          <tr>
            <td colspan="2">
              <p>We take the management of your personal data seriously,</p>
              <p>
                <strong>The CPN platform</strong><br />
                <a rel="nofollow" style="text-decoration:none; color:#1E1E1E"
                  >${sender}</a
                >
              </p>
            </td>
          </tr>
          <tr>
            <td colspan="2" height="50px"></td>
          </tr>
          <tr style="background-color:#BE005A">
            <td align="center" colspan="2">
              <img
                src="https://static1.squarespace.com/static/595cd20e1b10e30e621770e9/t/59fae594085229169f34c6c3/1530174350046/?format=100w"
              />
            </td>
          </tr>
          <tr style="background-color:#BE005A; color:#FFFFFF">
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
