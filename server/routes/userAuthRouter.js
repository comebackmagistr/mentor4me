const express = require('express');
const { hash, compare } = require('bcrypt');
const { Student, Mentor } = require('../db/models');

const router = express.Router();

router.post('/student', async (req, res) => {
  console.log(req.body, 'studeeeeent');
  const {
    firstName, lastName, email, zoom, phone, password,
  } = req.body;
  const hashPassword = await hash(password, 10);
  const student = await Student.create({
    firstName, lastName, email, zoom, phone, password: hashPassword,
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
  const hashPassword = await hash(password, 10);
  const mentor = await Mentor.create({
    firstName, lastName, email, zoom, phone, video, call, chat, price, password: hashPassword, education, job, profArea, profScill, aboutMe, portfolio,
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

router.post('/login', async (req, res) => {
  const { email, password, isMentor } = req.body;
  try {
    if (isMentor) {
      const findOneMentor = await Mentor.findOne({
        where: {
          email,
        },
      });
      const isValid = await compare(password, findOneMentor.password);
      if (isValid) {
        req.session.user = {
          id: findOneMentor.id, name: findOneMentor.firstName, lastname: findOneMentor.lastName, mentor: true,
        };
        return res.json(req.session.user);
      }
      return res.json({});
    }
    const findOneStudent = await Student.findOne({
      where: {
        email,
      },
    });
    const isValid = await compare(password, findOneStudent.password);
    if (isValid) {
      req.session.user = {
        id: findOneStudent.id, name: findOneStudent.firstName, lastname: findOneStudent.lastName, mentor: false,
      };
      return res.json(req.session.user);
    }
    res.json({});
  } catch (err) {
    console.log(err);
    res.json({});
  }
});

module.exports = router;
