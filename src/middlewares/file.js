const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const createStorage = (folderName) => {
  return new CloudinaryStorage({
    cloudinary,
    params: async (req, res, next) => {
      return {
        folder: folderName,
        allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
      }
    }
  })
}

const uploadFolder = (folderName) => {
  const storage = createStorage(folderName)
  return multer({ storage })
}
const uploadAuthor = uploadFolder('Author')
const uploadBook = uploadFolder('Book')

module.exports = { uploadBook, uploadAuthor }
