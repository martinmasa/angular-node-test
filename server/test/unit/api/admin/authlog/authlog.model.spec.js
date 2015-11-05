'use strict';

var utils = require('../../../../utils.js');
var expect = require('chai').expect;

var AuthLog = require('../../../../../api/admin/authlog/authlog.model');

describe('Model: AuthLog', function() {

  describe('#create()', function() {
    function createTestAuthLog(ip, action, username){
      var authlog = {};

      if (ip) { authlog.ip = ip };
      if (action) { authlog.action = action };
      if (username) { authlog.username = username };

      return authlog;
    }


    it('should not create AuthLog if ip is missing', function(done) {

      var al = createTestAuthLog(null, 'AUTH_SUCCESS', 'someuser');

      AuthLog.create(al, function (err, createdAuthLog) {
        expect(err).to.exist;
        expect(createdAuthLog).to.not.exist;
        done();
      });

    });

    it('should not create AuthLog if action is missing', function(done) {

      var log = createTestAuthLog('01.02.03.04', null, 'someuser');

      AuthLog.create(log, function (err, createdAuthLog) {
        expect(err).to.exist;
        expect(createdAuthLog).to.not.exist;
        done();
      });

    });

    it('should not create AuthLog if action is not acceptable value', function(done) {

      var log = createTestAuthLog('01.02.03.04', 'BLA BLA', 'someuser');

      AuthLog.create(log, function (err, createdAuthLog) {
        expect(err).to.exist;
        expect(createdAuthLog).to.not.exist;
        done();
      });

    });



    it('should not create AuthLog if username is missing', function(done) {

      var log = createTestAuthLog('01.02.03.04', 'AUTH_SUCCESS', null);

      AuthLog.create(log, function (err, createdAuthLog) {
        expect(err).to.exist;
        expect(createdAuthLog).to.not.exist;
        done();
      });

    });

    it('should create AuthLog with correct properties', function(done) {

      var log = createTestAuthLog('01.02.03.04', 'AUTH_SUCCESS', 'someuser');

      AuthLog.create(log, function (err, createdAuthLog) {
        expect(err).to.not.exist;
        expect(createdAuthLog).to.exist;
        expect(createdAuthLog.ip).to.equal('01.02.03.04');
        expect(createdAuthLog.action).to.equal('AUTH_SUCCESS');
        expect(createdAuthLog.username).to.equal('someuser');
        done(err);
      });

    });

  });

});