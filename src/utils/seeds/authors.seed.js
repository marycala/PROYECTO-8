const mongoose = require('mongoose')
const Author = require('../../api/models/authors')
const authors = require('../../data/authors')

const throwSeedAuthors = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://marycala87:QsuARHU2lsyrHUVF@cluster0.sugkzks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )

    await Author.collection.drop()
    console.log('Authors eliminated')

    await Author.insertMany(authors)
    console.log('Authors introduced')

    await mongoose.disconnect()
    console.log('Disconnect from database')
  } catch (error) {
    console.log(error)
  }
}
throwSeedAuthors()
