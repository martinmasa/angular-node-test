/*
 * Authentication Middleware
 * To check if users are authenticated & have required permissions
 */

'use strict';

var config = require('../../config/environment');
var jwt = require('jsonwebtoken');
var compose = require('composable-middleware');

var User = require('../user/user.model');

function isAuthenticated () {

  return compose()
    .use(function (req, res, next) {

      // Authorization header format "Bearer tokenstring"
      var token = req.headers.authorization ?
                  req.headers.authorization.split(' ')[1] :
                  null ;

      // decode token
      if (token) {

        //verify secret and check expiry
        jwt.verify(token, config.secret, function (err, decoded) {

          if(err) {
            res
              .status(500)
              .json({
                message: 'Server error: Failed to verify token'
              });

          } else {
            // if everything is good, save decoded token to request for use in other routes
            req.decoded = decoded;
            next();
          }
        });

      } else {
        // if there's no token return 401 Unauthorised
        res
          .status(401)
          .json({
            success: false,
            message: 'Unauthorised: No token provided'
          });
      }

    });

}

function hasRole (role) {

  return compose()
    .use(isAuthenticated())
    .use(function (req, res, next) {

       var roles = req.decoded.roles;

       if (roles.indexOf(role) > -1) {
        next();
       } else{
        res
          .status(403)
          .json({
            success: false,
            message: 'Forbidden'
          });
       }
    });

}

module.exports = {
  isAuthenticated: isAuthenticated,
  hasRole: hasRole
};