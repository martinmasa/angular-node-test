/*
 * Main configuration file
 * Loads correct environment configuration file depending on the process.env.NODE_ENV environment
 */

'use strict';

// TODO: add default properties

module.exports = require('./' + process.env.NODE_ENV + '.js') || {};