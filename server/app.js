/*
 * Main app file
 * Creates, configures application & starts up server
 */

'use strict';

var express  = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');

// database configuration
mongoose.connect(config.mongo.uri);

// express app configuration
var app = express();
require('./config/express')(app);
require('./routes')(app);

// setup server
var server = require('http').createServer(app);

server.listen(config.port, function () {
  var port = server.address().port;
  console.log('Server running at http://localhost:%s', port);
});

module.exports = app;