var express = require('express');
var router = express.Router();

var inventory = require('../mock_data/mock_inventory');
var cart = require('../mock_data/mock_cart');
var orders = require('../mock_data/mock_orders');

var db = require('../db/db');

function formatStoresResult(results) {
  return results.map(function(store) {
    return {
      id: store.store_id,
      name: store.store_name,
      address: `${store.house_number} ${store.street}, ${store.state} ${
        store.zip_code
      }`,
      hours: `${store.opening_time} - ${store.closing_time}`,
      phone: store.phone,
      addressID: store.address_id
    };
  });
}

router.get('/', function(req, res, next) {
  db.query(
    'SELECT * FROM (GroceryStore JOIN Address ON address_id = id)',
    function(_, results) {
      res.json(formatStoresResult(results));
    }
  );
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;

  db.query(
    `SELECT * FROM (GroceryStore JOIN Address ON address_id = id) WHERE store_id = ${id}`,
    function(err, results) {
      if (err) {
        res.sendStatus(501);
        console.log(err);
        return;
      }

      res.json(formatStoresResult(results)[0]);
    }
  );
});

router.get('/:id/search/:category', function(req, res, next) {
  var id = req.params.id;
  var category = req.params.category;

  db.query(
    `SELECT * FROM (Item NATURAL JOIN soldAt) WHERE store_id = ${id} AND food_group = '${category}'`,
    function(err, results) {
      if (err) {
        res.sendStatus(501);
        console.log(err);
        return;
      }

      res.json(formatItemResult(results));
    }
  );
});

function formatItemResult(results) {
  return results.map(function(item) {
    return {
      id: item.item_id,
      type: item.food_group,
      name: item.item_name,
      description: item.description,
      retailPrice: item.listed_price,
      wholesalePrice: item.wholesale_price,
      expiration: item.exp_date,
      quantity: item.quantity
    };
  });
}

router.get('/:id/inventory', function(req, res, next) {
  var token = req.headers['authorization'];

  db.query(
    `SELECT item_name,description,quantity,listed_price,wholesale_price,exp_date
    FROM soldAt NATURAL JOIN Item NATURAL JOIN GroceryStore JOIN manages
    WHERE GroceryStore.address_id = manages.store_address
    AND username = '${token}';`,
    function(err, results) {
      if (err) {
        res.sendStatus(501);
        console.log(err);
        return;
      }

      res.json(formatItemResult(results));
    }
  );
});

router.get('/:id/cart', function(req, res, next) {
  res.json(cart);
});

module.exports = router;
