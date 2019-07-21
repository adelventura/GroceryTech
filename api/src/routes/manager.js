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

module.exports = router;
