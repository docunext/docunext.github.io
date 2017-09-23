var express = require('express');
var path = require('path');
var app = express();

app.use('/', express.static(path.join(__dirname, 'build', 'public')))
app.use('/', express.static(path.join(__dirname, 'source', 'views')))
app.use('/assets/css/', express.static(path.join(__dirname, 'source', 'assets', 'css')))
//app.use('/*', express.static(path.join(__dirname, 'source', 'views')))

var http = require('http');
var server = http.createServer(app);
server.listen(3000);
