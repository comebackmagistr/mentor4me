const express = require('express');
const { Review, Student } = require('../db/models');

const router = express.Router();

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
