const express = require('express');
const { Op, Sequelize } = require('sequelize');
const { Mentor } = require('../db/models');

const router = express.Router();

router.post('/', async (req, res) => {
  const searchObj = req.body;
  console.log(searchObj.obj);
  try {
    const allMentorsSearch = await Mentor.findAll({
      where: Sequelize.and(
        Sequelize.or(
          { call: { [Op.eq]: searchObj.obj?.call } },
          { video: { [Op.eq]: searchObj.obj?.video } },
          { chat: { [Op.eq]: searchObj.obj?.chat } },
        ),
        {
          price: {
            [Op.gte]: searchObj.valueOn[0],
            [Op.lte]: searchObj.valueOn[1],
          },
        },
      ),
    });
    res.json(allMentorsSearch);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
