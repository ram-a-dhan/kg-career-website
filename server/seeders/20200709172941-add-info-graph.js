'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('impacts', [{
      logo_path: '',
      main_image_path: 'https://fathomless-plains-81425.herokuapp.com/images/1238249238291.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      logo_path: '',
      main_image_path: 'https://fathomless-plains-81425.herokuapp.com/images/4323132343443.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      logo_path: '',
      main_image_path: 'https://fathomless-plains-81425.herokuapp.com/images/1232222222313.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('impacts', null, {});
  }
};