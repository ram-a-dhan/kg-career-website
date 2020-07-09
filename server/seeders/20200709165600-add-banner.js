'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('banners', [{
      name: 'Top Banner',
      title: 'Grow beyond your work',
      subtitle: '',
      banner_path: 'http://localhost:3000/images/1294382749372.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Who We Are',
      title: 'Who We Are',
      subtitle: 'Kompas Gramedia (KG) is the biggest media conglomerate in Indonesia. We aim to be the biggest, best, integrated and spread in South East Asia through knowledge base industry to create well educated society, enlighten and respect to cultural differences and social welfare.',
      banner_path: 'http://localhost:3000/images/2412421421442.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Join Us',
      title: 'It is not for the doer. It is for the game-changer.',
      subtitle: `Inviting those that wants to be bigger than themselves. Are you the game-changer we're looking for?`,
      banner_path: 'http://localhost:3000/images/3322198329382.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('banners', null, {});
  }
};