module.exports = (sequelize, DataTypes) => {
    const Passengers = sequelize.define('Passengers', {
      id: {
          type: DataTypes.UUID,
          //defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'passengers', 
      timestamps: false
    });
  
    return Passengers;
  };