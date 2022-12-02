const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const mentorRouter = require('./routes/mentorRouter');
const studentRouter = require('./routes/studentRouter');
const searchRouter = require('./routes/searchRouter');
// const file = require('./middleware/file');
// const { Mentor } = require('./db/models');
const mentorAuthRouter = require('./routes/cropMentorPhotoRouter');
const studentAuthRouter = require('./routes/studentAuthRouter');
const cropMentorPhotoRouter = require('./routes/mentorAuthRouter');
const cropStudentPhotoRouter = require('./routes/cropStudentPhotoRouter');

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

app.use('/search', searchRouter);

app.use('/api', mentorRouter);
app.use('/api', studentRouter);
app.use('/signup1', mentorAuthRouter);
app.use('/signup2', studentAuthRouter);
app.use('/cropped/mentor', cropMentorPhotoRouter);
app.use('/cropped/student', cropStudentPhotoRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
