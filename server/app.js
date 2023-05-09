// Inital settings
const express = require('express');
const path = require('path');
const logger = require('morgan');
const db = require('./db');
const { createProxyMiddleware } = require('http-proxy-middleware');

var cookieParser = require('cookie-parser')

// Set up the router
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');
const blogsRouter = require('./routes/blogs');
const commentsRouter = require('./routes/comments');
const articlesRouter = require('./routes/articles');
const journalRouter = require('./routes/journal');
const drugsRouter = require('./routes/drugs');
const savedMedicationsRouter = require('./routes/saved_medications');
const categoriesRouter = require('./routes/categories');

// Initialize app/server settings
const app = express();

module.exports = function application(actions = { updateComment: () => { }, updateBlog: () => { } }) {
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

  // Connect router with routes
  app.get('/info', (req, res) => {
    res.json({val: process.env.NODE_ENV || 'blank'});
  })
  app.use('/user', usersRouter(db, cookieParams));
  app.use('/blogs', blogsRouter(db, actions.updateBlog));
  app.use('/comments', commentsRouter(db, actions.updateComment));
  app.use('/articles', articlesRouter(db));
  app.use('/journal', journalRouter(db));
  app.use('/drugs', drugsRouter(db));
  app.use('/favourite', savedMedicationsRouter(db));
  app.use('/categories', categoriesRouter(db));
  if(process.env.NODE_ENV==='development') {
    app.use(createProxyMiddleware({ target: 'http://localhost:3000' }));
  } else {
    app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));
  }

  app.close = function() {
    // return db.end();
  };

  return app;
}