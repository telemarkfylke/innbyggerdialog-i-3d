const pdf = require('html-pdf')
const fs = require('fs')
const mustache = require('mustache')
const { logos } = require('../../assets/logo')
const { fylke } = require('../../config')
const { logger } = require('@vtfk/logger')

module.exports = async (view, savePath) => {
  const logPrefix = 'createPdf'
  // Read the files
  const htmlTemplate = fs.readFileSync('lib/templates/innspill.html', 'utf8')
  view = fs.readFileSync(view, 'utf8')

  // Convert the view back to object
  const viewAsObj = JSON.parse(view)
  logger('info', [logPrefix, `Creating PDF for Innspill in project:${viewAsObj.project.projectName} made by: ${viewAsObj.layerAttributes.attributes.Name}`])

  // Insert function for returning only the names of the attachments
  viewAsObj.name = 'function () {return this.name}'
  // Insert a converted date to something readable for humans
  const date = new Date(viewAsObj.layerAttributes.attributes.Date).getDate()
  const month = new Date(viewAsObj.layerAttributes.attributes.Date).getMonth()
  const year = new Date(viewAsObj.layerAttributes.attributes.Date).getFullYear()
  const hours = new Date(viewAsObj.layerAttributes.attributes.Date).getHours()
  const min = new Date(viewAsObj.layerAttributes.attributes.Date).getMinutes()
  const newDate = (`${date}.${month}.${year} - ${hours}:${min}`)
  viewAsObj.dato = newDate

  if (viewAsObj.layerAttributes.attributes.Category2 !== 'privat' && viewAsObj.layerAttributes.attributes.Category2 !== null) {
    viewAsObj.isOrg = true
  }

  if (fylke.fylke === 'Telemark') {
    viewAsObj.logo = logos.telemark
  } else {
    viewAsObj.logo = logos.vestfold
  }

  // Insert data from the view to the htmlTemplate
  const html = mustache.render(htmlTemplate, viewAsObj)

  // Create a pdf from the html file created and save it.
  return new Promise((resolve, reject) => {
    pdf.create(html, { format: 'A4' }).toFile(`${savePath}/Innspill_${viewAsObj.layerAttributes.attributes.Name}.pdf`, function (err, res) {
      if (err) {
        logger('warn', [logPrefix, `Failed creating PDF for Innspill in project:${viewAsObj.project.projectName} made by: ${viewAsObj.layerAttributes.attributes.Name}`], err)
        reject(err)
      } else {
        logger('info', [logPrefix, `PDF for Innspill in project:${viewAsObj.project.projectName} made by: ${viewAsObj.layerAttributes.attributes.Name} created!`])
        resolve(res)
      }
    })
  })
}
