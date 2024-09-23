const express = require('express');
const router = express.Router();
const vuelos = require('../controllers/vuelos');

// Ruta para crear una tarjeta
router.post('/Flight', vuelos.createFlight);
// Ruta para obtener todas las tarjetas
router.get('/Flight', vuelos.getAllFlights);
// Ruta para obtener una tarjeta por ID
router.get('/Flight/:id', vuelos.getFlightById);
// Ruta para actualizar una tarjeta
router.put('/Flight/:id', vuelos.updateFlight);
// Ruta para eliminar una tarjeta
router.delete('/Flight/:id', vuelos.deleteFlight);

module.exports = router;
