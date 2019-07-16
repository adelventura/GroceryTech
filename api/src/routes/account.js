var express = require('express');
var router = express.Router();
var uuid = require('uuid');

var paymentMethods = require('../mock_data/mock_payment_methods');
var orderHistory = require('../mock_data/mock_orders');
var users = require('../mock_data/mock_users').USERS;
var tokens = require('../mock_data/mock_users').TOKENS;

router.post('token', function(req, res, next) {
  var body = req.body.json();
  var username = body.username;
  var password = body.password;

  var user = users.find(user => {
    return username == user.username && password == user.password;
  });

  if (!user) {
    res.status(404);
    return;
  }

  var token = uuidv1();
  res.json({
    token
  });
});

router.get('/payment_methods', function(req, res, next) {
  res.json(paymentMethods);
});

router.get('/order_history', function(req, res, next) {
  // var history = orders.find(order => {
  //   return order.buyerID === id;
  // });

  res.json(orderHistory);
});

module.exports = router;
