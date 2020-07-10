'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('impacts', [{
      logo_path: '',
      main_image_path: 'http://localhost:3000/images/1238249238291.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      logo_path: '',
      main_image_path: 'http://localhost:3000/images/4323132343443.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      logo_path: '',
      main_image_path: 'http://localhost:3000/images/1232222222313.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('impacts', null, {});
  }
};