const FileService = require('../services/FileService')
const sanitizer = require('../utils/sanitizer')

async function getFiles(req, res, next) {
  try {
    let downloadedFiles = []
    let formattedFiles = []
    const fileList = await FileService.getFiles()
    
    if(!fileList.files) {
      res.send({
        status: 200,
        data: []
      })
    }

    for(let i = 0; i < fileList.files.length; i++) {
      const file = fileList.files[i]
      const downloadedFile = await FileService.getFile(file)

      if(downloadedFile) {
        downloadedFiles.push(downloadedFile)
      }
    }

    formattedFiles = sanitizer.formatFileList(downloadedFiles)


    res.send(formattedFiles)

  } catch (error) {
    res.send({
      status: error.status || 500,
      message: error.message || "Internal server error"
    })
  }
}


module.exports = {
  getFiles
}