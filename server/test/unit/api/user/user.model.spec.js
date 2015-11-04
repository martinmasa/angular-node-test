
'use strict';

var utils = require('../../../utils.js');
var expect = require('chai').expect;

var User = require('../../../../api/user/user.model');

describe('Model: User', function () {

  describe('#create()', function () {

    function createTestUser (username, password, roles) {

      var user = {};
      if (username) { user.username = username };
      if (password) { user.password = password };
      if (roles) { user.roles = roles };

      return user;
    }

    it('should not create User if username is missing', function(done) {

      var user = createTestUser(null, 'password', ['user', 'tester']);

      User.create(user, function (err, createdUser) {
        expect(createdUser).to.not.exist;
        expect(err).to.exist;
        done();
      });

    });

    it('should not create User if password is missing', function(done) {

      var user = createTestUser('testuser', null, ['user', 'tester']);

      User.create(user, function (err, createdUser) {
        expect(createdUser).to.not.exist;
        expect(err).to.exist;
        done();
      });

    });

    it('should create new User with correct username', function(done) {

      var user = createTestUser('testuser', 'password', ['user', 'tester']);

      User.create(user, function (err, createdUser) {
        expect(err).to.not.exist;
        expect(createdUser.username).to.equal('testuser');
        done();
      });

    });

    it('should create new User with hashed passsword', function(done) {

      var user = createTestUser('testuser', 'password', ['user', 'tester']);

      User.create(user, function (err, createdUser) {
        expect(err).to.not.exist;
        expect(createdUser.password).to.not.exist;
        expect(createdUser.hashedPassword).to.be.a('string');
        expect(createdUser.hashedPassword).to.not.equal('password');
        done();
      });

    });

    it('should create new User with correct roles', function(done) {

      var user = createTestUser('testuser', 'password', ['user', 'manager']);

      User.create(user, function (err, createdUser) {
        expect(err).to.not.exist;
        expect(createdUser.roles)
          .that.is.an('array')
          .with.length(2)
          .to.contain('user')
          .to.contain('manager');
        done();
      });

    });

  });
});