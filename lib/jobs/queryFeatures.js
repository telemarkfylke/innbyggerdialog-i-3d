const { query } = require('../call-esri')

/**
    * Function for quering a feature.
    *
    * @param {string} url - The feature you want to get data from
    * @param {string} type - Type of query you want to use. innspill, punkt, linje, flate
*/
module.exports = async (url, type) => {
  if (!url) throw new Error('Missing required parameter "url"')
  if (!type) throw new Error('Missing required parameter "type"')
  let queryString
  if (type === 'innspill') {
    // Finner bare de innspillene som har status = null, det betyr at de ikke er plukket opp enda.
    queryString = 'Status = null'
  } else {
    // Ikke gjør noe.
  }

  const data = await query(url, queryString)

  return data
}
