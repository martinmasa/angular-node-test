// Integration test file to test routes

process.env.NODE_ENV = 'test';

var request = require('supertest');
var expect = require('chai').expect;
var utils = require('../utils');

var User = require('../../api/user/user.model');

var app = require('../../app');

describe('Server routes', function () {

  describe('GET /', function() {
    it('should respond with 200 OK', function (done) {
      request(app)
        .get('/')
        .expect(200)
        .end(function (err, res) {
          expect(err).to.not.exist;
          if (err) {
            done(err);
          }
          done();
        });
    });
  });

  describe('GET /api', function() {
    it('should respond with 200 OK', function (done) {
      request(app)
        .get('/api')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect({message: 'Login: POST /api/authenticate'})
        .end(function (err, res) {
          expect(err).to.not.exist;
          if (err) {
            done(err);
          }
          done();
        });
    });
  });

  describe('POST /api/authenticate', function() {

    function createTestUser(username, password, roles){

      var user = {
        username: username,
        password: password,
        roles: roles
      }

      User.create(user);
    }

    it('should respond with 401 Unauthorised when no login details are sent', function (done) {
      request(app)
        .post('/api/authenticate')
        .expect(401)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect({message: 'Bad Credentials'})
        .end(function (err, res) {
          if (err) {
            done(err);
          }
          done();
        });
    });


    describe('GET /undefined-url', function() {
      it('should respond with 404 Not Found', function(done) {
        request(app)
          .get('/undefined-url')
          .expect(404)
          .end(function(err, res){
            if (err) {
              return done(err)
            }

            done();
          });
      });
    });


  });


});