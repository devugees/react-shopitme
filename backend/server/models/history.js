const mongoose = require('mongoose');
//var bcrypt = require('bcryptjs');

// User Schema
const HistorySchema = mongoose.Schema({

 items: {
     type:Array,
     required: true 
  },
 shop: {
   type:Array,
   required: true 
 },
 deliveringTime: {
   start: {
     type:String,
     required:false
   },
   end: {
     type:String,
     required:false
   },
   date: {
     type:String,
     required:false
   }
 }
})
HistorySchema.post('save', function(err, doc, next) {
  console.log(err)
  if (err.code === 11000) {
    next({"error": "the items already excest."});
  } else {
    next(err);
  }
});

const History = module.exports = mongoose.model('History', HistorySchema);