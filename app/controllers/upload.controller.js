exports.render = function (req, res){
  res.render('upload');
}
exports.up = function(req, res){
  var lwip = require('lwip');
  var fs = require('fs');
  res.render('uploaded');
  var pathPic = 'uploads/'+req.file.filename;
  res.status(204).end();
  require('lwip').open(pathPic, function(err, image){
    if(err){
      console.log(err);
    }else{
      image.resize(500,500,'lanczos',function(err, image){
        image.writeFile('uploads/n'+req.file.filename,function(err){
          fs.unlinkSync(pathPic);
        });
      });
    }
  });

}
