/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Applications', [
      {
        student_id: 1,
        mentor_id: 1,
        text: 'Тупой олень не знает методов массива',
        data: 2022,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 1,
        mentor_id: 1,
        text: 'Этот баран не умеет пользоваться sequelize',
        data: 2022,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 1,
        mentor_id: 1,
        text: 'Пердит на созвонах, хорошо что камера не передает запахи',
        data: 2022,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 1,
        mentor_id: 1,
        text: 'Душный мудак,постоянно умничает',
        data: 2022,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 1,
        mentor_id: 1,
        text: 'Единственный нормальный тип из всех этих даунов',
        data: 2022,
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
