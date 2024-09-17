const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para crear un usuario
router.post('/users', userController.createUser);

// Ruta para obtener todos los usuarios con sus publicaciones
router.get('/users', userController.getAllUsers);

module.exports = router;
