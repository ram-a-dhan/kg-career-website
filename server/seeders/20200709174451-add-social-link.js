'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('socials', [{
      name: 'Facebook',
      link: 'https://web.facebook.com/KompasGramediaKG',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/company/kompas-gramedia',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Instagram',
      link: 'https://www.instagram.com/workwithkg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('socials', null, {});
  }
};