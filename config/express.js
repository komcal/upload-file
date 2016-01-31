var express = require('express');
var app = express();
var multer = require('multer'),
	  bodyParser = require('body-parser'),
	  path = require('path');
module.exports = function(){
  app.use(bodyParser.json());
  app.set('views','./app/views/');
  app.set('view engine', 'jade');
  require('../app/routes/upload.routes')(app);
  app.use(express.static('./public'));

  return app;
}
