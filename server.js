// Prevent unwanted global variables
"use strict"

// Import dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// connect to MongoDB
mongoose.connect("mongodb://bekgu:Sh1423017@ds161194.mlab.com:61194/bj");

// create App and Router
var app = express();
var router = express.Router();

// set port;
var port = process.env.API_PORT || 4000;

// use body parser to pick out JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Will act as tester to see if our routes are working properly
router.get("/", function(req, res) {
  res.json({ message: "welcome to the world where APIs happen"});
})

// API set to handle requests
app.use("/api", router);



app.listen(port, function() {
  console.log(`Port ${port} is where we get stuff done!`)
});
