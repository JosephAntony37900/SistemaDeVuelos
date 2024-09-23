const express = require('express');
const router = express.Router();
const pilotos = require('../controllers/pilotos');

router.post('/Pilot', pilotos.createPilot);
// Ruta para obtener todas las tarjetas
router.get('/Pilot', pilotos.getAllPilots);
// Ruta para obtener una tarjeta por ID
router.get('/Pilot/:id', pilotos.getPilotById);
router.put('/Pilot/:id', pilotos.updatePilot);
router.delete('/Pilot/:id', pilotos.deletePilot);

module.exports = router;
