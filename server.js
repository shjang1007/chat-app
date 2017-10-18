// Prevent unwanted global variables
"use strict"

// Import dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var session = require('express-session');
var GoogleStrategy = require("passport-google-oauth2").Strategy;
var path = require('path')

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

// Passport to authenticate
passport.use(new GoogleStrategy({
    clientID: "957386202025-lk83nqjg87pblqiv0vkri4n0b638e1s2.apps.googleusercontent.com",
    clientSecret: "KJyKtN1BtBYJy3mfiGbtByD1",
    callbackURL: "http://localhost:4000/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  }
));

// Express and Passport Session
app.use(session({secret: "What Secret?"}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  // placeholder for custom user serialization
  // null is for errors
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  // placeholder for custom user deserialization.
  // maybe you are going to get the user from mongo by id?
  // null is for errors
  done(null, user);
});

// to authenticate google
app.get("/auth/google", passport.authenticate("google",{scope: ["email", "profile"]}));

// google to call this
app.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/" }),
  function(req, res) {
    res.redirect("/homepage");
  }
);

// Logout route?
// app.get('/', function (req, res) {
//   var html = "<ul>\
//     <li><a href='/auth/google'>Google</a></li>\
//     <li><a href='/logout'>logout</a></li>\
//   </ul>";
//
//   // dump the user for debugging
//   if (req.isAuthenticated()) {
//     html += "<p>authenticated as user:</p>"
//     html += "<pre>" + JSON.stringify(req.user, null, 4) + "</pre>";
//   }
//
//   res.send(html);
// });
//
// app.get('/logout', function(req, res){
//   console.log('logging out');
//   req.logout();
//   res.redirect('/');
// });

app.use(express.static(path.resolve(__dirname, "./public")));

// handle API request with /api prefix
app.use("/api", router);

// Show index file all the time?
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});


app.listen(port, function() {
  console.log(`Port ${port} is where we get stuff done!`)
});
