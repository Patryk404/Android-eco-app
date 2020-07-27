const router = require('express').Router();
const userController = require('../controllers/user');
const {isAuth} = require('../middleware/is-auth');

router.get('/',isAuth,userController.get_user);

module.exports = router;