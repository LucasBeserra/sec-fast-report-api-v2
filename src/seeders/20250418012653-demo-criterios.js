'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const criterios = [
      'Tomatecrum',
      'Rebarba(s)',
      'Canto(s) vivo',
      'Risco(s)',
      'Solda(s)',
      'Fixação(ões)',
      'Resina',
      'Altura',
      'Largura',
      'Profundidade',
      'Outras dimensões',
      'Quantidade de Bastões',
      'Recravado',
      'Soldado',
      'Hermético',
      'Simples',
      'Dupla',
      'Outras',
      'Polido',
      'Jateado',
      'Escovado',
      'Eletropolimento',
      'Pintura',
      'Zincado',
      'Teste de Líquido Penetrante',
      'Teste Hidrostático',
      'Teste de carga',
      'Corrente'
    ];

    const criteriosJson = criterios.map((criterio) => {
      return {
        nome: criterio,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });

    await queryInterface.bulkInsert('Criterios', criteriosJson, {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Criterios', null, {});

  }
};
