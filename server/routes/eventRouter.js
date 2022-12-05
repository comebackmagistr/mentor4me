const express = require('express');
const { Event } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      start, end, title, text,
    } = req.body;
    // const aaaa = '09/12/2022';
    // const str = `${start.replace(/(\d+)\/(\d+)\/(\d+)./, '$3-$2-$1T')}.000Z`;
    // console.log(str);
    // console.log('sdfghjkjhgfghgfghjhgfghjhgfdfghjkjhgfghgfghjhgfghjhgfdfghjkjhgfghgfghjhgfghjhgfdfghjkjhgfghgfghjhgfghjhgfdfghjkjhgfghgfghjhgfghjhgfdfghjkjhgfghgfghjhgfghjhgf', start, end);
    const event = await Event.create({
      start,
      end,
      title,
      text,
      user_id: req.session.user.id,
    });
    res.json(event);
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:id', async (req, res) => {
  console.log(req.params);
  try {
    const { id } = req.params;
    await Event.destroy({ where: { id } });
    res.json({});
  } catch (e) {
    console.log(e);
    res.json({});
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text } = req.body;
    await Event.update({ title, text }, { where: { id } });
    const newEvent = await Event.findByPk(id);
    res.json(newEvent);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
