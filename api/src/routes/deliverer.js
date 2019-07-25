var express = require('express');
var router = express.Router();

var db = require('../db/db');

// REGISTER DELIVERER ACCOUNT / DELIVERER ACCOUNT INFO
router.post('/register', function(req, res, next) {
  var userType = 'deliverer';
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
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

// DELIVERER ACCOUNT INFO
function formatAccountResult(results) {
  return results.map(function(account) {
    return {
      username: account.username,
      firstName: account.first_name,
      lastName: account.last_name,
      email: account.email
    };
  });
}

router.get('/account', function(req, res, next) {
  var token = req.headers['authorization'];

  console.log('entering get');
  db.query(
    `SELECT username, email, first_name, last_name FROM Userr WHERE username = '${token}'`,
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

// UPDATE ACCOUNT INFO
router.post('/account/update', function(req, res, next) {
  var token = req.body.username;
  var email = req.body.email;
  console.log('entering get -- username: ' + token + ' email: ' + email);
  db.query(
    `UPDATE Userr SET Userr.email = '${email}' WHERE username = '${token}'`,
    function(err, results) {
      if (err) {
        res.sendStatus(501);
        console.log('error in query');
        console.log(err);
        return;
      }
    }
  );
});

module.exports = router;
