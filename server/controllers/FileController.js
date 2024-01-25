const FileService = require('../services/FileService')

async function getFiles(req, res, next) {
  const result = await FileService.getFiles()

  res.send(result)
}


module.exports = {
  getFiles
}