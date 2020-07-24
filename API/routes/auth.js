const router = require('express').Router();
const authController = require('../controllers/auth');

router.post('/new-account',authController.newUser);

router.post('/login',authController.Login); 

module.exports = router;