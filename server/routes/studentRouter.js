const express = require('express');
const { Student } = require('../db/models');

const router = express.Router();

// show student
router.get('/studentprofile', async (req, res) => {
  const { id } = req.session.user.id;
  try {
    const student = await Student.findOne({ where: { id } });
    res.json(student);
  } catch (error) {
    console.log(error);
  }
});

// edit student
router.patch('/studentprofile', async (req, res) => {
  const { id } = req.session.user.id;
  const {
    firstName,
    lastName,
    email,
    zoom,
    phone,
  } = req.body;
  await Student.update({
    firstName,
    lastName,
    email,
    zoom,
    phone,
  }, { where: { id } });
  const newStudent = await Student.findByPk(id);
  res.json(newStudent);
});

module.exports = router;
