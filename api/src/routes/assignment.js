var express = require('express');
var router = express.Router();

var assignments = require('../mock_data/mock_assignments').ASSIGNMENTS;

router.get('/', function(req, res, next) {
  res.json(assignments);
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;

  var assignment = assignments.find(assignment => {
    return assignment.orderID === id;
  });
  res.json(assignment);
});

module.exports = router;
