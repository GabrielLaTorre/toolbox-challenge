import { getExternalFiles, getExternalFile} from '../services/FileService.js'
import { formatFileList } from '../utils/sanitizer.js'

export async function getFiles(req, res, next) {
  try {
    const { fileName } = req.query
    let downloadedFiles = []
    let formattedFiles = []

    if(fileName) {
      const downloadedFile = await getExternalFile(fileName)

      if(downloadedFile) {
        downloadedFiles.push(downloadedFile)
      }

      formattedFiles = formatFileList(downloadedFiles)
    } else {
      const fileList = await getExternalFiles()
      
      if(!fileList.files) {
        res.send({
          status: 200,
          data: []
        })
      }
  
      for(let i = 0; i < fileList.files.length; i++) {
        const file = fileList.files[i]
        const downloadedFile = await getExternalFile(file)
  
        if(downloadedFile) {
          downloadedFiles.push(downloadedFile)
        }
      }
  
      formattedFiles = formatFileList(downloadedFiles)
    }

    if(formattedFiles && formattedFiles.length > 0) {
      res.send(formattedFiles)
    } else {
      res.status(404)
      .json({
        message: "Files not found"
      })
    }

  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message || "Internal server error"
    })
  }
}

export async function listFiles (req, res, next) {
  try {
    const fileList = await getExternalFiles()
    res.send(fileList)
  } catch (error) {
    res.status(error.status || 500).json({
      message: error.message || "Internal server error"
    })
  }
}