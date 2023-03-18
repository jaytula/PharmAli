const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./db');
const session = require("express-session");
const cors = require("cors");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const blogsRouter = require('./routes/blogs');
const commentsRouter = require('./routes/comments');
const articlesRouter = require('./routes/articles');
const savedMedicationsRouter = require('./routes/saved_medications');

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.set("trust proxy", 1);

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "sessions",
    cookie: {
      maxAge: 1000 * 60 * 60,
      sameSite: "none",
      // httpOnly: false,
      secure: true,
    },
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter(db));
app.use('/blogs', blogsRouter(db));
app.use('/comments', commentsRouter(db));
app.use('/articles', articlesRouter(db));
app.use('/saved_medications', savedMedicationsRouter(db));

app.post("/add", async (req, res) => {
  try {
    req.session.name = req.body.name;
    res.send({ message: "saved" }).status(201);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});

app.get("/remove", async (req, res) => {
  try {
    req.session = null;
    res.send({ message: req.session.name });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});

module.exports = app;