'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('Products', 'categoryId', 'CategoryId');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('Products', 'CategoryId', 'categoryId');
  }
};

