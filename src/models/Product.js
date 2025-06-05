'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {

    static associate(models) {
      Product.hasMany(models.Evaluation, { foreignKey: 'product_id' });
    };
  };
  
  Product.init({
    product_id  : {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    familia: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
  {
    sequelize,
    modelName: 'Product',
    tableName: 'Products', 
    timestamps: true,
    paranoid: true,
    underscored: false
  });

  return Product;
};