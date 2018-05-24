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
router.post('/forgot', function(req, res, next) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
          console.log('you are here')
          return res.send('No account with that email address exists.');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user) {
      mailnotifier.sendMail(user.email,`Password Reset`,`You are receiving this because you (or someone else) have requested the reset of the password for your account.
          'Please click on the following link: http://localhost:3000/reset/${token}
           this link is valid just for one hour or paste this into your browser to complete the process:`)
          return res.send('Please check your email, we have sent the reset form')
    }
  ], function(err) {
    if (err) return next(err);
    res.redirect('/forgot');
  });
});

// Reset Password
router.post('/reset/:token', function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          return res.send('Password reset token is invalid or has expired.');
        }

        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        bcrypt.genSalt(10, function(err, salt){
          bcrypt.hash(user.password, salt, function(err, hash){
            if(err){
              console.log('err1', err);
            }
            user.password = hash;
            user.save(function(err) {
              req.logIn(user, function(err) {
                done(err, user);
              });
            });
          });
        }); 

        
      });
    },
    function(user) {
      mailnotifier.sendMail(user.email,`Password Changed`,`This is a confirmation that the password for your account has just been changed`)
      return res.send('Your Password has been changed successfully you can login now')
    }
  ], function(err) {
    res.redirect('/');
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