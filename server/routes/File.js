import { getFiles } from '../controllers/FileController.js'

import { Router } from 'express'
const router = Router()

router.get('/data', getFiles)

export default router