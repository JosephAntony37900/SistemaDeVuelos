module.exports = (sequelize, DataTypes) => {
    const Datacard = sequelize.define('Datacard', {
        id: {
            type: DataTypes.UUID,
           // defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
      card_number: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      expiration_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      cvv: {
        type: DataTypes.STRING(4),
        allowNull: false
      },
      id_user: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'dataCard_id'
        },
        onUpdate: 'CASCADE'
      }
    }, {
      tableName: 'datacard',
      timestamps: false
    });
  
    return Datacard;
  };
  