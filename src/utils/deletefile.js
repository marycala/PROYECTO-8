const cloudinary = require('cloudinary').v2

const deleteFile = (url) => {
  const imgSplited = url.split('/')

  const folderSplited = imgSplited.at(-2)
  const nameSplited = imgSplited.at(-1).split('.')[0]
  const public_id = `${folderSplited}/${nameSplited}`

  cloudinary.uploader.destroy(public_id, () => {
    console.log('Image delete in cloudinary')
  })
}

module.exports = { deleteFile }
