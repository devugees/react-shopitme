const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
router.use(passport.initialize());
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const waterfall = require('async-waterfall');
const async = require('async');
const crypto = require('crypto');
const mailnotifier = require('./mailnotifier');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
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
        street: user.street,
        number: user.number,
        postcode: user.postcode,
        city: user.city,
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

// Forget Password
router.post('/forget', (req, res)  => {
  let token;
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, (err, buf) => {
         token = buf.toString('hex');
        done(err, token);
      });
    },
    function(done) {
      User.findOne({ email: req.body.email }, (err, user) =>{
        console.log(user,'here first')
        if (!user) {
          req.send('there is no user registered with this email');
        }
        user.resetPasswordToken = token;
        user.save(function(err, user) {
          console.log(err, 'error here');
          mailnotifier.sendMail(user.email,`Password Reset`,`You are receiving this because you (or someone else) have requested the reset of the password for your account.
          'Please click on the following link: http://localhost:3000/reset/${token}
           or paste this into your browser to complete the process:`)
          res.send('it is working')
        });
      });
    },
  ], function(err) {
    if (err) throw (err);
    res.redirect('/forgot');
  });
});

// Reset Password
router.post('/resets/:token', (req, res)  => {
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {
      req.flash('error', 'Password reset token is invalid or has expired.');
      return res.redirect('/forgot');
    }
    res.render('reset', {
      user: req.user
    });
  });
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

module.exports = router;