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

function formatStoreResult(results) {
  return results.map(function(store) {
    return {
      storeName: store.store_name,
      storeAddress: store.storeAddress,
      storeAddressID: store.address_id,
      storeID: store.store_id
    };
  });
}

router.get('/account', function(req, res, next) {
  var token = req.headers['authorization'];
  db.query(
    `SELECT username, email, first_name, last_name, phone, house_number, street, city, state, zip_code, default_payment, routing_number, account_number,   payment_name, default_store_id FROM Userr NATURAL JOIN Buyer NATURAL JOIN Payments JOIN Address ON Buyer.address_id = Address.id WHERE username = '${token}' AND Buyer.default_payment = Payments.payment_name`,
    function(err, results) {
      if (err) {
        res.sendStatus(501);
        console.log('error in first query');
        console.log(err);
        return;
      }
      db.query(
        `SELECT store_name, concat(Address.house_number,' ',Address.street,', ',Address.city,', ',Address.state,' ',Address.zip_code) AS storeAddress, GroceryStore.address_id, GroceryStore.store_id FROM GroceryStore JOIN Address ON address_id = id JOIN Buyer ON default_store_id = store_id  WHERE username = '${token}'`,
        function(err, store) {
          if (err) {
            res.sendStatus(501);
            console.log('error in first query');
            console.log(err);
            return;
          }
          res.json({
            account: formatAccountResult(results),
            store: formatStoreResult(store)
          });
        }
      );
    }
  );
});

// UPDATE ACCOUNT INFO
router.post('/account/update', function(req, res, next) {
  var token = req.body.username;
  var phone = req.body.phone;
  var email = req.body.email;
  var streetNumber = req.body.streetNumber;
  var street = req.body.street;
  var city = req.body.city;
  var stateUS = req.body.stateUS;
  var zipcode = req.body.zipcode;
  var paymentName = req.body.defaultPaymentName;
  var accountNumber = req.body.accountNumber;
  var routingNumber = req.body.routingNumber;
  var defaultStoreID = req.body.defaultStoreID;

  console.log(
    'entering get -- username: ' + token + ' paymentName: ' + paymentName
  );

  db.query(
    `SELECT payment_name, account_number, routing_number FROM Payments WHERE username = '${token}'`,
    function(err, results) {
      if (err) {
        res.sendStatus(501);
        console.log('error in 1st query');
        console.log(err);
        return;
      }

      var finishQuery = () => {
        db.query(
          `SELECT address_id FROM Buyer WHERE username = '${token}'`,
          function(err, addressID) {
            if (err) {
              res.sendStatus(501);
              console.log('error in 2nd query');
              console.log(err);
              return;
            }
            var buyerAddressID = Object.values(addressID[0])[0];
            console.log('buyer address id: ' + buyerAddressID);

            db.query(
              `UPDATE Address SET Address.house_number = '${streetNumber}', Address.street = '${street}',
              Address.city = '${city}',
              Address.state = '${stateUS}',
              Address.zip_code = '${zipcode}' WHERE Address.id = '${buyerAddressID}'`,
              function(err, results) {
                if (err) {
                  res.sendStatus(501);
                  console.log('error in 3rd query');
                  console.log(err);
                  return;
                }

                db.query(
                  `UPDATE Userr SET Userr.email = '${email}' WHERE username='${token}'`,
                  function(err, results) {
                    if (err) {
                      res.sendStatus(501);
                      console.log('error in 4th query');
                      console.log(err);
                      return;
                    }

                    db.query(
                      `UPDATE Buyer SET Buyer.phone = '${phone}',Buyer.default_store_id = '${defaultStoreID}',Buyer.default_payment = '${paymentName}' WHERE username = '${token}'`,
                      function(err, results) {
                        if (err) {
                          res.sendStatus(501);
                          console.log('error in 5th query');
                          console.log(err);
                          return;
                        } else {
                          console.log('completed final query');
                          res.sendStatus(200);
                        }
                      }
                    );
                  }
                );
              }
            );
          }
        );
      };

      var match = Object.values(results).filter(method => {
        console.log(`${method.payment_name} == ${paymentName}`);
        return method.payment_name == paymentName;
      });

      if (match.length > 0) {
        db.query(
          `UPDATE Payments SET Payments.account_number = '${accountNumber}', Payments.routing_number = '${routingNumber}' WHERE payment_name = '${paymentName}' AND username = '${token}'`,
          function(err, results) {
            if (err) {
              res.sendStatus(501);
              console.log('error in 1st query');
              console.log(err);
              return;
            }

            finishQuery();
          }
        );
      } else {
        db.query(
          `INSERT INTO Payments(username, payment_name, account_number, routing_number) VALUES ('${token}', '${paymentName}', '${accountNumber}', '${routingNumber}')`,
          function(err, results) {
            if (err) {
              res.sendStatus(501);
              console.log('error in 1st query');
              console.log(err);
              return;
            }

            finishQuery();
          }
        );
      }
    }
  );
});

// DELETE ACCOUNT
router.post('/account/delete', function(req, res, next) {
  var token = req.headers['authorization'];

  console.log('username to delete: ' + token);

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
