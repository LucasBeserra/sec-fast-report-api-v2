'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Avaliacaos', [
      {
        resultado: 'aprovado',
        produto_id: 1,  // ID do produto que você deseja referenciar
        criterio_id: 1,  // ID do critério que você deseja referenciar
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        resultado: 'reprovado',
        produto_id: 2,
        criterio_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        resultado: 'nao_aplicavel',
        produto_id: 3,
        criterio_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Avaliacaos', null, {});
  }
};
