const express = require('express');
const { Mentor } = require('../db/models');

const router = express.Router();

// show mentor
router.get('/mentorprofile', async (req, res) => {
  try {
    const mentor = await Mentor.findOne({ where: { firstName: 'Malina' } }); // здесь нужно исправить на req.session.user.id
    res.json(mentor);
  } catch (error) {
    console.log(error);
  }
});

// router.patch('/:id', async (req, res) => {
//   const { id } = req.params;
//   const { text } = req.body; // что будет здесь?
//   await Mentor.update({ text }, { where: { id } }); // что будет здесь?
//   const newMentor = await Mentor.findByPk(id); // что будет здесь?
//   res.json(newMentor);
// });

module.exports = router;
