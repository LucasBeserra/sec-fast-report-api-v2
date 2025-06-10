'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const products = [
      'Capo de Gol',
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

    const productsJson = products.map((product) => {
      return {
        name: product,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });

    await queryInterface.bulkInsert('Products', productsJson, {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});

  }
};
