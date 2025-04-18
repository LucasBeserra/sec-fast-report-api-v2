'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avaliacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Avaliacao.belongsTo(models.Produto, { foreignKey: 'id_produto' });
      Avaliacao.belongsTo(models.Cliente, { foreignKey: 'id_cliente' });
      Avaliacao.hasMany(models.AvaliacaoCriterio, { foreignKey: 'id_avaliacao' });
    }
  }
  Avaliacao.init({
    codigo_relatorio: DataTypes.STRING,
    numero_serie: DataTypes.STRING,
    data: DataTypes.DATE,
    id_produto: DataTypes.INTEGER,
    id_cliente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Avaliacao',
  });
  return Avaliacao;
};