import { getExternalFiles, getExternalFile} from '../services/FileService.js'
import { formatFileList } from '../utils/sanitizer.js'

export async function getFiles(req, res, next) {
  try {
    let downloadedFiles = []
    let formattedFiles = []
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


    res.send(formattedFiles)

  } catch (error) {
    res.send({
      status: error.status || 500,
      message: error.message || "Internal server error"
    })
  }
}

export async function listFiles (req, res, next) {
  try {
    const fileList = await getExternalFiles()
    res.send(fileList)
  } catch (error) {
    res.send({
      status: error.status || 500,
      message: error.message || "Internal server error"
    })
  }
}