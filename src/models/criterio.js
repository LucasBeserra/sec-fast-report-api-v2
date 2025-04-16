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
      Criterio.associate = models => {
        Criterio.belongsToMany(models.Produto, {
          through: models.Avaliacao,
          foreignKey: 'criterio_id'
        });
      
        Criterio.hasMany(models.Avaliacao, { foreignKey: 'criterio_id' });
      };      
    }
  }
  Criterio.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Criterio',
  });
  
  return Criterio;
};