"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class CriterioAvaliacao extends Model {
    static associate(models) {
      CriterioAvaliacao.belongsTo(models.Avaliacao, {
        foreignKey: "avaliacao_id",
      });
    }
  }

  CriterioAvaliacao.init(
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

  return CriterioAvaliacao;
};
