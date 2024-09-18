const Sequelize = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

const db = {};
db.ORM = Sequelize;
db.connection = sequelize;

// Importar modelos
db.users = require('./users')(sequelize, Sequelize);
db.Plane = require('./avion')(sequelize, Sequelize);
db.Place = require('./lugares')(sequelize, Sequelize);
db.Pilot = require('./pilotos')(sequelize, Sequelize);
db.Reservetion = require('./reservaciones')(sequelize, Sequelize);
db.Datacard = require('./tarjeta')(sequelize, Sequelize);
db.Flight = require('./vuelos')(sequelize, Sequelize);



module.exports = db;
