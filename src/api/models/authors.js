const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    birthdate: { type: Number, required: true },
    nationality: { type: String, required: true },
    awards: [{ type: String, required: false }],
    books: [{ type: mongoose.Types.ObjectId, ref: 'books', required: false }],
    image: { type: String, trim: true, required: false }
  },
  {
    timestamps: true,
    collection: 'authors'
  }
)

const Author = mongoose.model('authors', authorSchema, 'authors')

module.exports = Author
