var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.password,
  database: "day_planner_db"
});


  console.log("hi");


// function databaseConnect() 



// module.exports = function (queryString) {
// 	// connection.connect(function(err) {
//  //        if (err) {
//  //            console.error("error connecting: " + err.stack);
//  //            return;
//  //        }

//  //        console.log("connected as id " + connection.threadId);
//  //    })

//  connection.query(queryString, function(error, results, fields){
// 	if (error) throw error;
// 	return results;
// })

//  	// console.log("hello");
// }


// module.exports = connection.query(queryString, callbackFunction)

module.exports = connection;

    