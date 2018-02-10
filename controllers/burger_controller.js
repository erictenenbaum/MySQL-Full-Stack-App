var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(results) {
        console.log(results);

        res.render("index", { burgers: results })
    });
});


router.post("/api/burger", function(req, res) {
    console.log(req.body.burger_name);
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(data) {
        res.json({ id: data.insertId });
    });
})


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

router.delete("/api/burger/:id", function(req, res){
	burger.deleteOne(req.params.id, function(result){
		console.log(result);

		res.status(200).end();
	})
})




















module.exports = router;