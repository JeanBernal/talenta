const express = require('express')
const app = express()
const path = require('path')
const db = require(path.join(__dirname,'./config/db'))



app.use(express.json());

// Routes middlewares
app.use('/api', require(path.join(__dirname, 'routes/api')))


// Error Handler
app.use(function (err, req, res, next) {
  res.status(500);
  res.json({ error: err });
})

module.exports = app
