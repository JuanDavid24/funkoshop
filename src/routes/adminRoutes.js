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

// Routes
router.get('/', adminView);
router.get('/create', createView);
router.post('/create', uploadFiles.array('images', 2), createItem);
router.get('/edit/:id', editView);
router.put('/edit/:id', editItem);
router.delete('/delete/:id', deleteItem);

module.exports = router;
