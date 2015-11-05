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

  app
    .route('/api')
    .get(function (req, res) {
      res
      .status(200)
      .json({
        message: 'Login: POST /api/authenticate'
      });
    });

  app.use('/api/authenticate', require('./api/auth/auth.routes'));

};