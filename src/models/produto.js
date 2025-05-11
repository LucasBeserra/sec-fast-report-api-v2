'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {

    static associate(models) {
      Produto.hasMany(models.Valuation, { foreignKey: 'id_produto' });
    };
  };
  
  Produto.init({
    id_produto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, 
  {
    sequelize,
    modelName: 'Produto',
    tableName: 'Produtos', 
    timestamps: true
  });

  return Produto;
};