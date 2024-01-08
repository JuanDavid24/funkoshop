const express = require ('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs')
const shopControllers = require('../controllers/adminController');

const {
    adminView,
    createView,
    createItem,
    editView,
    editItem,
    deleteItem
} = require('../controllers/adminController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const collection = req.body.collection;
        const folder = path.resolve(__dirname, '../../public/img/' + collection);
        if (!fs.existsSync(folder)) 
            fs.mkdirSync(folder)
        cb(null, path.resolve(__dirname, '../../public/img/' + collection))
    },
    filename: (req, file, cb) => {
        console.log("multer file " + JSON.stringify(file))
        cb(null, `${Date.now()}_${file.originalname}`)
    }
});

const uploadFile = multer({storage})

// Routes
router.get('/', adminView);
router.get('/create', createView);
router.post('/create', uploadFile.array('images', 2), createItem);
router.get('/edit/:id', editView);
router.put('/edit/:id', editItem);
router.delete('/delete/:id', deleteItem);

module.exports = router;
