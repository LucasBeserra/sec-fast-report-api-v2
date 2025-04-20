'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const produtos = [
      'Placa Magnética',
      'Cagão Magnético',
      'Trembolinha',
      'Thomajack Toma Toma',
      'Polia Magnética',
      'Filtro Magnético',
      'Danoninho de Maromba',
      'Capo de Fusca',
      'Cosplay de Britadeira'
    ];

    const produtosJson = produtos.map((produto) => {
      return {
        nome: produto,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });

    await queryInterface.bulkInsert('Produtos', produtosJson, {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtos', null, {});

  }
};
