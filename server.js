// Prevent unwanted global variables
"use strict"

// Import dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");

// connect to MongoDB
var url = "mongodb://bekgu:bekgu@ds161194.mlab.com:61194/bj";

mongoose.connect(url, {
  useMongoClient: true
});

// Plugging my own JS native promise library
mongoose.Promise = global.Promise;

// Import Schema
var Dummy = require("./models/dummy");

// Create Dummy models
// var newDummy = Dummy({
//   name: "B"
// });
//
// newDummy.save((err) => {
//   if(err) throw err;
//
//   console.log("Dummy Created");
// });

// Dummy.find({}, (err, dummies) => {
//   if(err) throw err;
//
//   console.log(dummies);
// })

// Dummy.find({}, (err, dummies) => {
//   dummies.forEach((dummy) => {
//     dummy.remove((err) => {
//       if(err) throw err;
//
//       console.log("deleted");
//     })
//   })
// })

// create App and Router
var app = express();
var router = express.Router();

// set port;
var port = process.env.API_PORT || 4000;

// use body parser to pick out JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware to handle requests
// Prior to express v4, things did not run in the order it was wrote
router.use(function(req, res, next) {
  // testing for now
  // possible validation point?
  console.log("Transfering @ middleware station");
  next(); // this is the key to middleware
});


// Will act as tester to see if our routes are working properly
router.get("/", function(req, res) {
  res.json({ message: "welcome to the world where APIs happen"});
});

// can to router.get but router.route allows you to tag request types on an on
router.route("/dummies").post(
  (req, res) => {
    var dummy = new Dummy();
    dummy.name = req.body.name;

    dummy.save((err) => {
      if(err) res.send(err)

      res.json({ message: "Dummy model created"});
    })
  }
);

// Logout route?
app.get('/', function (req, res) {
  var html = "<ul>\
    <li><a href='/auth/github'>GitHub</a></li>\
    <li><a href='/logout'>logout</a></li>\
  </ul>";

  res.send(html);
});

app.get('/logout', function(req, res){
  console.log('logging out');
  req.logout();
  res.redirect('/');
});

// handle API request with /api prefix
app.use("/api", router);


app.listen(port, function() {
  console.log(`Port ${port} is where we get stuff done!`)
});
