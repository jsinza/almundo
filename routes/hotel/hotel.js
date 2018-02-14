const express = require('express');
const router = express.Router();
const fileUploads = require('../../util/FileUpload');

/**
 * Routes
 */
router.get('/', require('../../controllers/hotel/index'));
router.get('/:id', require('../../controllers/hotel/show'));
router.post('/',fileUploads.single('file'), require('../../controllers/hotel/create'));
router.delete('/:id', require('../../controllers/hotel/delete'));
router.put('/:id', fileUploads.single('file'),require('../../controllers/hotel/update'));
router.post('/search', require('../../controllers/hotel/search'));
module.exports = router;
