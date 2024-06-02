(async () => {
  const { projects } = require('./lib/projects')
  const fs = require('node:fs')
  const update = require('./lib/jobs/updateFeatures')
  const { logger } = require('@vtfk/logger')
  const queryFeatures = require('./lib/jobs/queryFeatures')
  const getAttachmentsInfo = require('./lib/jobs/getAttachmentsInfo')
  const donwloadAttachment = require('./lib/jobs/downloadAttachments')
  const mime = require('mime')
  const createPdf = require('./lib/jobs/createPdf')
  const sendEmail = require('./lib/sendEmail')
  const createStats = require('./lib/createStats')
  const { callArchive } = require('./lib/call-archive')

  const logPrefix = 'testing'

  logger('info', [logPrefix, 'Starting script to get all the innspill and attachments from innbyggerdialog to archive'])

  // Opprett mappe struktur for prosjektene. Dette må kjøres før vi kjører en require på jobbene.
  try {
    if (!fs.existsSync('./inputJobs')) {
      logger('info', [logPrefix, 'Creating folder strutcture, inputJobs'])
      fs.mkdirSync('./inputJobs', { recursive: true })
    }
    if (!fs.existsSync('./attachments')) {
      logger('info', [logPrefix, 'Creating folder strutcture, attachments'])
      fs.mkdirSync('./attachments', { recursive: true })
    }
    if (!fs.existsSync('./archiveJobs')) {
      logger('info', [logPrefix, 'Creating folder strutcture, archiveJobs'])
      fs.mkdirSync('./archiveJobs', { recursive: true })
    }
  } catch (error) {
    logger('warn', [logPrefix, 'Failed to create the folder strutcture'], error)
  }

  projects.forEach(async p => {
    const name = p.projectName.replace(/[^\w\s]/gi, '_')
    if (p.enabled === true) {
      const folderName = `./attachments/${name}`
      try {
        if (!fs.existsSync(folderName)) {
          logger('info', [logPrefix, `Creating folder strutcture, ${folderName}`])
          fs.mkdirSync(folderName, { recursive: true })
        }
      } catch (error) {
        logger('warn', [logPrefix, `Failed to create the folder strutcture, ${folderName}`], error)
      }
      // Henter alle innspill som er sendt inn på vegne av en privatperson
      let res
      try {
        logger('info', [logPrefix, `Get all the innspill from the: ${p.projectName} project`])
        res = await queryFeatures(p.layer, 'innspill')
        if (res.length === 0) {
          logger('info', [logPrefix, `No innspill found for: ${p.projectName} project`])
        }
      } catch (error) {
        logger('warn', ['generateInputs', `Failed getting the innspill from the: ${p.projectName} project`, error])
      }
      // For hvert innspill, lag en input fil som kan brukes til å generere en PDF og sende til arkivet.
      // Generate Inputs
      for (const priv of res) {
        const inputObj = {
          project: {},
          layerAttributes: {},
          layerAttachmentInfos: {}
        }

        inputObj.project = p
        inputObj.project.documentNumber = null
        inputObj.layerAttributes = priv
        const projectName = p.projectName.replace(/[^\w\s]/gi, '_')

        // Om det finnes attachments, legg de til.
        let attachmentInfo
        try {
          logger('info', [logPrefix, `Getting the attachments info from the: ${p.projectName} project`])
          attachmentInfo = await getAttachmentsInfo(p.layer, priv.attributes.OBJECTID)
        } catch (error) {
          logger('warn', [logPrefix, `Failed getting the attachments info from the: ${p.projectName} project`], error)
        }
        inputObj.layerAttachmentInfos = attachmentInfo

        // Opprett en mappestruktur om innspillet har vedlegg. Struktur = attachments/navn på prosjekt/innspill id
        const folderName = `./attachments/${projectName}`
        const folderProjectName = `./attachments/${projectName}/${priv.attributes.OBJECTID}`
        try {
          logger('info', [logPrefix, `Creating the folder structure for the: ${p.projectName} project`])
          if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName, { recursive: true })
          }
          if (!fs.existsSync(folderProjectName, { recursive: true })) {
            fs.mkdirSync(folderProjectName)
          }
        } catch (error) {
          logger('warn', [logPrefix, `Failed to create the folder structure for the: ${p.projectName} project`])
        }

        // Hent alle attachments som hører til et innspill, det kan være ingen eller mange.
        let contentType
        let extension
        let filename
        if (attachmentInfo.length > 0) {
          // Last ned alle attachments, hent filtype og lagre filen.
          attachmentInfo.forEach(async a => {
            let attachment
            try {
              logger('info', [logPrefix, `Downloading all the attachments that belongs to: ${p.projectName} project with ID: ${priv.attributes.OBJECTID}`])
              attachment = await donwloadAttachment(p.layer, priv.attributes.OBJECTID, a.id)
            } catch (error) {
              logger('warn', [logPrefix, `Failed to download all the attachments that belongs to: ${p.projectName} project with ID: ${priv.attributes.OBJECTID}`])
            }
            // Hent filtype
            contentType = attachment.headers['content-type']
            extension = mime.getExtension(contentType)
            // Hent filnavn
            filename = attachment.headers['content-disposition'].split('filename=')[1].split('.')[0].split('"')[1]
            // Lagre fil
            logger('info', [logPrefix, `Saving all the attachments that belongs to: ${p.projectName} project with ID: ${priv.attributes.OBJECTID}`])
            fs.writeFileSync(`${folderProjectName}/${filename}.${extension}`, attachment.data)
          })
        }
        // Angi status
        inputObj.layerAttributes.attributes.status = 'readyForArchive'
        // Skriv til fil
        const fileLocation = (`inputJobs/${projectName}_${priv.attributes.OBJECTID}.json`)
        try {
          logger('info', [logPrefix, 'Saving the input jobs'])
          fs.writeFileSync(fileLocation, JSON.stringify(inputObj), null, 2)
        } catch (error) {
          logger('warn', [logPrefix, 'Failed to save the input jobs'], error)
        }

        // Generer PDF og lagre den i attachments under samme strunktur som vedlegg.
        try {
          await createPdf(fileLocation, folderProjectName)
        } catch (error) {
          logger('warn', [logPrefix, 'Failed to create the pdf'], error)
        }

        try {
          logger('info', [logPrefix, 'Trying to update the innspill on the server'])
          await update(p.layer, priv.attributes.OBJECTID, 'readyForArchive')
          logger('info', [logPrefix, 'The innspill is updated on the server'])
        } catch (error) {
          logger('warn', [logPrefix, 'Failed to update the innspill on the server', error])
        }
      }
      // END Generate Inputs

      // Generate Archive Jobs
      // Hent alle input filene som er klare for arkivering.
      const archiveJobs = {}
      const documents = []
      const projectName = p.projectName.replace(/[^\w\s]/gi, '_')
      const projectPath = (`./attachments/${projectName}`)
      const innspillFilePath = fs.readdirSync(projectPath)

      logger('info', [logPrefix, `Creating archive jobs for project: ${projectName}`])
      archiveJobs[projectName] = {
        projectName: p.projectName,
        projectOwner: p.projectOwner,
        type: p.type,
        archiveCase: p.archiveCase,
        documents: []
      }

      innspillFilePath.forEach(innspill => {
        const files = fs.readdirSync(`${projectPath}/${innspill}`)
        const attachements = []
        files.forEach(file => {
          let extension = JSON.stringify(file)
          extension = extension.split('.')[1].split('"')[0]
          const base64 = fs.readFileSync(`${projectPath}/${innspill}/${file}`, 'base64')
          attachements.push({
            title: file,
            format: extension,
            OBJECTID: innspill,
            Base64Data: base64
          })
        })
        documents.push(attachements)
      })

      archiveJobs[projectName].documents = documents
      logger('info', [logPrefix, `Finished creating archive jobs for project: ${projectName}`])
      fs.writeFileSync(`./archiveJobs/${projectName}.json`, JSON.stringify(archiveJobs))
      // END Generate Archive Jobs

      // Archive
      // Hent alle arkivjobbene som er klare for arkivering og arkiver disse.
      const jobsToArchive = fs.readdirSync('./archiveJobs')
      const jobs = []

      jobsToArchive.forEach(archiveJob => {
        logger('info', [logPrefix, `Getting ready to archive document(s) from ${archiveJob}`])
        const job = fs.readFileSync(`./archiveJobs/${archiveJob}`, 'utf8')
        jobs.push(JSON.parse(job))
      })

      if (jobs.length === 0) {
        logger('info', [logPrefix, 'No new innspill to archive'])
      }

      logger('info', [logPrefix, `Found ${jobs.length} new innspill to archive`])
      // For hvert innspill, post til arkivet og oppdater input filen med "DocumentNumber" og endre status til readyForEmail.
      for (const job of jobs) {
        const newArchiveJobs = []

        for (const doc of job[Object.keys(job)].documents) {
          let OBJECTID
          const payload = {
            service: 'DocumentService',
            method: 'CreateDocument',
            parameter: {
              title: '',
              Category: 'Dokument inn',
              Status: 'J',
              CaseNumber: job[Object.keys(job)].archiveCase,
              ResponsiblePersonEmail: job[Object.keys(job)].projectOwner,
              Files: []
            }
          }
          // For hvert dokument, legg til i payload og post til arkivet.
          for (const d of doc) {
            if (d.title.startsWith('Innspill_') && d.title.endsWith('.pdf')) {
              OBJECTID = d.OBJECTID
              payload.parameter.title = d.title.split('.')[0]
              const mainDoc = {
                Base64Data: d.Base64Data,
                Category: '1',
                Format: d.format,
                Status: 'F',
                Title: d.title,
                VersionFormat: 'A'
              }
              // Innspill dokumentet til første posisjon i arrayet for å sikre at dette blir hoveddokumentet i arkivet.
              payload.parameter.Files.splice(0, 0, mainDoc)
            } else {
              const attachment = {
                Base64Data: d.Base64Data,
                Format: d.format,
                Status: 'F',
                Title: d.title,
                VersionFormat: (d.format.toLowerCase() === 'pdf') ? 'P' : null
              }
              payload.parameter.Files.push(attachment)
            }
          }

          // For hver innspill, erstatt arrayet med informasjon om innspillet og attachments med et tomt array.
          const newArchiveJob = doc.filter(innspill => innspill.OBJECTID !== OBJECTID)

          if (newArchiveJob.length > 0) {
            newArchiveJobs.push(newArchiveJob)
          }

          // Post til arkivet
          let data
          try {
            logger('info', [logPrefix, `Trying to archive current document: ${payload.parameter.title}`])
            data = await callArchive('archive', payload)
          } catch (error) {
            logger('warn', [logPrefix, `Failed to archive current document: ${payload.parameter.title}`, error])
          }

          if (data?.status === 200) {
            // Om status på arkiveringen er 200 Ok, returner "DocumentNumber" og skriv dette til inputObjektet og endre statusen til readyForEmail. Slett også arkivjobben som ble postet
            logger('info', [logPrefix, `Document with title: ${payload.parameter.title} successfully archived. DocumentNumber: ${data.data.DocumentNumber}`])
            const fileContent = JSON.parse(fs.readFileSync(`inputJobs/${Object.keys(job)}_${OBJECTID}.json`, 'utf8'))
            fileContent.project.documentNumber = data.data.DocumentNumber
            fileContent.layerAttributes.attributes.status = 'readyForEmail'

            // Skriv endringene til input filene.
            logger('info', [logPrefix, `Updating current file: ${Object.keys(job)}_${OBJECTID}.json`])
            fs.writeFileSync(`inputJobs/${Object.keys(job)}_${OBJECTID}.json`, JSON.stringify(fileContent))

            // Slett vedlegg og pdf
            fs.rm(`./attachments/${Object.keys(job)}/${fileContent.layerAttributes.attributes.OBJECTID}`, { recursive: true }, () => {
              logger('info', [logPrefix, `Attachments was deleted from job: ${Object.keys(job)} with ID: ${fileContent.layerAttributes.attributes.OBJECTID}`])
            })
          } else {
            logger('warn', [logPrefix, `Failed to archive current document: ${payload.parameter.title}`, data.data])
          }
        }
        // Oppdater arkivjobben med de dokumentene som ikke ble arkivert.
        logger('info', [logPrefix, `Removing jobs that have been archived. Jobs left to be archived: ${newArchiveJobs.length}`])
        job[Object.keys(job)].documents = newArchiveJobs

        const projectName = job[Object.keys(job)].projectName.replace(/[^\w\s]/gi, '_')

        if (newArchiveJobs.length > 0) {
          fs.writeFileSync(`./archiveJobs/${projectName}.json`, JSON.stringify(job), { encoding: 'utf8', flag: 'w' })
        } else {
          try {
            await fs.promises.rm(`./archiveJobs/${projectName}.json`)
            logger('info', [logPrefix, `Deleted: ${projectName}, all files have been archived.`])
          } catch (error) {
            logger('info', [logPrefix, `Failed to delete: ${projectName}`])
          }
        }
      }
      // END Archive

      // Send Email & Create Stats & Clean up
      const inputJobs = fs.readdirSync('./inputJobs')
      for (const job of inputJobs) {
        const fileContent = JSON.parse(fs.readFileSync(`./inputJobs/${job}`, 'utf8'))
        // Send epost til hver person som har sendt inn et innspill om at dette er behandlet
        if (fileContent.layerAttributes.attributes.status === 'readyForEmail') {
          await sendEmail(fileContent, job)
        }
        // Generer statistikk
        if (fileContent.layerAttributes.attributes.status === 'readyForStatistics') {
          await createStats(fileContent, job)
        }
        // Skriver tilbake per inputjob (til innbyggerdialog) at det er behandlet og sletter innspillet (lokalt).
        if (fileContent.layerAttributes.attributes.status === 'readyForPurge') {
          try {
            logger('info', [logPrefix, `Trying to update innspill, ${job} with ID: ${fileContent.layerAttributes.attributes.OBJECTID}`])
            const updateStatus = await update(fileContent.project.layer, fileContent.layerAttributes.attributes.OBJECTID, 'finished')
            if (updateStatus.updateResults[0].success) {
              logger('info', [logPrefix, `Innspill updated: ${job} with ID: ${fileContent.layerAttributes.attributes.OBJECTID}`])
              fs.rm(`./inputJobs/${job}`, () => {
                logger('info', [logPrefix, `Innspill deleted: ${job} with ID: ${fileContent.layerAttributes.attributes.OBJECTID}`])
              })
            }
          } catch (error) {
            logger('warn', [logPrefix, `Failed to delete the innspill or to post the change to innbyggerdialog, ${job} with ID: ${fileContent.layerAttributes.attributes.OBJECTID}`], error)
          }
        }
      }
      // END Send Email & Create Stats & Clean Up
    } else {
      // Do nothing, project is not enabled.
      logger('info', [logPrefix, 'Current project not enabled'])

      // Om prosjektet ikke er aktivert, slett alle filer som hører til prosjektet om det finnes noen.
      const name = p.projectName.replace(/[^\w\s]/gi, '_')
      const folderName = `./attachments/${name}`
      try {
        if (fs.existsSync(folderName)) {
          fs.rm(folderName, { recursive: true }, () => {
            logger('info', [logPrefix, `Deleted: ${folderName}`])
          })
        }
      } catch (error) {
        logger('warn', [logPrefix, `Failed to delete: ${folderName}`, error])
      }
    }
  })
})()
