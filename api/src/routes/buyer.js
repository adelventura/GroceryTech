var express = require('express');
var router = express.Router();

var db = require('../db/db');

// REGISTER BUYER ACCOUNT
router.post('/register', function(req, res, next) {
  var userType = 'buyer';
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var streetNumber = req.body.streetNumber;
  var street = req.body.street;
  var city = req.body.city;
  var stateUS = req.body.stateUS;
  var zipcode = req.body.zipcode;
  var phone = req.body.phone;
  var paymentName = req.body.defaultPaymentName;
  var accountNumber = req.body.accountNumber;
  var routingNumber = req.body.routingNumber;
  var defaultStoreID = req.body.defaultStoreID;
  var addressID;

  db.query(
    `INSERT INTO Userr(username, password, user_type, email, first_name, last_name) VALUES ('${username}', '${password}', '${userType}', '${email}', '${firstName}', '${lastName}')`,
    function(err, results) {
      if (err) {
        console.log('failing at first query in router');
        console.log(err);
        res.sendStatus(400);
        return;
      }

      var key = '(COUNT(id) + 1)';
      db.query(`SELECT ${key} FROM Address`, function(err, results) {
        if (err) {
          console.log('failing at second query in router');
          console.log(err);
          res.sendStatus(400);
          return;
        } else {
          addressID = results[0][key];
          console.log(addressID);
        }

        db.query(
          `INSERT INTO Address(id, house_number, street, state, city, zip_code) VALUES ('${addressID}', '${streetNumber}', '${street}', '${city}', '${stateUS}', '${zipcode}')`,
          function(err, results) {
            if (err) {
              console.log('failing at third query in router');
              console.log(err);
              res.sendStatus(400);
              return;
            }

            db.query(
              `INSERT INTO Payments(username, payment_name, account_number, routing_number) VALUES ('${username}', '${paymentName}', '${accountNumber}', '${routingNumber}')`,
              function(err, results) {
                if (err) {
                  console.log('failing at fourth query in router');
                  console.log(err);
                  res.sendStatus(400);
                  return;
                }

                db.query(
                  `INSERT INTO Buyer(username, phone, address_id, default_payment, default_store_id) VALUES ('${username}', '${phone}', '${addressID}', '${paymentName}','${defaultStoreID}')`,
                  function(err, results) {
                    if (err) {
                      console.log('failing at fifth query in router');
                      console.log(err);
                      res.sendStatus(400);
                      return;
                    } else {
                      console.log(results);
                      res.sendStatus(200);
                    }
                  }
                );
              }
            );
          }
        );
      });
    }
  );
});

// BUYER ACCOUNT INFO
function formatAccountResult(results) {
  return results.map(function(account) {
    return {
      username: account.username,
      firstName: account.first_name,
      lastName: account.last_name,
      email: account.email,
      phone: account.phone,
      streetNumber: account.house_number,
      street: account.street,
      city: account.city,
      stateUS: account.state,
      zipcode: account.zip_code,
      defaultPaymentName: account.default_payment,
      routingNumber: account.routing_number,
      accountNumber: account.account_number,
      defaultStoreID: account.default_store_id
    };
  });
}

// function formatDefaultStoreResult(results) {
//   return results.map(function(store) {
//     return {
//       defaultStoreName: store.store_name,
//       storeStreetNumber: store.house_number,
//       storeStreet: store.street,
//       storeCity: store.city,
//       storeState: store.state,
//       storeZipcode: store.zip_code
//     };
//   });
// }

router.get('/account', function(req, res, next) {
  var token = req.headers['authorization'];
  console.log(token);
  console.log('entering get');
  db.query(
    `SELECT username, email, first_name, last_name, phone, house_number, street, city, state, zip_code, default_payment, routing_number, account_number,   payment_name, default_store_id FROM Userr NATURAL JOIN Buyer NATURAL JOIN Payments JOIN Address ON Buyer.address_id = Address.id WHERE username = '${token}' AND Buyer.default_payment = Payments.payment_name`,
    function(err, results) {
      if (err) {
        res.sendStatus(501);
        console.log('error in first query');
        console.log(err);
        return;
      }
      console.log('completed first query');
      console.log(JSON.stringify(formatAccountResult(results)));
      res.json(formatAccountResult(results));
    }
  );
});

router.get('/account/update', function(req, res, next) {
  var token = req.headers['authorization'];

  console.log('entering get');
  db.query(
    `SELECT username, email, first_name, last_name, phone, house_number, street, city, state, zip_code, default_payment, routing_number, account_number,   payment_name, default_store_id FROM Userr NATURAL JOIN Buyer NATURAL JOIN Payments JOIN Address ON Buyer.address_id = Address.id WHERE username = '${token}' AND Buyer.default_payment = Payments.payment_name`,
    function(err, results) {
      if (err) {
        res.sendStatus(501);
        console.log('error in second query');
        console.log(err);
        return;
      }
      console.log('completed first query');

      res.json(formatAccountResult(results));
    }
  );
});

module.exports = router;
