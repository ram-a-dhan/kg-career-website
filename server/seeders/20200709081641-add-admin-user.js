'use strict';
const { hashPassword } = require('../helpers/bcrypt');

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      email: 'adminweb@growthcenter.id', // nanti diganti
      password: hashPassword('Bram&Althebest'),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async(queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
  }
};