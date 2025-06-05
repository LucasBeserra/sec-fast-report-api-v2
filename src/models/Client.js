'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {

    static associate(models) {
      Client.hasMany(models.Evaluation, { foreignKey: 'client_id' });
    };
  };

  Client.init({
    client_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    razao_social: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, 
  {
    sequelize,
    modelName: 'Client',
    tableName: 'Clients',
    timestamps: true,
    paranoid: true,
    underscored: false
  });

  return Client;
};