const route = require('express').Router()
const path = require('path')
const userCtr = require(path.join(__dirname, '../controllers/userCtr'))

route.get('/',userCtr.index)
route.post('/create', userCtr.store)
route.get('/:id', userCtr.show)
route.put('/:id', userCtr.update)
route.delete('/:id', userCtr.destroy)

module.exports = route