var express = require('express');
var router = express.Router();

var orderHistory = require('../mock_data/mock_orders');
var db = require('../db/db');

function formatPaymentResult(results) {
  return results.map(function(paymentMethod) {
    return {
      name: paymentMethod.payment_name,
      accountNumber: paymentMethod.account_number,
      routingNumber: paymentMethod.routing_number,
      default:
        paymentMethod.payment_name == paymentMethod.default_payment
          ? true
          : false
    };
  });
}

function formatOrderHistoryResult(results) {
  return results.map(function(orderHistory) {
    return {
      storeName: 'missing',
      orderID: orderHistory.order_id,
      date: orderHistory.date,
      totalPrice: 'missing',
      totalItems: 'missing',
      delivered: 'missing'
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
    `SELECT payment_name, account_number, routing_number, default_payment FROM (Payments p JOIN Buyer b on p.username = b.username) WHERE b.username = '${token}'`,
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

router.post('/payment_methods', function(req, res, next) {
  var token = req.headers['authorization'];
  var name = req.body.name;
  var accountNumber = req.body.accountNumber;
  var routingNumber = req.body.routingNumber;
  var isDefault = req.body.isDefault;

  // db.query(``, function(err, results) {
  //   if (err) {
  //     res.sendStatus(400);
  //   } else {
  //     res.sendStatus(200);
  //   }
  // });
});

router.get('/order_history', function(req, res, next) {
  var token = req.headers['authorization'];

  db.query(
    `SELECT y.order_id, o.date FROM orderedBy y JOIN Buyer b ON y.buyer_username = b.username
    JOIN Orderr o ON  o.order_id = y.order_id
    WHERE buyer_username = '${token}'`,
    function(err, results) {
      if (err) {
        res.sendStatus(501);
        console.log(err);
        return;
      }

      // db.query(
      // `SELECT * FROM (Payments p JOIN Buyer b on p.username = b.username) WHERE b.username ='${token}'AND p.payment_name = b.default_payment`,
      // function(err, user) {
      //   if (err) {
      //     res.sendStatus(501);
      //     console.log(err);
      //     return;
      //   }

      res.json(formatOrderHistoryResult(results));
    }
  );
});

module.exports = router;

//   db.query(
//     `SELECT * FROM (Payments p JOIN Buyer b on p.username = b.username) WHERE b.username ='${token}'AND p.payment_name = b.default_payment`,
//     function(err, user) {
//       if (err) {
//         res.sendStatus(501);
//         console.log(err);
//         return;
//       }

//       res.json({
//         payments: formatPaymentResult(results),
//         default: user[0].default_payment
//       });
//     }
// }
