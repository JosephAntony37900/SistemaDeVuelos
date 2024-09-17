const express = require('express');
const router = express.Router();
const aviones = require('../controllers/aviones');

// Ruta para crear una tarjeta
router.post('/Planes', aviones.createPlane);

// Ruta para obtener todas las tarjetas
router.get('/Planes', aviones.getAllPlanes);

// Ruta para obtener una tarjeta por ID
router.get('/Planes/:id', aviones.getPlaneById);

// Ruta para actualizar una tarjeta
router.put('/Planes/:id', aviones.updatePlane);

// Ruta para eliminar una tarjeta
router.delete('/Planes/:id', aviones.deletePlane);

module.exports = router;
