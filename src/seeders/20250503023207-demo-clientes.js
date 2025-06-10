'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const clients = [
      'EnCheGuei Vara Ltda',
      'Trocação Sincera Sociedade Ilimitada',
      'Mandelão Ltda'
    ];

    const clientsJson = clients.map((client) => {
      return {
        razao_social: client,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });

    await queryInterface.bulkInsert('Clients', clientsJson, {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clients', null, {});
  }
};
