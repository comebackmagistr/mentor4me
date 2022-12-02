const express = require('express');
const { hash, compare } = require('bcrypt');
const { Mentor } = require('../db/models');

const router = express.Router();

router.post('/', async (req, res) => {
  console.log(req.body);
  const {
    firstName, lastName, email, zoom, phone, video, call, chat, price, password, education, job, profArea, profScill, aboutMe, portfolio,
  } = req.body;
  const response = await Mentor.create({
    firstName, lastName, email, zoom, phone, video, call, chat, price, password, education, job, profArea, profScill, aboutMe, portfolio,
  });
  res.json(response);
});

module.exports = router;
