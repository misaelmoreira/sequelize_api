const express = require('express')

require('./database')

const app = express()
const routes = require('./routes')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(routes)

module.exports = app