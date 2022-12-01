const express = require('express');
const { Op } = require('sequelize');
const { Mentor } = require('../db/models');

const router = express.Router();

router.post('/', async (req, res) => {
  const searchObj = req.body;
  console.log(searchObj.obj);
  const allMentorsSearch = await Mentor.findAll({
    where: {
      price: {
        [Op.gte]: searchObj.valueOn[0],
        [Op.lte]: searchObj.valueOn[1],
      },
      // [Op.or]: [{ call: searchObj.obj?.call === undefined ? 'off' : searchObj.obj?.call, video: searchObj.obj?.video === undefined ? 'off' : searchObj.obj?.video }],
      [Op.or]: {
        call: {
          [Op.or]: ['on', null],
        },
        video: {
          [Op.or]: ['on', null],
        },
      },

    },
  });
  console.log(JSON.parse(JSON.stringify(allMentorsSearch)));
});

module.exports = router;
