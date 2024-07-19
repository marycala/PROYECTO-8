const Author = require('../models/authors')
const Book = require('../models/books')

const fusionController = async (req, res, next) => {
  const { author, book } = req.body

  const existAuthor = await Author.findOne({ name: author })
  const existBook = await Book.findOne({ name: book })

  if (!existAuthor) return res.status(409).json('Author do not exists')
  if (!existBook) return res.status(409).json('Book do not exists')
  const duplicateBook = existAuthor.books.some(
    (val) => val.toString() === existBook._id.toString()
  )
  if (duplicateBook) return res.status(201).json('Book duplicated')
  const fusion = await Hero.findByIdAndUpdate(
    existAuthor._id,
    {
      books: [...existAuthor.books, existBook._id]
    },
    { new: true }
  )
  return res.status(201).json(fusion)
}

module.exports = { fusionController }
