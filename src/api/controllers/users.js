const { generateSign } = require('../../config/jwt')
const User = require('../models/users')
const bcrypt = require('bcrypt')

const getUsers = async (req, res, next) => {
  try {
    const user = await User.find()
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const register = async (req, res, next) => {
  try {
    const user = new User({
      email: req.body.email,
      password: req.body.password
    })

    const userDuplicated = await User.findOne({ email: req.body.email })

    if (userDuplicated) {
      return res.status(400).json('This user already exists')
    }

    const userSaved = await user.save()
    return res.status(200).json(userSaved)
  } catch (error) {
    return res.status(400).json('An error has occurred')
  }
}

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
      return res.status(400).json('Incorrect email or password')
    }

    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSign(user._id)
      return res.status(200).json({ user, token })
    } else {
      return res.status(400).json('Incorrect email or password')
    }
  } catch (error) {
    return res.status(400).json('Login failed')
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const userDeleted = await User.findByIdAndDelete(id)
    if (!userDeleted) {
      return res.status(404).json('User not found')
    }
    return res.status(200).json({
      message: 'This user has been deleted',
      userDeleted
    })
  } catch (error) {
    return res.status(400).json('An error has occurred')
  }
}

module.exports = { getUsers, getUserById, register, login, deleteUser }
