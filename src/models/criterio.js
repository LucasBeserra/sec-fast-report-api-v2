'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Criterio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Criterio.belongsToMany(models.Avaliacao, {
        through: models.AvaliacaoCriterio,
        foreignKey: 'id_criterio'
      });
    }
  }
  Criterio.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Criterio',
  });
  return Criterio;
};