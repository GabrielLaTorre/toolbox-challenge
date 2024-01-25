const axiosClient = require('../utils/axiosClient')
const sanitizer = require('../utils/sanitizer')

const client = axiosClient.getClient()

async function getFiles() {
  const response = await client.get('/v1/secret/files')
  return response.data
}

module.exports = {
  getFiles
}