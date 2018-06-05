const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Data = require('../models/data');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json({ 'message': 'respond with a resource' });
});

/* GET All the shopping list */
router.get('/maindeliverylist', (req, res, next) => {
  Data.find().populate('orderer').exec((err, data) => {

    if (err) {
      res.status(500).send({ message: "Could not retrieve user with id " });
    } else {
      delete data.shop
      delete data.__v
      res.send(data);
    }
  });

});
router.get('/maindeliverylist/:userId', (req, res, next) => {
  Data.findById(req.params.userId).populate('orderer').exec((err, data) => {
    if (err) {
      res.status(500).send({ message: "Could not retrieve user with id " });
    } else {
      delete data.shop
      delete data.__v
      res.send(data);
    }
  });

});

router.put('/changeuserdetails', (req, res) => {
  let newUser = { ...req.body }
  delete newUser.accountPage

  // Hashing Helper Function returns a Promise
 function hash (password) {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, function (error, salt) {
        if(error) {
          reject(error); 
          return
        }

        bcrypt.hash(password, salt, (error, hash) => {
          if(error) {
            reject(error);
            return
          }
          resolve(hash)
        })
      })
    })
  }

  // if there is a password hash it and update User
  if (newUser.password){
    hash(newUser.password)
      .then((response) => { 
        newUser.password = response;
        User.findByIdAndUpdate(newUser._id, newUser, {new: true},  (error, user) => {// if user is updated send back a success message
            if(error) {
              res.json({error: "Error saving User Data."})
            } else {
              res.json({message: "User successfully updated."})
            }
          }  
        )
      })
      .catch((err) => {
        res.send({error: "error generating the hash"})
      })
  } else {
      User.findByIdAndUpdate(newUser._id, newUser, {new: true},  (error, user) => {// if user is updated send back a success message
        if(error) {
          res.json({error: "Error saving User Data."})
        } else {
          res.json({message: "User successfully updated."})
        }
      }  
    )
  }
})


router.post('/profile/:id', upload.single('avatar'), (req, res, next) => {
    const id = req.params.id;
    User.findByIdAndUpdate(id, { profileImgPath: req.file.path }, {new: true}, (error, user) => {
      if (user) {
        res.json({ src: user.profileImgPath })
      } if (error) {
        throw error
        res.json({ error: error })
      }
    })
  })

module.exports = router;