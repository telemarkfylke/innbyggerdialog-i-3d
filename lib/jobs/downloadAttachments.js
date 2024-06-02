const { default: axios } = require('axios')

module.exports = async (url, featureId, attachmentId) => {
  if (!url) throw new Error('Missing required parameter "url"')
  if (!featureId) throw new Error('Missing required parameter "featureId"')
  if (!attachmentId) throw new Error('Missing required parameter "featureId"')

  const data = await axios.get(`${url}/${featureId}/attachments/${attachmentId}`, { responseType: 'arraybuffer' })
  if (data.status !== 200) throw new Error('Failed fetching the attachment')
  if (!data.data) return []

  return data
}
