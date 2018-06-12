const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// User Schema
const OrdersSchema = mongoose.Schema({
  items: {
     type:Array,
     required: true 
  },
  shop: {
    type:String,
    required: false 
  },
  deliveringTime: {
    start: {
      type:String,
      required:false
    },
    end: {
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

OrdersSchema.post('save', (err, doc, next) => {
  if (err.code === 11000) {
    next({"error": "the items already excest."});
  } else {
    next(err);
  }
});

const Data = module.exports = mongoose.model('Orders', OrdersSchema);
