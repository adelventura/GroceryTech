var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'GroceryTech'
});

connection.connect(function(err) {
  console.log(err);
});

module.exports = connection;
