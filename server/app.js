var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require("./db");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogsRouter = require('./routes/blogs');
var commentsRouter = require('./routes/comments');
var articlesRouter = require('./routes/articles');
var savedMedicationsRouter = require('./routes/saved_medications');

const fs = require("fs");

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8"
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

var app = express();
app.set("view engine", "ejs");

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

Promise.all([
  read(path.resolve(__dirname, `db/schema/create.sql`)),
  read(path.resolve(__dirname, `db/seeds/seeds.sql`)),
])
  .then(([create, seed]) => {
    app.get("/api/debug/reset", (request, response) => {
      db.query(create)
        .then(() => {
          console.log('------------------------------------------------------------------------------------------------')
          console.log('HERE')
          console.log('------------------------------------------------------------------------------------------------')
          return db.query(seed)
        })
        .then(() => {
          console.log("Database Reset");
          response.status(200).send("Database Reset");
        });
    });
  })
  .catch(error => {
    console.log(`Error setting up the reset route: ${error}`);
  });

module.exports = app;
