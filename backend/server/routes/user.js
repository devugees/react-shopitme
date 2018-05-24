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

router.put('/changeuserdetails', function(req, res) {
  let newUser = {...req.body}
  delete newUser.accountPage
  console.log(newUser)

  User.findOne({_id: newUser._id}, (error, oldUser) => {
    if (error) res.send(error); // here need to handle the error
    else {
       /*  if (req.body.password) {
          bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(newUser.password, salt, function(err, hash){
              if(err){
                console.log('err1', err);
              }
              return newUser.password = hash;
        }})} */
        if(newUser.password) { // if new password was sent, hash it and store in database
          bcrypt.genSalt(10, function(err, salt){ 
            bcrypt.hash(newUser.password, salt, (error, hash) => {
              if(err){ res.json({error: error})}
              newUser.password = hash;
              User.findByIdAndUpdate(newUser._id, {$set: {password: newUser.password}}, (err, query) => {
                if(err) res.send(err)
                res.send(query)
              })
            })
          })
        }

        Object.keys(newUser).forEach(key => {
            //console.log(key, newUser[key], oldUser[key]);
            if(newUser[key].toString() !== oldUser[key].toString()) {
              User.update({_id: oldUser._id}, {$set: {[key]: newUser[key]}}, (err, query) => {
                if(err) res.send(err)
              })      
            }
          }) 
        res.json({"message" : "data updated sucessfully"}) 

    }
  })
});

module.exports = router;