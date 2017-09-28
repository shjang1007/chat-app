// Prevent unwanted global variables
"use strict"

// Import dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

// create App and Router
var app = express();
var router = express.Router();

// set port;
var port = process.env.API_PORT || 3000;

// use body parser to pick out JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get("/", function(req, res) {
  res.json({ message: "GETTING STUFF DONE!"});
})

app.use("/api", router);



app.listen(port, function() {
  console.log(`Successfully running on ${port}`)
});
