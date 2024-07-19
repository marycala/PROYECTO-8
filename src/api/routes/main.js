const authorsRouter = require('./authors')
const booksRouter = require('./books')
const fusionRouter = require('./fusion')
const usersRouter = require('./users')

const mainRouter = require('express').Router()

mainRouter.use('/authors', authorsRouter)
mainRouter.use('/books', booksRouter)
mainRouter.use('/users', usersRouter)
mainRouter.use('/fusion', fusionRouter)

module.exports = mainRouter
