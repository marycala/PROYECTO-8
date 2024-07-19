const { isAdmin } = require('../../middlewares/auth')
const { uploadBook } = require('../../middlewares/file')

const {
  getBookByName,
  getBookByYear,
  getBookByGenre,
  getBookByAuthor,
  getBooks,
  getBookById,
  postBook,
  putBook,
  deleteBook
} = require('../controllers/books')

const booksRouter = require('express').Router()

booksRouter.get('/name/:name', getBookByName)
booksRouter.get('/year/:year', getBookByYear)
booksRouter.get('/genre/:genre', getBookByGenre)
booksRouter.get('/author/:author', getBookByAuthor)
booksRouter.get('/:id', getBookById)
booksRouter.get('/', getBooks)
booksRouter.post('/', [isAdmin], uploadBook.single('image'), postBook)
booksRouter.put('/:id', [isAdmin], uploadBook.single('image'), putBook)
booksRouter.delete('/:id', [isAdmin], deleteBook)

module.exports = booksRouter
