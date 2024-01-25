const express = require('express')
const app = express()
const cors = require('cors')
const Files = require('./routes/File')

app.use(cors())

app.use('/files', Files)

app.listen(4000, () => {
  console.log("App listen on port 4000")
})