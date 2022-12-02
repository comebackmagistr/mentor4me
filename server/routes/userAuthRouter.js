const express = require('express');
const bcrypt = require('bcrypt');
const { Student, Mentor } = require('../db/models');

const router = express.Router();

router.post('/student', async (req, res) => {
  console.log(req.body, 'studeeeeent');
  const {
    firstName, lastName, email, zoom, phone,
  } = req.body;
  const student = await Mentor.create({
    firstName, lastName, email, zoom, phone,
  });
  req.session.user = {
    id: student.id, name: student.firstName, lastname: student.lastName, mentor: false,
  };
  res.json(req.session.user);
});

router.post('/mentor', async (req, res) => {
  console.log(req.body, 'mentoooor');
  const {
    firstName, lastName, email, zoom, phone, video, call, chat, price, password, education, job, profArea, profScill, aboutMe, portfolio,
  } = req.body;
  const mentor = await Mentor.create({
    firstName, lastName, email, zoom, phone, video, call, chat, price, password, education, job, profArea, profScill, aboutMe, portfolio,
  });
  req.session.user = {
    id: mentor.id, name: mentor.firstName, lastname: mentor.lastName, mentor: true,
  };
  res.json(req.session.user);
});

router.get('/check', (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  res.json({});
});

module.exports = router;
