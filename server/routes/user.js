const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Data = require('../models/data');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const passport = require('passport');


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json({'message':'respond with a resource'});
});

/* GET All the shopping list */
router.get('/maindeliverylist', (req, res, next) => {
  Data.find().populate('orderer').exec((err, data)=> {
  
    if(err) {
        res.status(500).send({message: "Could not retrieve user with id "});
    } else {
      delete data.shop
      delete data.__v
        res.send(data);
    }
});
  
});
router.get('/maindeliverylist/:userId', (req, res, next) => {
  Data.findById(req.params.userId).populate('orderer').exec((err, data)=> {
    if(err) {
        res.status(500).send({message: "Could not retrieve user with id "});
    } else {
      delete data.shop
      delete data.__v
        res.send(data);
    }
});
  
});



router.post('/createshoppinglist', passport.authenticate('jwt', { session: false}),
 (req, res, next) => {
  //console.log('req from createshoppinglist',req.user)

  const order = {...req.body};

  const newOrder = new Data({
    items: order.items,
    shop: order.shop,
    deliveringTime: {
      start: order.deliveringTime.start,
      end: order.deliveringTime.end,
    },
    notes:order.notes,
    ordername:order.orderName,
    createdate:order.createdate,
    orderer : req.user._id
        
  })
  newOrder.save((error) =>{
    if(error){
      if (error.message) { // some info is required but not sent
        res.json({'error': error.message});
      } 

      if (error.err) { // some info already exist in DB and needs to be unique
        res.json({'error': error.err});
      }
      
    } 
    else {
      res.json({'success': 'The order is done'});
    }
  });
});



router.put('/changeuserdetails', (req, res) => {
  console.log('changin user')
  if (req.body.password===undefined) {delete req.body.password}
  let newUser = {...req.body}
  delete newUser.accountPage

 User.findOne({_id: newUser._id}, (error, user) => { 
    console.log(user, error);
    if (error) throw error; // here need to handle the error
    else {
      // after finding a user replace all the user data with data from request
      bcrypt.genSalt(10, function(err, salt){ 
          bcrypt.hash(newUser.password, salt, (error, hash) => {
            if(err){ res.json({error: error})}
            user.password = hash;
            user.firstname = newUser.firstname;
            user.lastname = newUser.lastname; 
            user.gender = newUser.gender;
            user.email = newUser.email;
            user.mobile = newUser.mobile;
            user.location = {
              street: newUser.location.street,
              number: newUser.location.number, 
              postcode: newUser.location.postcode,
              city: newUser.location.city
            };
            user.save((error) => {
              if(error) {res.send(error)}
              else {
                res.send({message: "User has been successfully updated.",
                user: newUser
              })
            }
            })
          })
      }) 
    }
  })
});

router.post('/profile', upload.single('avatar'), (req, res, next) => {
  res.json({src: req.file.path})
})

module.exports = router;