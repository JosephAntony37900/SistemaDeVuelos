module.exports = (sequelize, DataTypes) => {
    const Flight = sequelize.define('Flight', {
        id: {
            type: DataTypes.UUID,
        //    defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
      state: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      id_to: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      init_time: {
        type: DataTypes.TIME,
        allowNull: false
      },
      end_time: {
        type: DataTypes.TIME,
        allowNull: false
      },
      id_plane: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_pilot: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_from: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'flights',
      timestamps: false
    });
  
    return Flight;
  };
  