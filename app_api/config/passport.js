var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var Account = mongoose.model('Account');

passport.use(new LocalStrategy({
    usernameField: 'userid',
    passwordField: 'pin'
  },
  function(username, password, done) {
    console.log("HELLO?!")
    Account.findOne({ userid: username }, function (err, account) {
      if (err) { return done(err); }
      if (!account) {
        return done(null, false, {
          message: 'Invalid User ID.'
        });
      }
      if (!account.validPin(password)) {
        return done(null, false, {
          message: 'Invalid User ID or PIN.'
        });
      }
      return done(null, account);
    });
  }
));