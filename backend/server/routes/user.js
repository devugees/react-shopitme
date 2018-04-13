//routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

router.post('/register', (req, res)  => {
  console.log(req.body.password)
  const email = req.body.email;
  const password = req.body.password;
  
  if(!email) {
    return res.send({"error": "Must provide an email adress"});
  } else if(!password) {
    return res.send({"error": "Must provide an password"});
  } else {
    const newUser = new User({
      email: email,
      password: password
    });

    bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(newUser.password, salt, function(err, hash){
        if(err){
          console.log(err);
        }
        newUser.password = hash;
        newUser.save(function(err){
          if(err){
            res.send(err);
            return;
          } else {
            res.json({'success': 'You are registered and can now login'});
          }
        });
      });
    });
  }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET user profile. */
router.get('/profile', function(req, res, next) {
    res.send(req.user);
});

module.exports = router;