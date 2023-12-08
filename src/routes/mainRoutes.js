const express = require ('express');
const router = express.Router();
const mainControllers = require('../controllers/mainController')

// Routes
router.get('/home', mainControllers.home);
router.get('/contact', mainControllers.home);
router.get('/about', mainControllers.home);
router.get('/faqs', mainControllers.home);

module.exports = router;