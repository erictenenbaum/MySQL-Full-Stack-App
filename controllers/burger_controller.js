var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
	burger.selectAll("burgers", function(results){
		console.log(results);

		res.render("index", {burgers: results} )
	})
});




















module.exports = router;

