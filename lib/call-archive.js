const axios = require('axios').default
const getAccessToken = require('./get-endtraid-token')
const { archive } = require('../config')
const { logger } = require('@vtfk/logger')

module.exports.callArchive = async (endpoint, payload) => {
  const accessToken = await getAccessToken(archive.scope)
  let data
  try {
    data = await axios.post(`${archive.url}/${endpoint}`, payload, { headers: { Authorization: `Bearer ${accessToken}` } })
  } catch (error) {
    logger('error', ['call-archive', error]) 
  }
  return data
}
