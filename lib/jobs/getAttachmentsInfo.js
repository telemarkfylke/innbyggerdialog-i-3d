const { attachmentsInfo } = require('../call-esri')

module.exports = async (url, id) => {
  if (!url) throw new Error('Missing required parameter "url"')
  if (!id) throw new Error('Missing required parameter "id"')

  const data = await attachmentsInfo(url, id)

  return data
}
