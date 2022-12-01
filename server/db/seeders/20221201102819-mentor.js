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
    const Mentor = [
      {
        firstName: 'Malina',
        lastName: 'Malinina',
        email: 'malina@mail.ru',
        zoom: 'malina',
        phone: '89291112222',
        price: '3500',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Kalina',
        lastName: 'Kalinina',
        email: 'kalina@mail.ru',
        zoom: 'kalina',
        phone: '89290009988',
        price: '2500',
        password: '321',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Polina',
        lastName: 'Polinina',
        email: 'polina@mail.ru',
        zoom: 'polina',
        phone: '89001001020',
        price: '1500',
        password: '231',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Mentors', Mentor, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Mentors', null, {});
  },
};
