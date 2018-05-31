const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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
    },
    ordername:{
      type:String
    },
    createdate:{
      type:String
    },
      orderer : {
         type: Schema.Types.ObjectId,
          ref: 'User'
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

const Data = module.exports = mongoose.model('History', HistorySchema);