const { deleteFile } = require('../../utils/deletefile')
const Author = require('../models/authors')

const getAuthors = async (req, res, next) => {
  try {
    const author = await Author.find()
    return res.status(200).json(author)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const getAuthorByNationality = async (req, res, next) => {
  try {
    const nationality = req.params
    const author = await Author.find({ nationality })
    return res.status(200).json(author)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const getAuthorByAward = async (req, res, next) => {
  try {
    const { award } = req.params
    const author = await Author.find({ award })
    return res.status(200).json(author)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const getAuthorById = async (req, res, next) => {
  try {
    const { id } = req.params
    const author = await Author.findById(id)
    return res.status(200).json(author)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const postAuthor = async (req, res, next) => {
  try {
    const newAuthor = new Author(req.body)

    if (req.file) {
      newAuthor.image = req.file.path
    }

    const authorDuplicated = await Author.findOne({
      name: req.body.name
    })

    if (authorDuplicated) {
      return res.status(400).json('That author already exists')
    }

    const authorSaved = await newAuthor.save()
    return res.status(201).json(authorSaved)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const putAuthor = async (req, res, next) => {
  try {
    const { id } = req.params
    const existsAuthor = await Author.findById(id)

    if (!existsAuthor) {
      deleteFile(req.file.path)
      return res.status(404).json('Author not found')
    }
    if (!req.file) {
      const putAuthor = await Author.findByIdAndUpdate(_id, req.body, {
        new: true
      })
      return res.status(200).json(putAuthor)
    } else {
      deleteFile(existsAuthor.image)
      const newAuthor = await Author.findByIdAndUpdate(
        _id,
        {
          name: req.body.file,
          image: req.file.path
        },
        {
          new: true
        }
      )
      return res.status(200).json(newAuthor)
    }
  } catch (error) {
    console.log(error)
    return res.status(400).json('Request error')
  }
}

const deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params
    const authorDeleted = await Author.findByIdAndDelete(id)
    return res.status(200).json(authorDeleted)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

module.exports = {
  getAuthors,
  getAuthorByNationality,
  getAuthorByAward,
  getAuthorById,
  postAuthor,
  putAuthor,
  deleteAuthor
}
