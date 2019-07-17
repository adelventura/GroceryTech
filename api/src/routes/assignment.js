var express = require('express');
var router = express.Router();

var assignments = require('../mock_data/mock_assignments').ASSIGNMENTS;
//var assignment = require('../mock_data/mock_assignments').ITEMS;

router.get('/', function(req, res, next) {
  res.json(assignments);
});

router.get('/:id', function(req, res, next) {
  console.log('inside get function');
  var id = req.params.id;

  var assignment = assignments.find(assignment => {
    return assignment.orderID === id;
  });
  console.log(JSON.stringify(assignment));
  res.json(assignment);
});

module.exports = router;
