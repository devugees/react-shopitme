const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

const User = require('../models/user');
const bcrypt = require('bcryptjs');

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
        bcrypt.hash(newUser.password, salt, function(err, hash){
          if(err){
            console.log('error', error);
          }
          newUser.password = hash;
          newUser.save(function(error){
            if(err){
              console.log('error', error);
              res.send(error);
            } else {
              res.json({'success': 'You are registered and can now login'});
            }
          });
        });
      });  
    }  
  });


/* POST login. */
router.post('/login', (req, res, next) => {
    console.log('hello')

    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err) { return next(err); }
        if (info["error"]) { return res.send(info)}
        if (user === false) {return res.send(info)}
        // if (user) { return res.send(user)}

       req.login(user, {session: false}, (err) => {
           if (err) {
               res.send(err);
           }
           // generate a signed son web token with the contents of user object and return it in the response
           const token = jwt.sign(user.toJSON(), 'secret');
            console.log(token, user);

           return res.json({user, token});
        });
    })(req, res); 
}); 

router.get('/login', function (req, res, next) {
    console.log(req);
});

module.exports = router;