const express = require('express');
const models = require('../models');
const passport = require('../middlewares/auth');

const router = require('express').Router();
const UserInfo = models.UserInfo;


router.post('/login',
  passport.authenticate('local', { failureRedirect: '/auth/error' }),
  (req, res) => {


    if (req.isAuthenticated()) {

      console.log("YOOO")
      console.log(req.user.FirstName)

      //Send data to client --> profile page
      res.json({
        id: req.user.id,
        FirstName: req.user.FirstName,
        EmailAddress: req.user.EmailAddress,
        UniquePassword: req.user.UniquePassword
      });


    }


  });



router.get('/logout', (req, res) => {
  req.logout(); // password create a nice logout function
  res.sendStatus(200);
});


// router.get('/profile',
//   passport.redirectIfNotLoggedIn('/auth/error'),
//   (req, res) => {
//     res.json({ msg: "This is the profile page for: "+req.user.email });
// });


module.exports = router;
