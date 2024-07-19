const { fusionController } = require('../controllers/fusion')

const fusionRouter = require('express').Router()

fusionRouter.post('/', fusionController)

module.exports = fusionRouter
