const express = require ('express');
const router = express.Router();
const uploadFiles = require('../middlewares/uploadFiles');
const {
    adminView,
    createView,
    createItem,
    editView,
    editItem,
    deleteItem
} = require('../controllers/adminController');

const isLogged = (req, res, next) => {
    if (req.session.isLogged){
        return next()
    }
    res.status(401).send('Necesitas loguearte para poder acceder a esta parte del sitio')
}

// Routes
router.get('/', isLogged, adminView);
router.get('/create', isLogged, createView);
router.post('/create', uploadFiles.array('images', 2), createItem);
router.get('/edit/:id', isLogged, editView);
router.put('/edit/:id', uploadFiles.array('images', 2), editItem);
router.delete('/delete/:id', deleteItem);

module.exports = router;
