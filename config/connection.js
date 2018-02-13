var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.password,
  database: "burgers_db"
});

module.exports = connection;

    