const { viewUser, addUser,fetchUserById, fetchUserByName } = require('../controllers/user');
const { checkToken } = require('../middlewares/auth');

const router = require('express').Router();
router.post('/add', addUser);
router.get('/view/:id',  fetchUserById);;
router.get('/view/name/:name',  fetchUserByName);;
router.get('/view',checkToken, viewUser);

module.exports = router;