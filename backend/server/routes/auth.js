const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
router.use(passport.initialize());
const User = require('../models/user');
const History = require('../models/history');
const bcrypt = require('bcryptjs');

/* POST register user */
router.post('/register', (req, res)  => {
    const user = {...req.body};
    console.log(user);
    
    if(!user.email) {
      return res.send({"error": "Must provide an email adress"});
    } else if(!user.password) {
      return res.send({"error": "Must provide an password"});
    } else {
      const newUser = new User({
        firstname: user.firstname,
        lastname: user.lastname,
        location:{ ...user.location},
        email: user.email,
        mobile: user.mobile,
        gender: user.gender,
        password: user.password
      });

      console.log(newUser);
  
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
  });

// Post to Login Page 


router.post('/login', (req, res, next) => {
  if (req.body.password && req.body.email) {
    passport.authenticate('local', (err, user, info) => {
      if (err) { return next(err); }
      if (info["error"]) { return res.send(info)}
      req.logIn(user, (err) => {
        if (err) { return next(err); }
        const token = jwt.sign(user.toJSON(), 'secret');
        return res.json({user, token});
      });
    })(req, res, next);
  } else {
      return res.send({"error": "Email and Password must be provided"});
  }
});

router.get('/data',function(req, res, next){
  History.find(function(err, history){
    if(err) {
        res.status(500).send({message: "Some error ocuured while retrieving data."});
    } else {
        res.send(history);
    }
});
})
router.get('/users',function(req, res, next){
  User.find(function(err, users){
    if(err) {
        res.status(500).send({message: "Some error ocuured while retrieving data."});
    } else {
        res.send(users);
    }
});
})

module.exports = router;
