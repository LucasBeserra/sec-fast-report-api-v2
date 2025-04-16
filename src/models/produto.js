'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produto.associate = models => {
        Produto.belongsToMany(models.Criterio, {
          through: models.Avaliacao,
          foreignKey: 'produto_id'
        });
      
        Produto.hasMany(models.Avaliacao, { foreignKey: 'produto_id' });
      };      
    }
  }
  Produto.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produto',
  });
  
  return Produto;
};