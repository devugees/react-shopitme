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

        //Assume there is a DB module pproviding a global UserModel
        return User.findOne({email})
            .then(user => {
                if (!user) {
                    return cb(null, false, {message: 'Incorrect email.'});
                }

                // Match Password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                    return cb(null, user, { message: 'Logged In Successfully'});
                    } else {
                    return cb(null, false, { "error": "Wrong password" });
                    }
                }); // End Brcypt
            })
            .catch(err => {
                return cb(err);
            });
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'secret'
    },
    (jwtPayload, cb) => {
        console.log('jwtpl ', jwtPayload);
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
