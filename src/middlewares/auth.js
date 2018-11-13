const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UserInfo = require('../models').UserInfo;


//when a user tries to login
function passwordsMatch(passwordSubmitted, storedPassword) {
  return bcrypt.compareSync(passwordSubmitted, storedPassword);
}

passport.use(new LocalStrategy({
    EmailField: 'logEmail',
  },
  (email, password, done) => {
    UserInfo.findOne({
      where: { logEmail },
    }).then((user) => {
      if(!user) {
        console.log("Incorrect Email");
        return done(null, false, { message: 'Incorrect email.' });
      }

      if (passwordsMatch(password, user.password) === false) {
        console.log("Incorrect password");
        return done(null, false, { message: 'Incorrect password.' });
      }
      console.log("Successfully loggedIn!");
      return done(null, user, { message: 'Successfully Logged In!' });
    });
  })
);


//serialize the user and stores in cookie. Store users id number and cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  UserInfo.findById(id).then((user) => {
    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  });
});

passport.redirectIfLoggedIn = (route) =>
  (req, res, next) => (req.user ? res.redirect(route) : next());

passport.redirectIfNotLoggedIn = (route) =>
  (req, res, next) => (req.user ? next() : res.redirect(route));

module.exports = passport;
