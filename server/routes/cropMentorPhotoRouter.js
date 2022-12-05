const express = require('express');
const { Mentor } = require('../db/models');
const file = require('../middleware/file');

const router = express.Router();

router.post('/', file.single('crop'), async (req, res) => {
  try {
    if (req.file) {
      const id = Number(req.file.filename.slice(-5, -4));
      console.log(id);
      const fileName = req.file.filename;
      await Mentor.update(
        { photo: fileName },
        { where: { id } },
      );
      // await Mentor.create({ photo: filePath.substring(7) });

      res.json(req.file);
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
