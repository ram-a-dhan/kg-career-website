'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('testimonials', [{
      title: 'Using data as insight',
      message: 'Selama di StratX, saya tidak hanya mengembangkan skill yang terkait pekerjaan utama saya sebagai Researcher namun juga mempelajari ilmu lain yang tentu saja menambah skill saya. Saya belajar pula untuk menggunakan data sebagai sebuah insight dan strategi untuk membantu bisnis. StratX menurut saya adalah tempat yang sangat cocok untuk mereka yang mau maju dan berkembang.',
      job_description: 'Lintang Maraya Syahdenal, Cust. Exp. & Qualitative Research Officer of StratX',
      photo_path: 'https://fathomless-plains-81425.herokuapp.com/images/3234323432432.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Where innovation comes true',
      message: 'Bergabung di Rekata, membuat saya tumbuh melebihi level saya yang sebelumnya dan makin kaya secara ilmu, serta pengalaman. Di Rekata, banyak inovasi yang sebelumnya sulit terealisasi kini satu persatu dapat dijalankan bersama anggota yang lain. Khususnya inovasi dalam mengembangkan isi dari buku-buku fisik menjadi konten digital seperti film, game, virtual reality dan lainnya sehingga dapat semakin berguna bagi banyak orang di era digital ini.',
      job_description: 'Andika Pramudya, Associate Creative Director of Rekata',
      photo_path: 'https://fathomless-plains-81425.herokuapp.com/images/8767382843829.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Supportive and collaborative',
      message: 'Menjadi salah satu pemimpin di Larisin adalah pekerjaan yang cukup menantang. Banyak banget hal yang masih harus dipelajari. Saya senang karena semua orang di Larisin ikut memberikan dukungan untuk mencoba membuat dunia yang lebih baik dengan melakukan hal-hal yang susah. Di Larisin, kita masih berjuang, tetapi sambil belajar banyak hal baru.',
      job_description: 'Cahyo Listyanto, Chief Technology Officer of Larisin',
      photo_path: 'https://fathomless-plains-81425.herokuapp.com/images/3243242342188.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('testimonials', null, {});
  }
};