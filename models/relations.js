const { users, Place, Pilot, Plane, Reservetion, Datacard, Flight, Passengers, Cancel } = require(".");

// Relación de usuarios a DatosTarjeta, un usuario puede tener un DatosTarjeta
/*users.hasOne(Datacard);
Datacard.belongsTo(users);

users.findOne({ include: Datacard });*/

module.exports = (sequelize, DataTypes) => {
    const Pay = sequelize.define('Pay', {
      id: {
          type: DataTypes.UUID,
          //defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
      },
      cost: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      id_user: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
          },
          onUpdate: 'CASCADE'
      },
      id_reservation: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'reservations',
            key: 'id'
          },
          onUpdate: 'CASCADE'
      }
    }, {
      tableName: 'pay', 
      timestamps: false
    });
  
    const Board = sequelize.define('Board', {
      id: {
          type: DataTypes.UUID,
          //defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
      },
      id_flight: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'flights',
            key: 'id'
          },
          onUpdate: 'CASCADE'
      },
      id_passenger: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'passengers',
            key: 'id'
          },
          onUpdate: 'CASCADE'
      }
    }, {
      tableName: 'board', 
      timestamps: false
    });
  
    return { Pay, Board };
};
