const express = require('express');
const { Student } = require('../db/models');
const file = require('../middleware/file');

const router = express.Router();
router.post('/', file.single('crop'), async (req, res) => {
  try {
    if (req.file) {
      console.log(req.file);
      console.log(req.file.filename);
      const fileName = req.file.filename;
      await Student.create({ photo: fileName });
      // await Mentor.create({ photo: filePath.substring(7) });

      res.json(req.file);
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
