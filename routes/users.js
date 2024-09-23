const express = require('express');
const router = express.Router();
const users = require('../controllers/usuarios');

// Ruta para crear un usuario
router.post('/users', users.createUser);
// Ruta para obtener todos los usuarios
router.get('/users', users.getAllUsers);
// Ruta para obtener un usuario por ID
router.get('/users/:id', users.getUserById);
// Ruta para actualizar un usuario
router.put('/users/:id', users.updateUser);
// Ruta para eliminar un usuario
router.delete('/users/:id', users.deleteUser);

module.exports = router;
