var express = require("express");
var bodyParser = require("body-parser");
require("dotenv").config();

var app = express();
var port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var orm = require("./config/orm.js");

orm.selectAll("SELECT * FROM ", "plans", function(res){
	console.log("This is res id: ", res[0].id);
});


app.listen(port, function() {
  console.log("listening on port", port);
});

