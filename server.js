// Prevent unwanted global variables
"use strict"

// Import dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// connect to MongoDB
mongoose.connect("mongodb://bekgu:bekgu@ds161194.mlab.com:61194/bj", {
  useMongoClient: true
});

// Import Schema
var Dummy = require("./models/dummy");
var User = require("./models/user");

// create App and Router
var app = express();
var router = express.Router();

// set port;
var port = process.env.API_PORT || 4000;

// use body parser to pick out JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware to handle requests
router.use(function(req, res, next) {
  // testing for now
  console.log("I am inside my middleware yoohoo")
  next(); // this is the key to middleware
});


// Will act as tester to see if our routes are working properly
router.get("/", function(req, res) {
  res.json({ message: "welcome to the world where APIs happen"});
})

// API set to handle requests
app.use("/api", router);



app.listen(port, function() {
  console.log(`Port ${port} is where we get stuff done!`)
});
