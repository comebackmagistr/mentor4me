const express = require('express');
const { Mentor } = require('../db/models');

const router = express.Router();

// show mentor
router.get('/mentorprofile', async (req, res) => {
  const { id } = req.session.user.id;
  try {
    const mentor = await Mentor.findOne({ where: { id } }); // здесь нужно исправить на req.session.user.id
    res.json(mentor);
  } catch (error) {
    console.log(error);
  }
});

// edit mentor
router.patch('/mentorProfile', async (req, res) => {
  const { id } = req.session.user.id;
  const { text } = req.body; // что будет здесь?
  await Mentor.update({ text }, { where: { id } }); // что будет здесь?
  const newMentor = await Mentor.findByPk(id); // что будет здесь?
  res.json(newMentor);
});

module.exports = router;
