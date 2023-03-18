const express = require('express');
const path = require('path');
const logger = require('morgan');
const db = require('./db');
const cookieSession = require('cookie-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const blogsRouter = require('./routes/blogs');
const commentsRouter = require('./routes/comments');
const articlesRouter = require('./routes/articles');
const savedMedicationsRouter = require('./routes/saved_medications');

const app = express();

app.set("view engine", "ejs");

app.use(cookieSession({
  name: 'session',
  keys: ['key1'],
}));

app.set("trust proxy", 1);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter(db));
app.use('/blogs', blogsRouter(db));
app.use('/comments', commentsRouter(db));
app.use('/articles', articlesRouter(db));
app.use('/saved_medications', savedMedicationsRouter(db));

app.post("/user/add", async (req, res) => {
  try {
    const queryString = `SELECT * FROM users WHERE email = $1 AND password = $2`
    const queryParams = [req.body.email, req.body.password]

    db.query(queryString, queryParams)
      .then((result) => {
        if (result.rows.length > 0) {
          req.session.name = result.rows[0].name
          res.send({ message: true });
        } else {
          res.send({ message: false });
        }
      });

  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});

app.post("/user/remove", async (req, res) => {
  try {
    req.session = null;
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});

app.get("/user", (req, res) => {
  res.send({ message: (req.session) ? req.session.name : null });
});

module.exports = app;