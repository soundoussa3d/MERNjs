const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


const app = express();

passport.use(new LocalStrategy(
  (username, password, done) => {
    // Here, you would typically check the database
    User.findOne({ username: username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

app.listen(3000, () => console.log('App listening on port 3000'));
