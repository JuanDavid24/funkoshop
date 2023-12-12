const express = require ('express');
const router = express.Router();

const {
    shopView,
    itemView,
    addItem,
    cartView,
    addToCart
} = require('../controllers/shopController')

// Routes
router.get('/', shopView);
router.get('/item/:id', itemView);
router.post('/item/:id/add', addItem);
router.get('/cart', cartView);
router.post('/cart', addToCart);

module.exports = router;

