var express = require("express");
var bodyParser = require("body-parser");
require("dotenv").config();

var app = express();
var port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("./public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var burger = require("./models/burger.js");

// burger.selectAll("burgers", res => console.log(res));

// burger.selectAll("plans", function(res){
// 	console.log(res);
// });

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");

app.use(routes);



app.listen(port, function() {
  console.log("listening on port", port);
});

