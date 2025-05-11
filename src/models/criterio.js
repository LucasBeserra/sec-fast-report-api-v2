'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Criterio extends Model {

    static associate(models) {
      Criterio.belongsToMany(models.Valuation, {
        through: models.ValuationJoinCriterio,
        foreignKey: 'id_criterio',
      });
    };
  };

  Criterio.init({
    id_criterio: {
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
    modelName: 'Criterio',
    tableName: 'Criterios',
    timestamps: true
  });

  return Criterio;
};