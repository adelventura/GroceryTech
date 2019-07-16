var express = require('express');
var router = express.Router();

var paymentMethods = require('../mock_data/mock_payment_methods');
var orderHistory = require('../mock_data/mock_orders');

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
