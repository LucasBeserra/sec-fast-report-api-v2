"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Evaluation extends Model {
    static associate(models) {
      Avaliacao.belongsTo(models.Cliente, { foreignKey: "id_cliente" });
      Avaliacao.belongsTo(models.Produto, { foreignKey: "id_produto" });
      Avaliacao.hasMany(models.CriterioAvaliacao, {
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
