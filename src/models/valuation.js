'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Valuation extends Model {

    static associate(models) {

      Valuation.belongsTo(models.Cliente, { foreignKey: 'id_cliente' });
      Valuation.belongsTo(models.Produto, { foreignKey: 'id_produto' });
      Valuation.belongsToMany(models.Criterio, { through: 'ValuationJoinCriterio' }, { foreignKey: 'id_valuation' });
    };
  };

  Valuation.init({
    id_valuation: {
      type:DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true
    },
    numero_serie: {
      type: DataTypes.STRING,
      unique: true
    },
    data: DataTypes.DATE,
    id_produto: DataTypes.INTEGER,
    id_cliente: DataTypes.INTEGER
  }, 
  {
    sequelize,
    modelName: 'Valuation',
    tableName: 'Valuations',
    timestamps: true
  });

  return Valuation;
};