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
    }
  }
  Criterio.init({
    id_criterio: DataTypes.INTEGER,
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Criterio',
  });
  return Criterio;
};