const fs = require('node:fs')
const { fylke, statistics } = require('../config')
const { default: axios } = require('axios')
const { logger } = require('@vtfk/logger')

module.exports = async (fileContent, job) => {
  const logPrefix = 'createStats'
  if (fileContent.layerAttributes.attributes.status === 'readyForStatistics') {
    logger('info', [logPrefix, 'Creating statistics for each completed job'])
    const stat = {
      system: 'Innbyggerdialog',
      engine: '3d-innbygger-dialog',
      county: fylke.fylke,
      company: 'SMM',
      department: 'Team Plan og bygging',
      description: 'Arkivering av innspill gjort i innbyggerdialog i 3d',
      type: 'Innbyggerdialog',
      documentNumber: fileContent.project.documentNumber,
      projectType: fileContent.project.type,
      projectName: fileContent.project.projectName,
      projectOwner: fileContent.project.projectOwner,
      numberOfAttachments: fileContent.layerAttachmentInfos.length
    }
    const data = await axios.post(`${statistics.url}/Stats`, stat, { headers: { 'x-functions-key': `${statistics.key}` } })

    if (data.status === 200) {
      logger('info', [logPrefix, 'Statistics created, job ready to be deleted'])
      fileContent.layerAttributes.attributes.status = 'readyForPurge'
      fs.writeFileSync(`inputJobs/${job}`, JSON.stringify(fileContent))
    } else {
      logger('warn', [logPrefix, `Creating statistics failed for job: ${job}`])
    }
  }
}
