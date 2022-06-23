const express = require('express');
const router = express.Router();
const authController = require('../controllers/authContoller');
const verifyJWT = require('../middleware/verifyJWT')

router.post('/login', authController.postLogin)
router.get('/logout', verifyJWT, authController.logOut)
// router.post('/refresh', authController.refreshToken)

module.exports = router;