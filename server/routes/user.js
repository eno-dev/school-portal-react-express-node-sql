const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')


router.post('/create', usersController.createUser)
router.get('/', usersController.getUser)
router.get('/:id', usersController.getUserById)
router.get('/teachers', usersController.getTeacher)
router.put('/update/:id', usersController.updateUser)
router.delete('/delete/:id', usersController.deleteUser)

module.exports = router;