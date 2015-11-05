/**
 * Express configuration file
 * Configure express dependencies
 */

'use strict';

var express     = require('express');
var path        = require('path');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');

module.exports = function(app){
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(morgan('dev'));
};