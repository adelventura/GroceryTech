var express = require('express');
var router = express.Router();

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
      storeName: orderHistory.store_name,
      orderID: orderHistory.order_id,
      date: orderHistory.order_placed_date,
      totalPrice: orderHistory.TotPrice,
      totalItems: orderHistory.TotQuantity,
      delivered: orderHistory.is_delivered == 1 ? 1 : 0
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

//PAYMENT METHODS
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

  db.query(
    `INSERT INTO Payments(username, payment_name, account_number, routing_number) VALUES ('${token}', '${name}', '${accountNumber}', '${routingNumber}')`,
    function(err, results) {
      if (err) {
        res.sendStatus(400);
        console.log(err);
        return;
      }

      if (isDefault) {
        db.query(
          `UPDATE Buyer SET default_payment = '${name}' WHERE username = '${token}'`,
          function(err, results) {
            console.log('DONE!');
            if (err) {
              res.sendStatus(400);
            } else {
              res.sendStatus(200);
            }
          }
        );
      }
    }
  );
});

router.get('/order_history', function(req, res, next) {
  var token = req.headers['authorization'];

  db.query(
    `SELECT store_name, selectItem.order_id, Orderr.order_placed_date, SUM(selectItem.quantity*listed_price) AS TotPrice,SUM(selectItem.quantity) AS TotQuantity,deliveredBy.is_delivered
    FROM selectItem JOIN Item JOIN Orderr JOIN orderedBy JOIN Buyer JOIN Address JOIN orderFrom JOIN GroceryStore JOIN deliveredBy
    WHERE selectItem.item_id = Item.item_id AND selectItem.order_id = Orderr.order_id AND selectItem.order_id = orderedBy.order_id AND Buyer.username=orderedBy.buyer_username AND Buyer.address_id = Address.id AND orderFrom.order_id = selectItem.order_id AND GroceryStore.store_id=orderFrom.store_address_id AND deliveredBy.order_id = selectItem.order_id AND buyer_username = '${token}'
    GROUP BY selectItem.order_id`,
    function(err, results) {
      if (err) {
        res.sendStatus(501);
        console.log(err);
        return;
      }
      res.json(formatOrderHistoryResult(results));
    }
  );
});

module.exports = router;
