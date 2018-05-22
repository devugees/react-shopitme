const mongoose = require('mongoose');
//var bcrypt = require('bcryptjs');

// User Schema
const UserSchema = mongoose.Schema({
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

UserSchema.post('save', function(err, doc, next) {
  console.log(err)
  if (err.code === 11000) {
    next({"error": "User name already taken."});
  } else {
    next(err);
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

