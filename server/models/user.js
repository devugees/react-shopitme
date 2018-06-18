const mongoose = require('mongoose');
// User Schema
const UserSchema = mongoose.Schema({
  userId:{
    type:Number
  },
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
    latitude:{
      type:Number,
      required:false
    },
    longitude:{
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
    required: false
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
  profileImgPath : {
    type: String
  },
  deliveryHistory: {
    type: Array
  },
  orderHistory: {
    type: Array
  }
});

UserSchema.post('save', (err, doc, next) => {
  console.log(err)
  if (err.code === 11000) {
    next({"err": "Account with this Email already exists."});
  } else {
    next(err);
  }
});

const User = module.exports = mongoose.model('User', UserSchema);
