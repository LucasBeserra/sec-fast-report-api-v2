"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Evaluation extends Model {
    static associate(models) {
      Evaluation.belongsTo(models.Client, { foreignKey: "id_cliente" });
      Evaluation.belongsTo(models.Product, { foreignKey: "id_produto" });
      Evaluation.hasMany(models.EvalutionCriterion, {
        foreignKey: "avaliacao_id",
        as: "criterios",
        onDelete: "CASCADE",
      });
    }
  }

  Evaluation.init(
    {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      numero_serie: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      data: { 
        type: DataTypes.DATEONLY, 
        allowNull: false 
      },
      id_produto: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
      },
      id_cliente: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
      },
      codigo_relatorio: { 
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
