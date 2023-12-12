const express = require ('express');
const router = express.Router();
const {
    loginView,
    sendLoginData,
    registerView,
    sendRegisterData,
    logout
} = require('../controllers/authController') 

//Routes
router.get('/login', loginView);
router.post('/login', sendLoginData);
router.get('/register', registerView);
router.post('/register', sendRegisterData);
router.get('/logout', logout);

module.exports = router;
