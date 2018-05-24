const mongoose = require('mongoose');
//var bcrypt = require('bcryptjs');

// User Schema
const UserSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
location:{
      street: {
        type: String,
        required: true
      },
      number: {
        type: Number,
        required: true
      },
      postcode: {
        type: Number,
        required: true
      },
      city: {
        type: String,
        required: true
      } 
    },
  coords: {
      lat:{
        type:Number,
        required:false
      },
      lng:{
        type:Number,
        required:false
      }
    },
  email: {
    type: String,
    required: true, 
    unique: true
  },
  mobile: {
    type: Number, 
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  ratingstarts: {
    type:Number,
    required:false
  },
  resetPasswordToken: {
    type: String
  },
  resetPasswordExpires: {
    type: Date
  },
  location: {
    type: Object,
    required: true
  }
});

UserSchema.post('save', function(err, doc, next) {
  console.log(err)
  if (err.code === 11000) {
    next({"err": "Account with this Email already exists."});
  } else {
    next(err);
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

