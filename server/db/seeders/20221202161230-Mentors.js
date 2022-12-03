const randomProfile = require('random-profile-generator');

const profile = randomProfile.profile();
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Mentors', [
      {
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        zoom: profile.twitter,
        phone: profile.phone,
        video: 'video',
        call: 'call',
        chat: 'chat',
        price: 99,
        password: 'password',
        education: 'MGU',
        job: 'mentor',
        profArea: 'IT',
        profScill: 'JS',
        aboutMe: profile.address,
        portfolio: 'portfolio',
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