const mongoose = require('mongoose')
const Book = require('../../api/models/books')
const books = require('../../data/books')

const throwSeedBooks = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://marycala87:QsuARHU2lsyrHUVF@cluster0.sugkzks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )

    await Book.collection.drop()
    console.log('Books eliminated')

    await Book.insertMany(books)
    console.log('Books introduced')

    await mongoose.disconnect()
    console.log('Disconnect from database')
  } catch (error) {
    console.log('Error')
  }
}
throwSeedBooks()
