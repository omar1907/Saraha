const express = require('express')
const { dbConnection } = require('./config/database/dbConnection')
const app = express()
app.use(express.json())
const port = process.env.PORT

require('dotenv').config()
app.use(require('./api/user.routes'))
app.use(require('./api/msg.routes'))


dbConnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))