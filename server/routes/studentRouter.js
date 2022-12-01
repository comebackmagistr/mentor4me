const express = require('express');
const { Student } = require('../db/models');

const router = express.Router();

// show student
router.get('/studentprofile', async (req, res) => {
  try {
    const student = await Student.findOne({ where: { firstName: 'Shkolnik' } }); // здесь нужно исправить на req.session.user.id
    res.json(student);
  } catch (error) {
    console.log(error);
  }
});

// router.patch('/:id', async (req, res) => {
//   const { id } = req.params;
//   const { text } = req.body; // что будет здесь?
//   await Student.update({ text }, { where: { id } }); // что будет здесь?
//   const newStudent = await Student.findByPk(id); // что будет здесь?
//   res.json(newStudent);
// });

module.exports = router;
