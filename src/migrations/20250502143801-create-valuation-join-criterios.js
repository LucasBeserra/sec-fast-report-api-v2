'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('ValuationJoinCriterios', {
      id_valuation_join_criterio: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_valuation: Sequelize.INTEGER,
      id_criterio: Sequelize.INTEGER
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('ValuationJoinCriterios');
  }
};
