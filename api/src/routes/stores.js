var express = require('express');
var router = express.Router();

var stores = require('../mock_data/mock_stores');
var inventory = require('../mock_data/mock_inventory');
var cart = require('../mock_data/mock_cart');
var orders = require('../mock_data/mock_orders');

router.get('/', function(req, res, next) {
  res.json(stores);
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;

  var store = stores.find(store => {
    return store.id === id;
  });

  res.json(store);
});

router.get('/:id/search/:category', function(req, res, next) {
  // TODO: all stores sharing the same inventory for now ...
  // var id = req.params.id;
  var category = req.params.category;

  const items = inventory.filter(item => {
    return item.item.type.toLowerCase() === category.toLowerCase();
  });

  res.json(items);
});

router.get('/:id/inventory', function(req, res, next) {
  // TODO: all stores sharing the same inventory for now ...
  // var storeID = req.params.id;

  res.json(inventory);
});

router.get('/:id/orders/outstanding', function(req, res, next) {
  // TODO: all stores sharing the same inventory for now ...
  // var storeID = req.params.id;
  var id = req.params.id;

  var outstandingOrders = orders.find(order => {
    return !order.delivered;
  });

  res.json(outstandingOrders);
});

router.get('/:id/cart', function(req, res, next) {
  res.json(cart);
});

module.exports = router;
