// For hver innput job med status:readyForEmail, send en mail til den som har gjort innspillet og sett inputjobben til "readyForStatistics"

const fs = require('node:fs')
const { fylke, mail } = require('../config')
const { default: axios } = require('axios')
const { logger } = require('@vtfk/logger')

module.exports = async (fileContent, job) => {
  const logPrefix = 'sendEmail'
  if (fileContent.layerAttributes.attributes.status === 'readyForEmail') {
    const email = {
      to: [
        fileContent.layerAttributes.attributes.Email
      ],
      from: fylke.noreply,
      subject: `Innbyggerdialog ${fylke.fylke} fylkeskommune`,
      html: `<body><main><p>Hei ${fileContent.layerAttributes.attributes.Name}</p><p>Takk! Ditt innspill er registrert.</p><p>Med denne eposten bekrefter vi å ha mottatt ditt innspill på prosjekt: ${fileContent.project.projectName}.</p><p>Innspillet er arkivert med dokumentnummer: ${fileContent.project.documentNumber}.</p><br><strong>NB. Du kan ikke svare på denne eposten.</strong><br><p>Har du spørsmål, send en mail til <a href='mailto:${fylke.epost}?subject=Innbyggerdialog i 3D, ${fileContent.project.projectName}, dokumentnummer: ${fileContent.project.documentNumber}'>${fylke.epost}</a></p><br><br></main></body>`
    }
    let data
    try {
      logger('info', [logPrefix, `Sending email to: ${fileContent.layerAttributes.attributes.Email}`])
      data = await axios.post(`${mail.url}/mail`, email, { headers: { 'x-functions-key': `${mail.key}` } })
    } catch (error) {
      logger('warn', [logPrefix, `Failed sending email to: ${fileContent.layerAttributes.attributes.Email}`])
    }

    // Om det gikk bra, sett inputJpbben til "readyForStatistics"
    if (data.status === 200) {
      logger('info', [logPrefix, `Email sendt to: ${fileContent.layerAttributes.attributes.Email}`])
      fileContent.layerAttributes.attributes.status = 'readyForStatistics'
      fs.writeFileSync(`inputJobs/${job}`, JSON.stringify(fileContent))
    } else {
      logger('warn', [logPrefix, `Failed sending email to: ${fileContent.layerAttributes.attributes.Email}`])
    }
  }
}
