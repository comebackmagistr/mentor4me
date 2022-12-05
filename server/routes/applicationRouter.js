const express = require('express');
const { Application } = require('../db/models');

const router = express.Router();

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  //   const userId = req.session.user.id;
  const userId = 2;
  const {
    video, call, chat, text,
  } = req.body;
  //   console.log(userId, 'fjshdshjfjhdsfjds');
  //   console.log(id, 'igor232');
  try {
    const application = await Application.create({
      video, call, chat, text, mentor_id: id, student_id: userId,
    });
    res.json(application, id);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
