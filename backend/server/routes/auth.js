const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

const User = require('../models/user');
const bcrypt = require('bcryptjs');

/* POST register user */
router.post('/register', (req, res)  => {
    console.log('This is the req to register', req.body)
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

      console.log(newUser);
  
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