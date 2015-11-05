/*
 * Test configuration file
 */

'use strict';

var path = require('path');

module.exports = {

  root: path.normalize(__dirname + '/../../..'),

  mongo: {
    uri: 'mongodb://localhost/sky-ng-node-test'
  }

};