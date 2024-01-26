import { getFiles, listFiles } from '../controllers/FileController.js'

import { Router } from 'express'
const router = Router()

router.get('/data', getFiles)
router.get('/list', listFiles)

export default router
