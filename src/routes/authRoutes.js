const express = require ('express');
const router = express.Router();
const {
    loginView,
    doLogin,
    registerView,
    doRegister,
    logout
} = require('../controllers/authController') 

//Routes
router.get('/login', loginView);
router.post('/login', doLogin);
router.get('/register', registerView);
router.post('/register', doRegister);
router.get('/logout', logout);

module.exports = router;
