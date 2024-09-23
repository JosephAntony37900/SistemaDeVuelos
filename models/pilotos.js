module.exports = (sequelize, DataTypes) => {
    const Pilot = sequelize.define('Pilot', {
        id: {
            type: DataTypes.UUID,
           // defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      salary: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      id_flight: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'flights',
          key: 'id'
        },
        onUpdate: 'CASCADE'
      }
    }, {
      tableName: 'pilots',
      timestamps: false
    });
  
    return Pilot;
  };
  