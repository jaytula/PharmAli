const express = require('express');
const path = require('path');
const logger = require('morgan');
const db = require('./db');
var cookieParser = require('cookie-parser')
const bcrypt = require("bcryptjs");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const blogsRouter = require('./routes/blogs');
const commentsRouter = require('./routes/comments');
const articlesRouter = require('./routes/articles');
const savedMedicationsRouter = require('./routes/saved_medications');

const app = express();

const secretKey = 'foobarbaz12345';
app.use(cookieParser(secretKey));
const cookieParams = {
  httpOnly: true,
  signed: true,
};

app.set("view engine", "ejs");
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

app.post("/user/add", (req, res) => {
  let queryString = '';
  const queryParams = [req.body.email];

  if (req.body.name) {
    queryString += 'INSERT INTO users (name, email, password, postal_code) VALUES ($1, $2, $3, $4) RETURNING name'
    queryParams.unshift(req.body.name);
    queryParams.push(bcrypt.hashSync(req.body.password, 10), req.body.postal_code);
  } else {
    queryString += `SELECT * FROM users WHERE email = $1`
  }

  db.query(queryString, queryParams)
    .then((result) => {
      let message;
      const { name, email, password, postal_code } = result.rows[0];

      if (!req.body.name && result.rows.length > 0) {
        if (bcrypt.compareSync(req.body.password, password)) {
          res.cookie('name', name, cookieParams)
          message = { name, email, postal_code };
        } else {
          message = 'Incorrect password';
        }
      } else if (req.body.name) {
        res.cookie('name', name, cookieParams);
      } else {
        message = 'Account does not exist';
      }
      res.send({ message });
    })
    .catch((err) => {
      res.send({ message: err.detail });
    })
});

app.post("/user/remove", (req, res) => {
  res.clearCookie('name');
  res.end();
});

app.get("/user", (req, res) => {
  const message = req.signedCookies.name
  res.send({ message });
});

module.exports = app;