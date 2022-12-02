const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const multer = require('multer');
const mentorRouter = require('./routes/mentorRouter');
const studentRouter = require('./routes/studentRouter');
const searchRouter = require('./routes/searchRouter');
const file = require('./mentorAuthRoiddleware/fie');
const { Mentor } = require('./db/./routes/mentorAuthRouter');
const studentAuthRouter = require('./routes/studentAuthRoodes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// позволяет получить куку
app.use(cors({
  credentials: true,
  origin: true,
}));

app.use(morgan('dev'));
// app.use(express.static(__dirname));
// app.use(multer({ dest: 'uploads' }).single('filedata'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
  name: 'sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
}));

// app.post('/upload', (req, res, next) => {
//   const filedata = req.file;
//   console.log(filedata);
//   if (!filedata) { res.send('Ошибка при загрузке файла'); } else { res.send('Файл загружен'); }
// });

// app.use('/api/user', userRouter);
// app.use('/api/posts', postsRouter);
app.use('/search', searchRouter);

app.use('/api', mentorRouter);
app.use('/api', studentRouter);
app.use('/signup1', mentorAuthRouter);
app.use('/signup2', studentAuthRouter);
app.post('/cropped', file.single('crop'), async (req, res) => {
  // console.log(req.files);
  // console.log(req.body);
  // res.sendStatus(200);
  try {
    if (req.file) {
      console.log(req.file);
      const filePath = req.file.path;
      await Mentor.create({ photo: filePath.substring(7) });
      res.json(req.file);
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
