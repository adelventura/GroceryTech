var express = require('express');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// routers
var storesRouter = require('./src/routes/stores');
var accountRouter = require('./src/routes/account');
var assignmentsRouter = require('./src/routes/assignments');
var buyerRouter = require('./src/routes/buyer');
var managerRouter = require('./src/routes/manager');
var delivererRouter = require('./src/routes/deliverer');
var checkoutRouter = require('./src/routes/checkout');

var app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use(cookieParser());

app.use('/store', storesRouter);
app.use('/account', accountRouter);
app.use('/assignments', assignmentsRouter);
app.use('/buyer', buyerRouter);
app.use('/manager', managerRouter);
app.use('/deliverer', delivererRouter);
app.use('/checkout', checkoutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.sendStatus(404);
});

// error handler
app.use(function(err, req, res, next) {
  res.sendStatus(500);
  console.log(err);
});

module.exports = app;
