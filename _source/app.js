var express = require('express');
var path = require('path');
var app = express();

app.use('/assets/js/', express.static(path.join(__dirname, 'build', 'assets', 'js')))
app.use('/', express.static(path.join(__dirname, 'source', 'views')))
app.use('/assets/css/', express.static(path.join(__dirname, 'source', 'assets', 'css')))

var http = require('http');
var server = http.createServer(app);
server.listen(3000);
