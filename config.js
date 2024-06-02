require('dotenv').config()

module.exports = {
  statistics: {
    url: process.env.STATISTICS_URL,
    key: process.env.STATISTICS_KEY
  },
  archive: {
    url: process.env.ARCHIVE_URL,
    scope: process.env.ARCHIVE_SCOPE
  },
  appReg: {
    tenantId: process.env.TENANT_ID,
    secret: process.env.APP_REG_SECRET,
    clientId: process.env.APP_REG_CLIENT_ID
  },
  fylke: {
    epost: process.env.FYLKE_EPOST,
    noreply: process.env.FYLKE_NOREPLY,
    fylke: process.env.FYLKE
  },
  mail: {
    url: process.env.MAIL_URL,
    key: process.env.MAIL_KEY
  }
}
