const FileController = require('../controllers/FileController')

const express = require('express')
const router = express.Router()

router.get('/data', FileController.getFiles)

module.exports = router