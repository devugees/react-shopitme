const mongoose = require('mongoose');
// User Schema
const HistorySchema = mongoose.Schema({

 items: {
     type:Array,
     required: true 
  },
    shop: {
      type:String,
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
    },
    notes:{
      type:String,
      required:false
    }
  })

HistorySchema.post('save', (err, doc, next) => {
  console.log(err)
  if (err.code === 11000) {
    next({"error": "the items already excest."});
  } else {
    next(err);
  }
});

const History = module.exports = mongoose.model('History', HistorySchema);