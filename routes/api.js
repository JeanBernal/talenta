const path = require('path')
const route = require('express').Router()

route.use('/user', require(path.join(__dirname, '/user')))

module.exports = route;