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

// REGISTER ACCOUNT / ACCOUNT INFO
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

module.exports = router;
