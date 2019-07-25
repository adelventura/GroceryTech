var express = require('express');
var router = express.Router();
var moment = require('moment'); // date formatter
var db = require('../db/db');

//CHECKOUT ORDER
router.post('/', function(req, res, next) {
  var token = req.headers['authorization'];
  console.log(req.body);
  var paymentMethod = req.body.paymentMethod;
  var deliveryInstructions = req.body.deliveryInstructions;
  var deliveryTime = req.body.deliveryTime;
  var orderDate = moment().format('YYYY-MM-DD');
  var orderTime = moment().format('hh:mm');
  // new Date()
  //   .toISOString()
  //   .slice(11, 16)
  //   .replace('T', ' ');
  var storeID = req.body.storeId;
  var items = req.body.items;
  var orderID;

  db.query(`SELECT MAX(order_id) FROM Orderr`, function(err, results) {
    if (err) {
      res.sendStatus(501);
      console.log('error in 1st query');
      console.log(err);
      return;
    }

    orderID = Object.values(results[0])[0] + 1;
    console.log(orderID);

    db.query(
      `INSERT INTO Orderr(order_id, delivery_instructions, delivery_time, order_placed_date, order_placed_time) VALUES('${orderID}', '${deliveryInstructions}', '${deliveryTime}', '${orderDate}', '${orderTime}' )`,
      function(err, results) {
        if (err) {
          res.sendStatus(501);
          console.log('error in 2nd query');
          console.log(err);
          return;
        }

        db.query(
          `INSERT INTO orderFrom (store_address_id, order_id)
                VALUES ('${storeID}', '${orderID}')`,
          function(err, results) {
            if (err) {
              res.sendStatus(501);
              console.log('error in 3rd query');
              console.log(err);
              return;
            }

            db.query(
              `INSERT INTO orderedBy (buyer_username, order_id) VALUES ('${token}', '${orderID}')`,
              function(err, results) {
                if (err) {
                  res.sendStatus(501);
                  console.log('error in 4th query');
                  console.log(err);
                  return;
                }

                var data = items
                  .map(item => {
                    return `(${item.id}, ${item.quantity}, ${orderID})`;
                  })
                  .join(', ');

                db.query(
                  `INSERT INTO selectItem (item_id, quantity, order_id) VALUES ${data}`,
                  function(err, results) {
                    if (err) {
                      res.sendStatus(501);
                      console.log('error in 5th query');
                      console.log(err);
                      return;
                    }

                    db.query(
                      `SELECT username FROM Userr WHERE user_type = 'deliverer' ORDER BY RAND() LIMIT 1`,
                      function(err, results) {
                        if (err) {
                          res.sendStatus(501);
                          console.log('error in 6th query');
                          console.log(err);
                          return;
                        }

                        var deliverName = results[0].username;

                        db.query(
                          `INSERT INTO deliveredBy (order_id, deliverer_username, is_delivered, delivery_time, delivery_date) VALUES (${orderID}, '${deliverName}', 0, NULL, NULL)`,
                          function(err, results) {
                            if (err) {
                              res.sendStatus(501);
                              console.log('error in 7th query');
                              console.log(err);
                              return;
                            }
                            res.json({
                              orderID
                            });
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  });
});

// RECEIPT
function formatReceiptResult(results) {
  return results.map(function(receipt) {
    return {
      orderID: receipt.order_id,
      delivererName: receipt.delivererName,
      totalItems: receipt.totalItems,
      orderTime: receipt.order_placed_time,
      deliveryTime: receipt.delivery_time
    };
  });
}

router.get('/receipt/:id', function(req, res, next) {
  var id = req.params.id;
  var token = req.headers['authorization'];
  db.query(
    `SELECT Orderr.order_id, Orderr.delivery_time, Orderr.order_placed_time, deliveredBy.deliverer_username, concat(first_name,' ',last_name) AS delivererName, SUM(selectItem.quantity) AS totalItems
    FROM Orderr JOIN deliveredBy ON (Orderr.order_id = deliveredBy.order_id) JOIN Userr ON (deliveredBy.deliverer_username = Userr.username) JOIN selectItem ON (Orderr.order_id = selectItem.order_id)
    WHERE Orderr.order_id = '${id}'`,
    function(err, results) {
      if (err) {
        res.sendStatus(501);
        console.log('error in 1st query');
        console.log(err);
        return;
      }
      db.query(
        `SELECT default_payment FROM Buyer WHERE username = '${token}'`,
        function(err, payment) {
          if (err) {
            res.sendStatus(501);
            console.log('error in 2nd query');
            console.log(err);
            return;
          }
          res.json({
            orderDetails: formatReceiptResult(results),
            // no payment-order association in db
            paymentMethod: payment
          });
        }
      );
    }
  );
});

module.exports = router;
