/*
 * Main routes file
 * Configures application routes
 */

'use strict';

var path = require('path');

module.exports = function (app) {

  app
    .route('/')
    .get(function (req, res) {
      res.sendFile(path.resolve(app.get('rootPath') + '/client/app/index.html'));
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
  app.use('/api/admin/authlogs', require('./api/admin/authlog/authlog.routes'));

};