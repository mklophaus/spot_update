var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var updateSchema = new mongoose.Schema({
  text: String,
  created: {type: Date, default: Date.now}
});

var userSchema = new mongoose.Schema({
  name:   String,
  email: String,
  googleId: String,
  updates: [updateSchema],
  created: {type: Date, default: Date.now}
});

var User = mongoose.model('User', userSchema);

module.exports = User;
