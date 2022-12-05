const randomProfile = require('random-profile-generator');

const profile = randomProfile.profile();
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Students', [
      {
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        zoom: profile.twitter,
        phone: profile.phone,
        password: 'password',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaVn-RVo12JBJq8FDGKViN5KtJL6_OPXIuHA&usqp=CAU',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
