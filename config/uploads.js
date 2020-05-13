const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join('public', 'posts'))
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
})

console.log(path.join('public', 'posts'));

const upload = multer({ storage: storage })

module.exports = upload;