const router = require('express').Router();
const auth = require('./auth')
const users = require('./users');
// router = /user
router.use('/user', users);
router.use('/auth', auth);

module.exports = router;