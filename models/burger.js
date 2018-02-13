var orm = require("../config/orm.js");


// CRUD functions that leverage our custom ORM (orm.js)
// Pass in burgers at the table we are using in this model
module.exports = {
    selectAll: function(cb) {
        orm.selectAll("burgers", cb);
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, cb);
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, cb);
    },
    deleteOne: function(id, cb) {
    	orm.deleteOne("burgers", id, cb);
    }
}







