const { isAdmin } = require('../../middlewares/auth')
const { uploadAuthor } = require('../../middlewares/file')

const {
  getAuthorByNationality,
  getAuthorByAward,
  getAuthorById,
  getAuthors,
  postAuthor,
  putAuthor,
  deleteAuthor
} = require('../controllers/authors')

const authorsRouter = require('express').Router()

authorsRouter.get('/nationality/:nationality', getAuthorByNationality)
authorsRouter.get('/award/:award', getAuthorByAward)
authorsRouter.get('/id/:id', getAuthorById)
authorsRouter.get('/', getAuthors)
authorsRouter.post('/', [isAdmin], uploadAuthor.single('image'), postAuthor)
authorsRouter.put('/:id', [isAdmin], uploadAuthor.single('image'), putAuthor)
authorsRouter.delete('/:', [isAdmin], deleteAuthor)

module.exports = authorsRouter
