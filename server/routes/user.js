const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

router.get('/', usersController.getUser)
router.post('/:id', usersController.getUserById)
router.post('/role/:id', usersController.getUserByRole)
router.post('/create', usersController.createUser)
router.put('/update/:id', usersController.updateUser)
router.delete('/delete/:id', usersController.deleteUser)

module.exports = router;