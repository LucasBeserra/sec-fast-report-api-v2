"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Evaluation extends Model {
    static associate() {
    }
  }

  Evaluation.init(
    {
      evalution_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      serial_number: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      date: { 
        type: DataTypes.DATEONLY, 
        allowNull: false 
      },
      product_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
      },
      client_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
      },
      evaluation_code: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
    },

    {
      sequelize,
      modelName: "Evaluation",
      tableName: "Evalutions",
      timestamps: true,
    }
  );

  return Evaluation;
};
