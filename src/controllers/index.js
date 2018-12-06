const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/', require('./home'));
router.use('/profile', require('./profile'));


module.exports = router;
