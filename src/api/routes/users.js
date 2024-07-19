const { isAdmin } = require('../../middlewares/auth')
const {
  getUserById,
  getUsers,
  register,
  login,
  deleteUser
} = require('../controllers/users')

const usersRouter = require('express').Router()

usersRouter.get('/:id', [isAdmin], getUserById)
usersRouter.get('/', [isAdmin], getUsers)
usersRouter.post('/register', register)
usersRouter.post('/login', login)
usersRouter.delete('/:id', [isAdmin], deleteUser)

module.exports = usersRouter
