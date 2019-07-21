var express = require('express');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// routers
var storesRouter = require('./src/routes/stores');
var accountRouter = require('./src/routes/account');
var assignmentRouter = require('./src/routes/assignment');

// db
var connection = require('./src/db/db');

var app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use(cookieParser());

app.use('/store', storesRouter);
app.use('/account', accountRouter);
app.use('/assignments', assignmentRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.sendStatus(404);
});

// error handler
app.use(function(err, req, res, next) {
  res.sendStatus(500);
});

module.exports = app;
