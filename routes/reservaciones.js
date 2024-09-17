const express = require('express');
const router = express.Router();
const reservaciones = require('../controllers/reservaciones');

// Ruta para crear una tarjeta
router.post('/Reservation', reservaciones.createReservation);

// Ruta para obtener todas las tarjetas
router.get('/Reservation', reservaciones.getAllReservations);

// Ruta para obtener una tarjeta por ID
router.get('/Reservation/:id', reservaciones.getReservationById);

// Ruta para actualizar una tarjeta
router.put('/Reservation/:id', reservaciones.updateReservation);

// Ruta para eliminar una tarjeta
router.delete('/Reservation/:id', reservaciones.deleteReservation);

module.exports = router;
