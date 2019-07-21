var express = require('express');
var router = express.Router();

var orderHistory = require('../mock_data/mock_orders');
var db = require('../db/db');

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

  db.query(
    `SELECT username, password, user_type FROM Userr WHERE username = '${username}'`,
    function(err, results) {
      if (err) {
        res.sendStatus(503);
        console.log(err);
        return;
      }

      var user = results[0];
      if (user && user.password == password) {
        res.json({
          token: username,
          type: user.user_type
        });
      } else {
        res.sendStatus(404);
      }
    }
  );
});

router.get('/payment_methods', function(req, res, next) {
  var token = req.headers['authorization'];

  db.query(
    `SELECT payment_name, account_number, routing_number FROM (Payments NATURAL JOIN Buyer) WHERE username = '${token}'`,
    function(err, results) {
      if (err) {
        res.sendStatus(501);
        console.log(err);
        return;
      }

      res.json(formatPaymentResult(results));
    }
  );
});

router.get('/order_history', function(req, res, next) {
  // var history = orders.find(order => {
  //   return order.buyerID === id;
  // });

  res.json(orderHistory);
});

module.exports = router;
