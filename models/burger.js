var orm = require("../config/orm.js");



// orm.selectAll("plans", function(res){
// 	console.log("This is res id: ", res[0].id);
// });

// orm.insertOne("plans", "plan", "napping", function(res){
// 	if(res.affectedRows === 1) {
// 		console.log("success!");
// 	}
// });

// orm.updateOne("plans", "plan", "buger wednesday", "3", function(res){
// 	console.log(res);
// })


// This model works, follow this for the rest

exports.selectAll = function(tableInput, cb) {
	orm.selectAll(tableInput, cb);
};

exports.insertOne = function(tableInput, cols, vals, cb){
	orm.insertOne(tableInput, cols, vals, cb);
};

exports.updateOne = function (tableInput, objColVals, condition, cb){
	orm.updateOne(tableInput, objColVals, condition, cb);
};







// function(table, callback) {
//     var selectArray = [];
   
//     connection.query("SELECT * FROM " + table + ";", function(error, results, fields) {
//         if (error) throw error;


//         for(let i = 0; i < results.length; i++) {
//             let dataObject = {
//              id: results[i].id,
//              plan: results[i].plan
//             }

//             selectArray.push(dataObject);
            
//         }
           
  

//         // selectArray.push(dataObject);

//         callback(selectArray);
//     });
// };








// *****************************************************************************************8

// Look at the paramerters that need to be past in an create a function to export that has the same params

// **********************************************************************************

// exports.insertOne = function(table, column, value, callback) {
//     connection.query("INSERT INTO " + table + "(" + column + ")" + " VALUES (?)", [value], function(error, results, fields) {
//         if (error) throw error;

//         callback(results);

//     });
// };

// exports.updateOne = function(table, column, newValue, id, callback) {
//     connection.query("UPDATE " + table + " SET " + column + " =? WHERE id=?", [newValue, id], function(error, results, fields){
//         if(error) throw error;

//         callback(results);
//     });
// };