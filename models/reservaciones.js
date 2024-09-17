module.exports = (sequelize, DataTypes) => {
    const Reservation = sequelize.define('Reservation', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
      id_flight: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      time_reservation: {
        type: DataTypes.DATE,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      id_passengers: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      sit: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'reservations',
      timestamps: false
    });
  
    return Reservation;
  };
  