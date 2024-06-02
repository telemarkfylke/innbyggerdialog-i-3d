const { feature } = require('../call-esri')

module.exports = async (url, id) => {
  if (!url) throw new Error('Missing required parameter "url"')
  if (!id) throw new Error('Missing required parameter "id"')

  const data = await feature(url, id)

  return data
}
