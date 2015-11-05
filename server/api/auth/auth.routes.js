/*
 * Authentication route handler
 *
 */

'use strict';

var express = require('express');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');

var AuthLog = require('../admin/authlog/authlog.model');
var User = require('../user/user.model');

var router = express.Router();

function authenticate (req, res, next) {

  User.findOne({
    username: new RegExp(['^', req.body.username, '$'].join(''), 'i')
  }, function (err, user) {

    if(err) {
      throw err;
    }

    if (!user) {

      recordAuthenticationAttempt(req, 'AUTH_FAILURE');
      res
        .status(401)
        .json({
          message: 'Bad Credentials'
        });

    } else if (user) {

      // check if password matches
      if(!user.authenticate(req.body.password)) {

        recordAuthenticationAttempt(req, 'AUTH_FAILURE');

        res
          .status(401)
          .json({
            message: 'Bad Credentials'
          });

      } else {

        recordAuthenticationAttempt(req, 'AUTH_SUCCESS');

        // if user is found and password is right, create token
        var token = jwt.sign({_id: user._id, roles: user.roles}, config.secret, {
          expiresIn: 60*60
        });

        // return information as JSON including token
        res
          .json({
            message: 'Authentication successful',
            token: token,
            user: {
              username: user.username,
              roles: user.roles
            }
          });
      }
    }

  });
}

function recordAuthenticationAttempt(req, action){
  AuthLog.create({
    ip: req.ip,
    action: action,
    username: req.body.username
  });
}

// route to autheneticate a user (POST /api/authenticate)
router.post('/', authenticate);

module.exports = router;