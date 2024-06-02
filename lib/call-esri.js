// const { request, ApiKeyManager } = require('@esri/arcgis-rest-request')
const { queryFeatures, getAttachments, getFeature, updateFeatures } = require('@esri/arcgis-rest-feature-service')

const query = async (url, queryString) => {
  /**
        * Function for getting attachments to a feature based on then featureId
        *
        * @param {string} url - The feature you want to get data from
        * @param {string} queryString - Query string.
        *
    */
  const data = await queryFeatures({
    url,
    where: queryString
  })

  return data.features
}

const attachmentsInfo = async (url, featureId) => {
  /**
        * Function for getting attachments to a feature based on then featureId
        *
        * @param {string} id - The ID of the feature you want to get.
        * @param {string} url - The feature you want to get data from
        *
    */
  const data = await getAttachments({
    url,
    featureId
  })
  return data.attachmentInfos
}

const feature = async (url, id) => {
  /**
        * Function for getting a feature based on a given ID
        *
        * @param {string} id - The ID of the feature you want to get.
        * @param {string} url - The feature you want to get data from
        *
    */

  const data = await getFeature({
    url,
    id
  })
  return [data]
}

const update = async (url, OBJECTID, status) => {
  /**
        * Function for getting a feature based on a given ID
        *
        * @param {string} url - The feature you want to get data from.
        * @param {string} OBJECTID - The ID of the feature you want to update.
        * @param {string} status - The field beeing updated is status, set a status for feature.
        *
    */
  const featureToUpdate = {
    attributes: {
      objectId: OBJECTID,
      Status: status
    }
  }

  const data = await updateFeatures({
    url,
    features: [featureToUpdate]
  })
  return data
}

module.exports = {
  query,
  attachmentsInfo,
  feature,
  update
}
