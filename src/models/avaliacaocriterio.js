'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AvaliacaoCriterio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AvaliacaoCriterio.belongsTo(models.Avaliacao, { foreignKey: 'id_avaliacao' });
      AvaliacaoCriterio.belongsTo(models.Criterio, { foreignKey: 'id_criterio' });
    }
  }
  AvaliacaoCriterio.init({
    id_avaliacao: DataTypes.INTEGER,
    id_criterio: DataTypes.INTEGER,
    resultado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AvaliacaoCriterio',
  });
  return AvaliacaoCriterio;
};