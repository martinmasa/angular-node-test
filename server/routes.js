/*
 * Main routes file
 * Configures application routes
 */

'use strict';

module.exports = function (app) {

  app
    .route('/')
    .get(function (req, res) {
      res.status(200).send('OK');
    });

};