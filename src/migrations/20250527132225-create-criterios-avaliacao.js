"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CriterioAvaliacaos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      criterio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      resultado: {
        type: Sequelize.ENUM("aprovado", "reprovado", "nao_aplicavel"),
        allowNull: false,
      },
      avaliacaoId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Avaliacaos",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("CriterioAvaliacaos");
  },
};
