/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        student_id: 1,
        mentor_id: 1,
        comment: 'Тупой олень не знает методов массива',
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 1,
        mentor_id: 1,
        comment: 'Этот баран не умеет пользоваться sequelize',
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 1,
        mentor_id: 1,
        comment: 'Пердит на созвонах, хорошо что камера не передает запахи',
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 1,
        mentor_id: 1,
        comment: 'Душный мудак,постоянно умничает',
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 1,
        mentor_id: 1,
        comment: 'Единственный нормальный тип из всех этих даунов',
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
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
