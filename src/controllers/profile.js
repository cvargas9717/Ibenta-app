const router = require('express').Router();

router.get('/profile', (req, res) => {
  //res.render( { randomPerson: req.user })
  res.send("COOL")
  // res.json({
  //   msg: req.user
  // });
});

module.exports = router;
