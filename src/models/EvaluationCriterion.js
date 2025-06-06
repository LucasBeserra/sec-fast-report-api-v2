"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class EvaluationCriterion extends Model {
    static associate(models) {
      EvaluationCriterion.belongsTo(models.Evaluation, {
        foreignKey: "avaliacao_id",
      });
    }
  }

  EvaluationCriterion.init(
    {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      nome: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      status: {
        type: DataTypes.ENUM("aprovado", "reprovado", "nao_aplicavel"),
        allowNull: false,
      },
      avaliacao_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
      },
    },
    {
      sequelize,
      modelName: "CriterioAvaliacao",
      tableName: "CriterioAvaliacaos",
      timestamps: true,
    }
  );

  return EvaluationCriterion;
};
