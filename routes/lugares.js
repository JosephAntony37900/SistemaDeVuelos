const express = require('express');
const router = express.Router();
const lugares = require('../controllers/lugares');

router.post('/places', lugares.createPlace);
// Ruta para obtener todos los lugares
router.get('/places', lugares.getAllPlaces);
// Ruta para obtener un lugar por ID
router.get('/places/:id', lugares.getPlaceById);
router.put('/places/:id', lugares.updatePlace);
router.delete('/places/:id', lugares.deletePlace);

module.exports = router;
