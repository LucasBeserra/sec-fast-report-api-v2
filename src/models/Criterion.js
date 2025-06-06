"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Criterion extends Model {
    static associate(models) {
        //association
    }
  }

  Criterion.init(
    {
      criterion_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Criterion",
      tableName: "Criteria",
      timestamps: true,
      paranoid: true,
      underscored: false,
    }
  );

  return Criterion;
};