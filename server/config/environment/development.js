/*
 * Development configuration file
 */

'use strict';

var path = require('path');

module.exports = {

  root: path.normalize(__dirname + '/../../..'),

  port: process.env.PORT || 8080,

  mongo: {
    uri: 'mongodb://localhost/sky-ng-node'
  },

  secret: 'somesupersecretivestring'

};