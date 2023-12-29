const { login, registration } = require('../controllers/auth');
const { viewUser, addUser,fetchUserById, fetchUserByName } = require('../controllers/user');
const { checkToken } = require('../middlewares/auth');

const router = require('express').Router();
router.use('/login', login);
router.use('/registration', registration);


module.exports = router;