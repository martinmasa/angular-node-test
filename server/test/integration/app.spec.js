// Integration test file to test routes

process.env.NODE_ENV = 'test';

var request = require('supertest');

var app = require('../../app');

describe('Server routes', function () {

  describe('GET /', function() {
    it('should respond with 200 OK', function (done) {
      request(app)
        .get('/')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            done(err);
          }
          done();
        });
    });
  });


});