var express = require('express');
var router = express.Router();
const multer = require('multer')

const upload = multer({dest: './public/data/upload'})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

//name type size
router.post('/api/fileanalyse', upload.single('upfile'), (req, res)=>{
  console.log(req.file)
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
})
module.exports = router;
