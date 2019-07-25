var express = require('express');
var router = express.Router();

var db = require('../db/db');

function formatAddress(on) {
  return `${on.house_number} ${on.street}, ${on.state} ${on.zip_code}`;
}

router.get('/orders', function(req, res, next) {
  var token = req.headers['authorization'];

  db.query(
    `SELECT store_name, concat(Address.house_number,' ',Address.street,', ',Address.city,', ',Address.state,' ',Address.zip_code) as StoreAddress,deliveredBy.order_id,Orderr.order_placed_date,SUM(selectItem.quantity*listed_price) AS TotalPrice,SUM(selectItem.quantity) AS NumItems,concat(A.house_number,' ',A.street,', ',A.city,', ',A.state,' ',A.zip_code) AS DeliveryAddress
    FROM deliveredBy NATURAL JOIN orderFrom JOIN GroceryStore JOIN manages Join Address JOIN selectItem JOIN Item JOIN orderedBy JOIN Buyer JOIN Address AS A JOIN Orderr
    WHERE store_address_id=store_id AND GroceryStore.address_id = store_address AND GroceryStore.address_id = Address.id AND selectItem.order_id = deliveredBy.order_id AND selectItem.item_id = ITEM.item_id AND orderedBy.order_id=deliveredBy.order_id AND Buyer.username = buyer_username AND buyer.address_id=A.id and Orderr.order_id=deliveredBy.order_id
    AND is_delivered = 0
    AND manages.username = '${token}'
    GROUP BY deliveredBy.order_id, manages.username`,
    function(err, results) {
      if (err) {
        res.sendStatus(501);
        console.log('error in query');
        console.log(err);
        return;
      }
      console.log('completed query');

      res.json(formatOrdersResult(results));
    }
  );
});

function formatOrdersResult(results) {
  return results.map(function(order) {
    return {
      storeName: order.store_name,
      storeAddress: order.StoreAddress,
      orderID: order.order_id,
      orderDate: order.order_placed_date,
      totalPrice: order.TotalPrice,
      totalItems: order.NumItems,
      deliveryAddress: order.DeliveryAddress
    };
  });
}

// REGISTER MANAGER ACCOUNT / MANAGER ACCOUNT INFO
router.post('/register', function(req, res, next) {
  var userType = 'manager';
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  var store = req.body.store;
  var confirmationCode = req.body.confirmationCode;

  db.query(
    `SELECT * FROM SystemInformation WHERE user_codes = ${confirmationCode}`,
    function(err, results) {
      if (results.length == 0) {
        res.sendStatus(401);
        return;
      }

      db.query(
        `INSERT INTO Userr(username, password, user_type, email, first_name, last_name) VALUES ('${username}', '${password}', '${userType}', '${email}', '${firstName}', '${lastName}')`,
        function(err, results) {
          db.query(
            `INSERT INTO manages(username, store_address) VALUES ('${username}', '${store}')`,
            function(err, results) {
              if (err) {
                res.sendStatus(400);
              } else {
                res.sendStatus(200);
              }
            }
          );
        }
      );
    }
  );
});

router.post('/account/update', function(req, res, next) {
  var token = req.body.username;
  var email = req.body.email;
  var storeAddressID = req.body.storeAddressID;

  console.log(JSON.stringify(req.body));
  db.query(
    `UPDATE Userr SET  Userr.email = '${email}' WHERE username = '${token}'`,
    function(err, results) {
      if (err) {
        res.sendStatus(501);
        console.log('error in first query');
        console.log(err);
        return;
      }
      db.query(
        `UPDATE manages SET store_address = '${storeAddressID}' WHERE username = '${token}'`,
        function(err, results) {
          if (err) {
            console.log(err);
            res.sendStatus(400);
            return;
          } else {
            res.sendStatus(200);
          }
        }
      );
    }
  );
});

// MANAGER ACCOUNT INFO
function formatAccountResult(results) {
  return results.map(function(account) {
    return {
      username: account.username,
      firstName: account.first_name,
      lastName: account.last_name,
      email: account.email,
      storeName: account.store_name,
      storeAddress: account.StoreAddress,
      storeAddressID: account.address_id,
      storeID: account.store_id
    };
  });
}

router.get('/account', function(req, res, next) {
  var token = req.headers['authorization'];

  console.log('entering get');
  db.query(
    `SELECT username, email, first_name, last_name, store_name, concat(Address.house_number,' ',Address.street,', ',Address.city,', ',Address.state,' ',Address.zip_code) AS StoreAddress, address_id, store_id FROM Userr NATURAL JOIN manages JOIN Address ON store_address = id JOIN GroceryStore ON store_address = address_id
    WHERE username = '${token}'`,
    function(err, results) {
      if (err) {
        res.sendStatus(501);
        console.log('error in query');
        console.log(err);
        return;
      }
      console.log('completed query');

      res.json(formatAccountResult(results));
    }
  );
});

// REVENUE REPORT
router.get('/store/revenue', function(req, res, next) {
  var token = req.headers['authorization'];

  var query = `SELECT username, store_name, SUM(selectItem.quantity*listed_price) AS Revenue, SUM(selectItem.quantity) AS Total_Items_Sold

  FROM (Userr NATURAL JOIN manages
         JOIN GroceryStore
         JOIN orderFrom
         JOIN selectItem
         JOIN Item
         JOIN Orderr)

  WHERE (Item.item_id = selectItem.item_id)
    AND (selectItem.order_id = orderFrom.order_id)
    AND (store_id = store_address_id)
    AND (store_address = Address_id)
    AND (selectItem.order_id = Orderr.order_id)
    AND (DATEDIFF(CURRENT_DATE,Orderr.order_placed_date)<365)
    AND (DATEDIFF(CURRENT_DATE,Orderr.order_placed_date)>0)
    AND (username = '${token}')

  GROUP BY store_name`;

  db.query(query, function(err, results) {
    if (err) {
      res.sendStatus(400);
    } else {
      var revenue = results[0];
      if (!revenue) {
        res.json({});
        return;
      }

      res.json({
        name: revenue.store_name,
        revenue: revenue.Revenue,
        itemsSold: revenue.Total_Items_Sold
      });
    }
  });
});

// DELETE ACCOUNT
router.post('/account/delete', function(req, res, next) {
  var token = req.headers['authorization'];

  db.query(`DELETE FROM Userr WHERE username = '${token}'`, function(
    err,
    results
  ) {
    if (err) {
      res.sendStatus(501);
      console.log('error in query');
      console.log(err);
      return;
    }
    res.sendStatus(200);
  });
});

module.exports = router;
