/*
* User model
*/

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  roles: {
    type: Array,
    default: ['user']
  },
  salt: String
});


// VIRTUALS
UserSchema
  .virtual('password')
  .set(function (password) {
    //hash password
    this.salt = this.makeSalt();
    this.hashedPassword = this.hashPassword(password);
  });


 // HOOKS
 UserSchema
  .pre('save', function (next) {
    if(!this.isNew) return next();

    if(!(this.hashedPassword && this.hashedPassword.length)) {
      next(new Error('Invalid password'));
    }
    else {
      next();
    }
  });


// METHODS
UserSchema.methods = {

  makeSalt: function () {
    return crypto.randomBytes(16).toString('base64');
  },

  hashPassword: function (password) {
    if (!password || !this.salt) return '';
    var salt = new Buffer(this.salt, 'base64');
    return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
  }

};

module.exports = mongoose.model('User', UserSchema);