const express = require('express');
const router = express.Router();
const pilotos = require('../controllers/pilotos');

// Ruta para crear una tarjeta
router.post('/Pilot', pilotos.createPilot);

// Ruta para obtener todas las tarjetas
router.get('/Pilot', pilotos.getAllPilots);

// Ruta para obtener una tarjeta por ID
router.get('/Pilot/:id', pilotos.getPilotById);

// Ruta para actualizar una tarjeta
router.put('/Pilot/:id', pilotos.updatePilot);

// Ruta para eliminar una tarjeta
router.delete('/Pilot/:id', pilotos.deletePilot);

module.exports = router;
