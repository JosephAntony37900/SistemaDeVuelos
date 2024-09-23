module.exports = (sequelize, DataTypes) => {
    const Cancel = sequelize.define('Cancel', {
      id: {
          type: DataTypes.UUID,
          //defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
      },
      cancelation_reason: {
        type: DataTypes.TEXT,
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
      },
      cancelation_date:{
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      tableName: 'cancel', 
      timestamps: true
    });
  
    return Cancel;
  };