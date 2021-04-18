'use restrict'

const express = require('express')
const server = express()
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
const router = require('express').Router()

server.use(cors())

dotenv.config()

server.use(morgan('tiny'))
server.use(require('./app.js'))

const PORT = process.env.PORT || 8002

server.listen(PORT, function _listen () {
  console.log(`Server up on port ${PORT}`)
})
