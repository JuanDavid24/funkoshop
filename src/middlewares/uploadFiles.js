const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const collection = req.body.collection;
        const folder = path.resolve(__dirname, '../../public/img/' + collection);
        // if (!fs.existsSync(folder)) // crear carpeta para nueva licencia
        //     fs.mkdirSync(folder)
        cb(null, path.resolve(__dirname, '../../public/img/' + collection))
    },
    filename: (req, file, cb) => {
        console.log("multer file " + JSON.stringify(file))
        cb(null, `${Date.now()}_${file.originalname}`)
    }
});

const uploadFiles = multer({storage})

module.exports = uploadFiles