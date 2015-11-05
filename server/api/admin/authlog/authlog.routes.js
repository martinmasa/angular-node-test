/*
 * AuthLog Routes setup
 * Handle API endpoints to interact with authentication logs
 */

'use strict';

var express = require('express');

var AuthService = require('../../auth/auth.service');

var AuthLog = require('./authlog.model');

var router = express.Router();

/**
* Get all authentication attempts log
* Admin only
*/
function getAll (req, res) {

  AuthLog.find({}, function (err, authlogs) {
    if(err) {
      return res
        .status(500)
        .json({
          message: err
        });
    }

    res
      .status(200)
      .json(authlogs);
  });
}

// route to get all authentication logs (GET /api/admin/authlogs)
router.get('/', AuthService.hasRole('admin'), getAll);

module.exports = router;
