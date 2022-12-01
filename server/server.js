const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const mentorRouter = require('./routes/mentorRouter');
const studentRouter = require('./routes/studentRouter');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// позволяет получить куку
app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

// app.use('/api/user', userRouter);
// app.use('/api/posts', postsRouter);

app.use('/api', mentorRouter);
app.use('/api', studentRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
