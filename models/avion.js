module.exports = (sequelize, DataTypes) => {
  const Plane = sequelize.define('Plane', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'planes', // Asegura que use la tabla 'planes'
    timestamps: false
  });

  return Plane;
};
