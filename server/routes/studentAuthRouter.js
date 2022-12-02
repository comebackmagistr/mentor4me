const express = require('express');
const bcrypt = require('bcrypt');
const { Student } = require('../db/models');

const router = express.Router();

router.post('/', async (req, res) => {
  console.log(req.body, 'reqbody');
  const {
    firstName, lastName, email, zoom, phone, password,
  } = req.body;
  if (firstName && lastName && email && zoom && phone && password) {
    try {
      const [user, created] = await Student.findOrCreate({
        where: {
          firstName, lastName, email, zoom, phone,
        },
        defaults: { password: await bcrypt.hash(password, 10) },
      });

      if (created) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

module.exports = router;
