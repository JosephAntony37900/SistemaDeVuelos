const express = require('express');
const router = express.Router();
const datosTarjeta = require('../controllers/datosTarjeta');

// Ruta para crear una tarjeta
router.post('/datacards', datosTarjeta.createDataCard);
// Ruta para obtener todas las tarjetas
router.get('/datacards', datosTarjeta.getAllDataCards);
// Ruta para obtener una tarjeta por ID
router.get('/datacards/:id', datosTarjeta.getDataCardById);
// Ruta para actualizar una tarjeta
router.put('/datacards/:id', datosTarjeta.updateDataCard);
// Ruta para eliminar una tarjeta
router.delete('/datacards/:id', datosTarjeta.deleteDataCard);

module.exports = router;
