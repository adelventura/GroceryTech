var express = require('express');
var router = express.Router();

var db = require('../db/db');

// REGISTER BUYER ACCOUNT / BUYER ACCOUNT INFO
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

module.exports = router;
