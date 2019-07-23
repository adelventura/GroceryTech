var express = require('express');
var router = express.Router();

var db = require('../db/db');

function formatAddress(on) {
  return `${on.house_number} ${on.street}, ${on.state} ${on.zip_code}`;
}

router.get('/orders', function(req, res, next) {
  var username = 'colorlessabbey';

  db.query(
    `SELECT * FROM ((manages JOIN Address ON store_address = id) JOIN GroceryStore ON id = address_id) WHERE username = '${username}'`,
    function(err, results) {
      var managedStore = results[0];
      var fromAddress = formatAddress(managedStore);

      // How to get the orders for the store??
      // db.query(
      //   `SELECT * FROM orderFrom WHERE store_address_id = ${
      //     managedStore.address_id
      //   }`,
      //   function(err, results) {
      //     console.log(results);
      //   }
      // );
    }
  );
});

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

router.post('/account', function(req, res, next) {
  var userType = 'manager';
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  var store = req.body.store;

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

      res.json({
        name: revenue.store_name,
        revenue: revenue.Revenue,
        itemsSold: revenue.Total_Items_Sold
      });
    }
  });
});

module.exports = router;
