/*
* Authentication Log model
* This model will store details about (successful and unsuccefull) login attempts
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthLogSchema = new Schema({
  ip: {
    type: String,
    required: true
  },
  datetime: {
    type: Date,
    default: Date.now
  },
  action: {
    type: String,
    required: true,
    enum: ['AUTH_SUCCESS', 'AUTH_FAILURE']
  },
  username: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('AuthLog', AuthLogSchema);