var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogsRouter = require('./routes/blogs');
var commentsRouter = require('./routes/comments');
var articlesRouter = require('./routes/articles');
var savedMedicationsRouter = require('./routes/saved_medications');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blogs', blogsRouter);
app.use('/comments', commentsRouter);
app.use('/articles', articlesRouter);
app.use('/saved_medications', savedMedicationsRouter);

module.exports = app;
