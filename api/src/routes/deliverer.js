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

module.exports = router;
