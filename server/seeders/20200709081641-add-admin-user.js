'use strict';
const { hashPassword } = require('../helpers/bcrypt');

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      email: 'admin@admin.com', // nanti diganti
      password: hashPassword('growwithkg2020'),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async(queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
  }
};