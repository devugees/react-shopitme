const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Data = require('../models/data');
//const Accept = require('../models/accept');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const passport = require('passport');
const fs = require('fs'); // to delete the previous user's pic
const path = require('path');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json({'message': 'respond with a resource'});
});

/* GET All the shopping list */
router.get('/maindeliverylist', (req, res, next) => {
  Data
    .find()
    .populate('orderer')
    .exec((err, data) => {

      if (err) {
        res
          .status(500)
          .send({message: "Could not retrieve user with id "});
      } else {

        res.send(data);
      }
    });

});
router.get('/maindeliverylist/:userId', (req, res, next) => {
  Data
    .findById(req.params.userId)
    .populate('orderer')
    .exec((err, data) => {
      if (err) {
        res
          .status(500)
          .send({message: "Could not retrieve user with id "});
      } else {
        delete data.shop
        delete data.__v
        res.send(data);
      }
    });

});

router.get('/generateorderid', (req ,res ,next) => {
  Data
    .find()
    .exec((err, data) => {
      if (err) {
        res
          .status(500)
          .send({message: "Could not create id "});
      } else {
        return res.send({orderID: data.length+1})
      }
    });
})

router.post('/createshoppinglist', passport.authenticate('jwt', { session: false}),
 (req, res, next) => {

  const order = { ...req.body };

  const newOrder = new Data({
    items: order.items,
    shop: order.shop,
    deliveringTime: {
      start: order.deliveringTime.start,
      end: order.deliveringTime.end
    },
    deliverAdress:{
      street: order.deliverAdress.street,
      number: order.deliverAdress.number,
      postcode: order.deliverAdress.postcode,
      city: order.deliverAdress.city
    },
    notes: order.notes,
    ordername: order.ordername,
    orderID: order.orderID,
    createdate: order.createdate,
    orderer: req.user._id,
    status: "Pending"
  })

  newOrder.save((error, order) => {
    if (error) {
      if (error.message) { // some info is required but not sent
        res.json({'error': error.message});
      }

      if (error.err) { // some info already exist in DB and needs to be unique
        res.json({'error': error.err});
      }

    }
    if (order) {
      User.update({
        _id: order.orderer
      }, {
        $push: {
          orderHistory: {
            orderId: order._id
          }
        }}, (error, done) => {
          if (done) {
            res.json({'message': `${order.ordername} has been created`});
          } else if (error) {
            res.send({"error": "error saving order"})
          }
        })
    }
  });
}); // end Create Shopping List

router.put('/updateshoppinglist/:id', passport.authenticate('jwt', { session: false}), (req, res, next) => {
  const id = req.params.id;
  const order = {...req.body}
  const newOrder = {
    items: order.items,
    shop: order.shop,
    deliveringTime: {
      start: order.deliveringTime.start,
      end: order.deliveringTime.end
    },
    notes: order.notes,
    ordername: order.orderName,
    createdate: order.createdate,
    orderer: req.user._id,
    status: "Pending"
  }

  Data.findByIdAndUpdate(id, newOrder, {
    new: true
  }, (error, order) => { // if user is updated send back a success message
    if (error) {
     res.json({error: "Error saving Order Data."})
    } else {
    res.send({message: "Order successfully updated.", body: order})
    }
  }) 
}); // End Update Shopping List

router.delete('/deleteshoppinglist/:id', (req, res, next) => {
  const id = req.params.id;
  Data.findByIdAndRemove(id, (err, data) => {
    if(err) {
      res.json({error: "Error deleting order."})
    } else {
      res.send({message: "Order successfully deleted."})
    }
  })
})

router.put('/AcceptShoppingList', passport.authenticate('jwt', { session: false}),
 (req, res, next) => {
  Data.findByIdAndUpdate(req.body.orderID,{status: 'In Progress', shopper: req.user._id, accepted:req.body.accepted}, (err, order) => {
      if(err){
        if (err.message) { // some info is required but not sent
          res.json({'err': err.message});
        } 
        if (err.err) { // some info already exist in DB and needs to be unique
          res.json({'err': err.err});
        }
      } 
      if(order) {
        res.json({'message': `${order.ordername} has been accepted`});
      }
  });
});



router.put('/DeliveredShoppingList', passport.authenticate('jwt', { session: false}),
 (req, res, next) => {
  Data.findByIdAndUpdate(req.body.orderID,{status: 'Delivered', shopper: req.user._id, delivered: req.body.delivered}, (err, order) => {
      if(err){
        if (err.message) { // some info is required but not sent
          res.json({'err': err.message});
        } 
        if (err.err) { // some info already exist in DB and needs to be unique
          res.json({'err': err.err});
        }
      } 
      if(order) {
        res.json({'message': `${order.ordername} has been delivered`});
      }
  });
});


router.put('/changeuserdetails', (req, res) => {
  let newUser = {
    ...req.body
  }
  delete newUser.accountPage

  // Hashing Helper Function returns a Promise
  function hash(password) {
    return new Promise((resolve, reject) => {
      bcrypt
        .genSalt(10, function (error, salt) {
          if (error) {
            reject(error);
            return
          }

          bcrypt.hash(password, salt, (error, hash) => {
            if (error) {
              reject(error);
              return
            }
            resolve(hash)
          })
        })
    })
  }

  // if there is a password hash it and update User
  if (newUser.password) {
    hash(newUser.password).then((response) => {
      newUser.password = response;
      User.findByIdAndUpdate(newUser._id, newUser, {
        new: true
      }, (error, user) => { // if user is updated send back a success message
        if (error) {
          res.json({error: "Error saving User Data."})
        } else {
          res.json({message: "User successfully updated."})
        }
      })
    }).catch((err) => {
      res.send({error: "error generating the hash"})
    })
  } else {
    User.findByIdAndUpdate(newUser._id, newUser, {
      new: true
    }, (error, user) => { // if user is updated send back a success message
      if (error) {
        res.json({error: "Error saving User Data."})
      } else {
        res.send({message: "User successfully updated.", body: user})
      }
    })
  }
})

router.post('/profile/:id', upload.single('avatar'), (req, res, next) => {
  const id = req.params.id;

  const updateUserPic = () => User.findByIdAndUpdate(id, {
    profileImgPath: req.file.path
      }, {
        new: true
      }, (error, user) => {
        if (user) {
        res.json({src: user.profileImgPath})
        }
        if (error) {
          throw error
          res.json({error: error})
          }
    })

  User.findById(id, (err,user) => {
// Delete the previous profile pic 
    if(user.profileImgPath){
      const picPath = path.join(__dirname, '../..', user.profileImgPath);
      fs.unlink(picPath, (err) =>{
         updateUserPic(); 
      })
    }
    else if (!user.profileImgPath) {
      updateUserPic();
    }
  })
})
router.get('/profile/:userId', (req, res) => {
  if (!req.params) {
    return res.send('Field can not be empty');
  }
  User.findById(req.params.userId, (err, data) => {
    if (err) {
      res.send({ error: 'some error occurred while retrieving the user' });
    } else {
      data.location = null;
      data.coords = null;
      data.orderHistory ? data.orderHistory = data.orderHistory.length : data.orderHistory = null
      data.deliverHistory ? data.deliverHistory = data.deliverHistory.length : data.deliverHistory = null
      data.email = null;
      data.mobile = null;
      data.password = null;
      data._id = null
      data.__v = null
      res.send(data);
    }
  });
});


module.exports = router;

