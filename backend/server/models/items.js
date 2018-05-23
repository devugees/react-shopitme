const mongoose = require('mongoose');
//var bcrypt = require('bcryptjs');

// User Schema
const ItemsSchema = mongoose.Schema({
 Items:{
     type:Array
 }
})
 ItemsSchema.post('save', function(err, doc, next) {
  console.log(err)
  if (err.code === 11000) {
    next({"error": "User name already taken."});
  } else {
    next(err);
  }
});

const Item = module.exports = mongoose.model('Item', ItemsSchema);