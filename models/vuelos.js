const { Model } = require("sequelize");

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
        type: DataTypes.UUID,
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
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'planes',
          key: 'id'
        },
        onUpdate: 'CASCADE'
      },
      id_pilot: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'pilots',
          key: 'id'
        },
        onUpdate: 'CASCADE'
      },
      id_from: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'places',
          key: 'id'
        },
        onUpdate: 'CASCADE'
      }
    }, {
      tableName: 'flights',
      timestamps: false
    });
  
    return Flight;
  };
  