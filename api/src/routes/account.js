var express = require('express');
var router = express.Router();

var paymentMethods = require('../mock_data/mock_payment_methods');
var orderHistory = require('../mock_data/mock_orders');

function formatPaymentResult(results) {
  return results.map(function(paymentMethod) {
    return {
      name: paymentMethod.payment_name,
      accountNumber: paymentMethod.account_number,
      routingNumber: paymentMethod.routing_number
    };
  });
}

router.post('/token', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  res.json({
    token: username,
    type: 'Buyer'
  });
});

router.get('/payment_methods', function(req, res, next) {
  db.query(
    `SELECT payment_name, account_number, routing_number FROM (Payments NATURAL JOIN Buyer) WHERE username = ${id}`,
    // need username and default payment?
    function(err, results) {
      if (err) {
        res.sendStatus(501);
        console.log(err);
        return;
      }

      res.json(formatPaymentResult(results));
    }
  );

  res.json(paymentMethods);
});

router.get('/order_history', function(req, res, next) {
  // var history = orders.find(order => {
  //   return order.buyerID === id;
  // });

  res.json(orderHistory);
});

module.exports = router;
