var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/user.js');

module.exports = function(passport){

  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },

  function(accessToken, refreshToken, profile, done) {
    User.findOne({ 'googleId': profile.id }, function(err, user) {
      if (err) return done(err);
      //(null) refers to no error...
      if (user) { return done(null, user);
     } else {
   // we have a new student via OAuth!
         var newUser = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
         });

         newUser.save(function(err) {

          if (err) return done(err);
          return done(null, newUser);
        });
      }
    });
  }
));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

};
