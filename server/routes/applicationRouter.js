const express = require('express');
const { Application, Student } = require('../db/models');

const router = express.Router();

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  const userId = req.session.user.id;
  const {
    video, call, chat, text,
  } = req.body;
  try {
    const application = await Application.create({
      video, call, chat, text, mentor_id: id, student_id: userId,
    });
    res.json({ application, id });
  } catch (error) {
    console.log(error);
  }
});

router.get('/applicationformentor', async (req, res) => {
  // const userId = req.session.user.id; // id авторизованного ментора
  const userId = 1; // хардкод
  try {
    const applications = await Application.findAll({
      order: [['createdAt', 'DESC']],
      where: { mentor_id: userId },
      include: [{
        model: Student,
      }],
    });
    res.json(applications);
  } catch (error) {
    console.log(error);
  }
});

router.get('/applicationformentor/:id', async (req, res) => {
  try {
    // const userId = req.session.user.id; // id авторизованного ментора
    const userId = 1; // хардкод
    const oneApplication = await Application.findOne({
      where: { mentor_id: userId },
      include: [{
        model: Student,
      }],
    });
    res.json(oneApplication, userId);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
