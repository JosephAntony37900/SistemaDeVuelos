const express = require('express');
const router = express.Router();
const reservaciones = require('../controllers/reservaciones');

router.post('/Reservation', reservaciones.createReservation);
// Ruta para obtener todas las tarjetas
router.get('/Reservation', reservaciones.getAllReservations);
// Ruta para obtener una tarjeta por ID
router.get('/Reservation/:id', reservaciones.getReservationById);
router.put('/Reservation/:id', reservaciones.updateReservation);
router.delete('/Reservation/:id', reservaciones.deleteReservation);
// Ruta para el estado de la reservación
router.get('/state/:id', reservaciones.getState);

module.exports = router;
