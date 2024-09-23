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
        type: DataTypes.UUID,
      }
    }, {
      tableName: 'users',
      timestamps: false,
      indexes: [
        {
          name: 'dataCard_id_index',  // Nombre del índice (opcional)
          fields: ['dataCard_id']     // Campos a los que se les va a aplicar el índice
        }
      ]
    });
  
    return users;
  };
  