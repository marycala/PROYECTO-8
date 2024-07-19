const User = require('../api/models/users')
const { verifyJwt } = require('../config/jwt')

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const parsedToken = token.replace('Bearer ', '')

    const { id } = verifyJwt(parsedToken)

    const user = await User.findById(id)

    if (user.rol === 'admin') {
      user.password = null
      req.user = user
      next()
    } else {
      return res.status(400).json('This action only can be realize by admin')
    }
  } catch (error) {
    return res.status(400).json('You are not authorized')
  }
}

module.exports = { isAdmin }
