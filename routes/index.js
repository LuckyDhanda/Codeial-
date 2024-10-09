const express = require('express');
const router  = express.Router();

const homeController = require('../controllers/home_controller')

// to access the controller
router.get('/', homeController.home);

// to access other routes
router.use('/users', require('./users_routes'));


console.log("Router loaded");

module.exports = router;