const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
router.use(passport.initialize());
const User = require('../models/user');
const Data = require('../models/data');
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
  
  if(!user.email) {
    return res.send({"error": "Must provide an email adress"});
  } else if(!user.password) {
    return res.send({"error": "Must provide an password"});
  } else {
    const newUser = new User({
      firstname: user.firstname,
      lastname: user.lastname,
      location: {
        street: user.location.street,
        number: user.location.number,
        postcode: user.location.postcode,
        city: user.location.city},
      email: user.email,
      mobile: user.mobile,
      gender: user.gender,
      password: user.password
    });

    bcrypt.genSalt(10, function(error, salt){
      bcrypt.hash(newUser.password, salt, function(error, hash){
        if(error){
          console.log('error', error);
        }
        newUser.password = hash;
        newUser.save(function(error){
          if(error){
            console.log(error);
            if (error.message) {
              res.json({'error': error.message});
            } 

            if (error.err) {
              res.json({'error': error.err});
            }
            
          } else {
            res.json({'success': 'You are registered and can now login'});
          }
        });
      });
    });  
  }  
});

// Forget Password
router.post('/forgot', (req, res, next)=> {
  async.waterfall([
    done => {
      crypto.randomBytes(20, (err, buf) => {
        const token = buf.toString('hex');
        done(err, token);
      });
    },
    (token, done) => {
      User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
          return res.send('No account with that email address exists.');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save(err => {
          done(err, token, user);
        });
      });
    },
    (token, user) => {
      mailnotifier.sendMail(user.email,'Password Reset',`You are receiving this because you (or someone else) have requested the reset of the password for your account.
          'Please click on the following link: http://localhost:3000/reset/${token}
           this link is valid just for one hour or paste this into your browser to complete the process:`)
          return res.send('Please check your email, we have sent the reset form')
    }
  ], err => {
    if (err) return next(err);
    res.redirect('/forgot');
  });
});

// Reset Password
router.post('/reset/:token', (req, res) => {
  async.waterfall([
    done => {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, (err, user) => {
        if (!user) {
          return res.send('Password reset token is invalid or has expired.');
        }

        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        bcrypt.genSalt(10, (err, salt)=>{
          bcrypt.hash(user.password, salt, (err, hash)=>{
            if(err){
              console.log('err1', err);
            }
            user.password = hash;
            user.save(err => {
              req.logIn(user, err => {
                done(err, user);
              });
            });
          });
        }); 

        
      });
    },
    user => {
      mailnotifier.sendMail(user.email,'Password Changed','This is a confirmation that the password for your account has just been changed')
      return res.send('Your Password has been changed successfully you can login now')
    }
  ], err => {
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

router.get('/data',(req, res, next)=>{
  Data.find((err, history)=>{
    if(err) {
        res.status(500).send({message: "Some error occured while retrieving data."});
    } else {
        res.send(history);
    }
});
})

router.get('/users',(req, res, next)=>{
  User.find((err, users)=>{
    if(err) {
        res.status(500).send({message: "Some error occured while retrieving data."});
    } else {
        res.send(users);
    }
});
})


module.exports = router;
