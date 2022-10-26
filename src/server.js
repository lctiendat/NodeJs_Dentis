require('dotenv').config();
require('module-alias/register')
require('express-group-routes')
const express = require('express')
const app = express()
const morgan = require('morgan')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

const AchievementRoute = require('@routes/achievement.route')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.group('/api', (router) => {
    router.use('/achievements', AchievementRoute)
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})