'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const Student = [
      {
        firstName: 'Studentik',
        lastName: 'Studentikov',
        email: 'studentik@mail.ru',
        zoom: 'studentik',
        phone: '89112233445',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Shkolnik',
        lastName: 'Shkolnikov',
        email: 'shkolnik@mail.ru',
        zoom: 'shkolnik',
        phone: '89019019011',
        password: '321',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Doshkolnik',
        lastName: 'Doshkolnikov',
        email: 'doshkolnik@mail.ru',
        zoom: 'doshkolnik',
        phone: '89876543210',
        password: '3231',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Students', Student, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Students', null, {});
  },
};
