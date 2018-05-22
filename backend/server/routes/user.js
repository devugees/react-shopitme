//routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET user profile. */
router.get('/profile', function(req, res, next) {
    res.send(req.user);
});

router.put('/changeuserdetails', function(req, res, next) {
  console.log(req.body);
  const _id = req.body._id;
  User.findOne({_id: _id}, (err, user) => {
    if (err) return console.log(err) // here need to handle the error
    else {
        const user = {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          street: req.body.street,
          number: req.body.number,
          postcode: req.body.postcode,
          city: req.body.city,
          email: req.body.email,
          mobile: req.body.mobile,
          gender: req.body.gender
        }
        if(!user.password){
            
        } else {
         

          bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(newUser.password, salt, function(err, hash){
              if(err){
                console.log('err1', err);
              }
              newUser.password = hash;
              newUser.save(function(err){
                if(err){
                  console.log('err', err);
                  res.send(err);
                } else {
                  res.json({'success': 'You are registered and can now login'});
                }
              });
            });
          });  
        }
    }
  })
            
  
 /*  res.send(req.user); */
});

module.exports = router;