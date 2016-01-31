module.exports = function(app){
  var multer = require('multer');
  var upload = require('../controllers/upload.controller');
  app.get('/upload',upload.render);
  var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg')
  }
});
  app.post('/uploaded',multer({
      storage: storage,
      limits: {
       fileSize: 1000*150,
       files: 1,
       fields: 1
          }
  })
  .single('upl'),upload.up);
}
