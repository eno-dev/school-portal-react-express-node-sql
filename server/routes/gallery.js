const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController')

router.get('/getFileNames/:name', galleryController.getFileNames)

module.exports = router;