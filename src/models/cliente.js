'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {

    static associate(models) {
      Cliente.hasMany(models.Avaliacao, { foreignKey: 'id_cliente' });
    };
  };

  Cliente.init({
    id_cliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    razao_social: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, 
  {
    sequelize,
    modelName: 'Cliente',
    tableName: 'Clientes',
    timestamps: true
  });

  return Cliente;
};