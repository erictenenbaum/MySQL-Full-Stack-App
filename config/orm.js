var connection = require("./connection.js");


exports.selectAll = function(queryString, table, callback) {
    var selectArray = [];

    connection.query(queryString + table + ";", function(error, results, fields) {
        if (error) throw error;


        var dataObject = {
            id: results[0].id,
            plan: results[0].plan
        }

        selectArray.push(dataObject);

        callback(selectArray);
    });
};

exports.insertOne = function(queryString, table, callback) {
	connection.query(queryString + table + ";", function(error, results, fields){

	});
}