require('dotenv')
const express = require('express')
const app = express()
const morgan = require('morgan')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./models/index.js')

 

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})