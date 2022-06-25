const express = require('express');
const router = express.Router();
const logoutController = require('../controllers/logoutController');
const verifyJWT = require('../middleware/verifyJWT')

router.get('/logout', logoutController.handleLogout)

module.exports = router;