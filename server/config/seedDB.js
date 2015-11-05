/**
* Populate DB with sample users
*/

'use strict';

var User = require('../api/user/user.model');

User.find({}).remove(function() {
  User.create({
    username: 'user',
    password: 'password',
    roles: ['user']
  }, {
    username: 'manager',
    password: 'password',
    roles: ['manager', 'admin']
  }, {
    username: 'admin',
    password: 'password',
    roles: ['admin']
  }, {
    username: 'developer',
    password: 'password',
    roles: ['developer']
  }, {
    username: 'tester',
    password: 'password',
    roles: ['tester']
  });
});