const passport    = require('passport');
const passportJWT = require("passport-jwt");
const User = require('../models/user');
const ExtractJWT = passportJWT.ExtractJwt;
const bcrypt = require('bcryptjs');

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy   = passportJWT.Strategy;

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },(email, password, cb) => {
      // Match Username
      let query = { email: email };
      User.findOne(query, (err, user) => {
        if (err) throw err;
        if (!user) {
          return cb(null, false, { "error": "Wrong User Or Password" });
        }
        // Match Password
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
            return cb(null, user, { message: 'Logged In Successfully'});
            } else {
            return cb(null, false, { "error": "Wrong User Or Password" });
            }
        }); // End Brcypt
      })
      .catch(err => {
          return cb(err);
      });
    }
));
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'secret'
    },
    (jwtPayload, cb) => {
        //find the user in db if needed
        return User.findById(jwtPayload._id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));
