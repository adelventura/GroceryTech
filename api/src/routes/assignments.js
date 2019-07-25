var express = require('express');
var router = express.Router();

var db = require('../db/db');

// ASSIGNMENTS LISTING

function formatAssignmentsResult(results) {
  return results.map(function(assignment) {
    return {
      storeName: assignment.store_name,
      orderID: assignment.order_id,
      date: assignment.order_placed_date,
      timeOrderMade: assignment.order_placed_time,
      timeDelivered: assignment.delivery_time,
      totalPrice: assignment.TotalPrice,
      totalItems: assignment.NumItems
    };
  });
}

router.get('/', function(req, res, next) {
  var token = req.headers['authorization'];

  db.query(
    `SELECT store_name,deliveredBy.order_id, Orderr.order_placed_date, Orderr.order_placed_time, Orderr.delivery_time, SUM(selectItem.quantity*listed_price) AS TotalPrice,SUM(selectItem.quantity) AS NumItems FROM deliveredBy NATURAL JOIN orderFrom JOIN GroceryStore JOIN manages JOIN Address JOIN selectItem JOIN Item JOIN orderedBy JOIN Buyer JOIN Address AS A JOIN Orderr WHERE store_address_id=store_id AND GroceryStore.address_id = store_address AND GroceryStore.address_id = Address.id AND selectItem.order_id = deliveredBy.order_id AND selectItem.item_id = ITEM.item_id AND orderedBy.order_id=deliveredBy.order_id AND Buyer.username = buyer_username AND buyer.address_id=A.id AND Orderr.order_id=deliveredBy.order_id
    AND is_delivered = 0 AND deliverer_username = '${token}' GROUP BY deliveredBy.order_id`,
    function(err, results) {
      if (err) {
        res.sendStatus(501);
        console.log('failed in query');
        console.log(err);
        return;
      }
      console.log('exited query ');

      res.json(formatAssignmentsResult(results));
    }
  );
});

function formatAssignmentDetailResult(results) {
  return results.map(function(assignment) {
    return {
      orderPlacedTime: assignment.order_placed_time,
      deliveryTime: assignment.delivery_time,
      status: assignment.IsDelivered,
      buyerAddress: assignment.BuyAddress,
      storeName: assignment.store_name,
      itemName: assignment.item_name,
      itemQuantity: assignment.quantity
    };
  });
}

router.get('/:id', function(req, res, next) {
  console.log('entered get');
  var token = req.headers['authorization'];
  var orderID = req.params.id;
  console.log('order: ' + orderID);
  console.log('token retrieved' + token);

  db.query(
    `SELECT Orderr.order_placed_time, Orderr.delivery_time, deliveredBy.is_delivered AS IsDelivered, concat(Address.house_number,' ',Address.street,', ',Address.city,', ',Address.state,' ',Address.zip_code) AS BuyAddress, store_name, item.item_name,selectItem.quantity FROM selectItem JOIN Item JOIN Orderr JOIN orderedBy JOIN Buyer JOIN Address JOIN orderFrom JOIN GroceryStore JOIN deliveredBy WHERE selectItem.item_id = Item.item_id AND selectItem.order_id = Orderr.order_id AND selectItem.order_id = orderedBy.order_id AND Buyer.username=orderedBy.buyer_username AND Buyer.address_id = Address.id AND orderFrom.order_id = selectItem.order_id AND GroceryStore.store_id=orderFrom.store_address_id AND deliveredBy.order_id = selectItem.order_id AND selectItem.order_id = '${orderID}'`,
    function(err, results) {
      if (err) {
        res.sendStatus(501);
        console.log('failed in query');
        console.log(err);
        return;
      }
      console.log('exited query ');
      console.log(JSON.stringify(formatAssignmentDetailResult(results)));

      res.json(formatAssignmentDetailResult(results));
    }
  );
});

router.post('/:id', function(req, res, next) {
  console.log('entered get');
  var token = req.headers['authorization'];
  var orderID = req.params.id;
  var status = req.body.status;
  console.log('order: ' + orderID);
  console.log('token retrieved: ' + token);
  console.log('status: ' + status);

  db.query(
    `UPDATE deliveredBy SET deliveredBy.is_delivered = 1 WHERE deliveredBy.order_id = '${orderID}'`,
    function(err, results) {
      if (err) {
        res.sendStatus(501);
        console.log('failed in query');
        console.log(err);
        return;
      }
      res.sendStatus(200);
    }
  );
});

module.exports = router;
