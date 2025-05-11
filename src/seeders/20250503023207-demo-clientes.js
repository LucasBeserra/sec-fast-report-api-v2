'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const clientes = [
      {
        razao_social: 'EnCheGuei Vara Ltda',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        razao_social: 'Trocação Sincera Sociedade Ilimitada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        razao_social: 'Mandelão Ltda',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    const clientesJson = clientes.map((cliente) => {
      return {
        razao_social: cliente.razao_social,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });

    await queryInterface.bulkInsert('Clientes', clientesJson, {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {});
  }
};
