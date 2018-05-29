const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

/* GET user profile. */
router.get('/profile', (req, res, next) => {
    res.send(req.user);
});

router.put('/changeuserdetails', function(req, res) {
  if (req.body.password===undefined) {delete req.body.password}
  let newUser = {...req.body}
  delete newUser.accountPage

  User.findOne({_id: newUser._id}, (error, user) => {
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
            user.location = {street: newUser.location.street, number: newUser.location.number, 
            postcode: newUser.location.postcode, city: newUser.location.city}
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

module.exports = router;