const express = require('express');
const bodyParser = require('body-parser');
//const userRoutes = require('./routes/userRoutes');
const users = require('./routes/users')
const aviones = require('./routes/aviones')
const datosTarjeta = require('./routes/datosTarjeta')
const lugares = require('./routes/lugares')
const pilotos = require('./routes/pilotos')
const reservaciones = require('./routes/reservaciones')
const vuelos = require = require('./routes/vuelos')

const app = express();

app.use(bodyParser.json());

// Cargar rutas
//app.use('/api', userRoutes);
app.use('/', users);
app.use('/plane', aviones);
app.use('/dataCard', datosTarjeta);
app.use('/place', lugares);
app.use('/pilots', pilotos);
app.use('/reservation', reservaciones);
app.use('/Flights', vuelos);

module.exports = app;
