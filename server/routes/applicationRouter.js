const express = require('express');
const { Application, Review, Student } = require('../db/models');

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

// show all reviews
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const allReviews = await Review.findAll({ where: { mentor_id: id }, include: Student });
    res.json(allReviews);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
