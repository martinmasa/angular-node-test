// Integration test file to test routes

process.env.NODE_ENV = 'test';

var request = require('supertest');
var expect = require('chai').expect;

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


});