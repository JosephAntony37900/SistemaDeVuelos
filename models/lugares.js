module.exports = (sequelize, DataTypes) => {
    const Place = sequelize.define('Place', {
        id: {
            type: DataTypes.UUID,
           // defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      longitude: {
        type: DataTypes.DECIMAL(10, 7),
        allowNull: false
      },
      latitude: {
        type: DataTypes.DECIMAL(10, 7),
        allowNull: false
      },
      state: {
        type: DataTypes.STRING(45),
        allowNull: false
      }
    }, {
      tableName: 'places',
      timestamps: false
    });
  
    return Place;
  };
  