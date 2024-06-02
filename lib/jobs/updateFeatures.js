const { update } = require('../call-esri')

module.exports = async (url, OBJECTID, status) => {
  if (!url) throw new Error('Missing required parameter "url"')
  if (!OBJECTID) throw new Error('Missing required parameter "OBJECTID"')
  if (!status) throw new Error('Missing required parameter "status"')

  const data = await update(url, OBJECTID, status)

  return data
}
