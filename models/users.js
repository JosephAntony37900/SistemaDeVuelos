module.exports = (sequelize, DataTypes) => {
    
    const users = sequelize.define('users', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      dataCard_id: {
        type: DataTypes.INTEGER,
      }
    }, {
      tableName: 'users',
      timestamps: false
    });
  
    return users;
  };
  