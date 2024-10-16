const express = require('express');
const router = express.Router();

const passport = require('../config/passport-local-strategy');

const userController = require('../controllers/users_controller');
// const signupController = require('../controllers/sign_up_controller');

router.get('/profile', userController.users);
router.get('/sign-up', userController.signUp);
router.get('/sign-in', userController.signIn);
router.post('/create', userController.create);
// use passport as a middleware to authenticate
router.post('/createSession', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), userController.createSession);

module.exports = router;

