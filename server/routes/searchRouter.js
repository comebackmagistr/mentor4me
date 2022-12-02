const express = require('express');
const { Op, Sequelize } = require('sequelize');
const { Mentor } = require('../db/models');

const router = express.Router();

router.post('/', async (req, res) => {
  const searchObj = req.body;
  console.log(searchObj.obj);
  // const allMentorsSearch = await Mentor.findAll({
  //   where: Sequelize.or({
  //     // price: {
  //     //   [Op.gte]: searchObj.valueOn[0],
  //     //   [Op.lte]: searchObj.valueOn[1],
  //     // },
  //     // [Op.or]: [{ call: searchObj.obj?.call === undefined ? 'off' : searchObj.obj?.call, video: searchObj.obj?.video === undefined ? 'off' : searchObj.obj?.video }],
  //     Sequelize.or(
  //       { call: { [Op.eq]: 'on' } },
  //       { video: { [Op.eq]: 'on' } },
  //       { chat: { [Op.eq]: 'on' } },
  //     ),
  //   }),

  // });

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
  console.log(JSON.parse(JSON.stringify(allMentorsSearch)));
});

module.exports = router;
