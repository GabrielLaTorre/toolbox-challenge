import express from 'express'
import cors from 'cors'
import File from './routes/File.js'

const app = express()

app.use(cors())

app.use('/files', File)

app.listen(4000, () => {
  console.log("App listen on port 4000")
})