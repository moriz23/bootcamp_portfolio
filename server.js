var express = require('express');
var bodyParser = require('body-parser');
var session = require("express-session")
var app = express();
var PORT = process.env.PORT || 1738;

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.listen(PORT, function() {
  console.log('App listening on port %s', PORT);
});