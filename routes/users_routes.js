const express = require('express');
const router = express.Router();

const userController = require('../controllers/users_controller');
// const signupController = require('../controllers/sign_up_controller');

router.get('/profile', userController.users);
router.get('/signup', userController.signUp);
router.get('/signin', userController.signIn);

module.exports = router;

