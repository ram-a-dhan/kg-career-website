'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('impacts', [{
      logo_path: 'https://dev.growwithkg.id/images/4321342342343.png',
      main_image_path: 'https://dev.growwithkg.id/images/1238249238291.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      logo_path: 'https://dev.growwithkg.id/images/5325312532152.png',
      main_image_path: 'https://dev.growwithkg.id/images/4323132343443.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      logo_path: 'https://dev.growwithkg.id/images/3347898428438.png',
      main_image_path: 'https://dev.growwithkg.id/images/1232222222313.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('impacts', null, {});
  }
};