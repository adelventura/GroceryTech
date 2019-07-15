var express = require('express');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// routers
var storesRouter = require('./src/routes/stores');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(cookieParser());

app.use('/store', storesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.sendStatus(404);
});

// error handler
app.use(function(err, req, res, next) {
  res.sendStatus(500);
});

module.exports = app;
