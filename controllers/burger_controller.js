// Require dependencies

var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Get Request - calls our select all function from orm.js

router.get("/", function(req, res) {
    burger.selectAll(function(results) {
        console.log(results);

        res.render("index", { burgers: results })
    });
});

// Post request uses our insertOne function from orm.js
router.post("/api/burger", function(req, res) {
    console.log(req.body.burger_name);
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(data) {
        res.json({ id: data.insertId });
    });
})

// Put request to update the burger from fresh to devoured
router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(
    {
    	devoured: 1
    },
    condition,
    function(result){
    	if(result.changedRows === 0) {
    		return res.status(404).end();
    	}
    	res.status(200).end();
    });
});

// Delete request that uses a delete function from orm.js
router.delete("/api/burger/:id", function(req, res){
	burger.deleteOne(req.params.id, function(result){
		console.log(result);

		res.status(200).end();
	});
});


module.exports = router;