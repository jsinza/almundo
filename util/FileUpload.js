const express = require('express');
const router = express.Router();
const multer = require("multer");

/** 
 * almacenamiento del imagenes
*/
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images/hotels/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const uploadFile = multer({ storage });

module.exports = uploadFile;