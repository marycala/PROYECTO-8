const { deleteFile } = require('../../utils/deletefile')
const Book = require('../models/books')

const getBooks = async (req, res, next) => {
  try {
    const work = await Book.find()
    return res.status(200).json(work)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const getBookByName = async (req, res, next) => {
  try {
    const { name } = req.params
    const book = await Book.find({ name })
    return res.status(200).json(book)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const getBookByYear = async (req, res, next) => {
  try {
    const { year } = req.params
    const book = await Book.find({ year })
    return res.status(200).json(book)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const getBookByGenre = async (req, res, next) => {
  try {
    const { genre } = req.params
    const book = await Book.find({ genre })
    return res.status(200).json(book)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const getBookByAuthor = async (req, res, next) => {
  try {
    const { author } = req.params
    const book = await Book.find({ author })
    return res.status(200).json(book)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params
    const book = await Book.findById(id)
    return res.status(200).json(book)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const postBook = async (req, res, next) => {
  try {
    const newBook = new Book(req.body)

    if (req.file) {
      newBook.image = req.file.path
    }

    const bookDuplicated = await Book.findOne({
      name: req.body.name
    })

    if (bookDuplicated) {
      return res.status(409).json('That book already exists')
    }

    const bookSaved = await newBook.save()
    return res.status(200).json(bookSaved)
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

const putBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const existsBook = await Book.findById(id)

    if (!existsBook) {
      deleteFile(req.file.path)
      return res.status(404).json('Book not found')
    }
    if (!req.file) {
      const putBook = await Book.findByIdAndUpdate(_id, req.body, {
        new: true
      })
      return res.status(200).json(putBook)
    } else {
      deleteFile(existsBook.image)
      const newBook = await Book.findByIdAndUpdate(
        _id,
        {
          name: req.body.file,
          image: req.file.path
        },
        {
          new: true
        }
      )
      return res.status(200).json(newBook)
    }
  } catch (error) {
    console.log(error)
    return res.status(400).json('Request error')
  }
}

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const bookDeleted = await Book.findByIdAndDelete(id)

    deleteFile(bookDeleted.image)

    return res.status(200).json({
      message: 'Element eliminated',
      bookDeleted
    })
  } catch (error) {
    return res.status(400).json('Request error')
  }
}

module.exports = {
  getBooks,
  getBookByName,
  getBookByYear,
  getBookByGenre,
  getBookByAuthor,
  getBookById,
  postBook,
  putBook,
  deleteBook
}
