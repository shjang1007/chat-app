// prevent unwanted global variables
"use strict"

// import dependencies
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import logger from "morgan";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";
import sassMiddleware from "node-sass-middleware";
import { Strategy } from "passport-google-oauth2";

// import websocket server logic module
import socketServer from "./socket-server";

// connect to MongoDB
const url = "mongodb://bekgu:bekgu@ds161194.mlab.com:61194/bj";

mongoose.connect(url, { useMongoClient: true });

// plugging my own JS native promise library
mongoose.Promise = global.Promise;

// import Routes here
import routes from "./routes";


// create App and Router
const app = express();
const http = require("http").Server(app);
const router = express.Router();

// Start websocket server with http
socketServer.listen(http);

// set port;
const port = process.env.API_PORT || 4000;

// Enable CORS (Would like to read up a bit more on this to learn about CORS)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // X-Requested-With provide securty against CSRF attacks
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Set logger using predefined format
app.use(logger("tiny"));

// use body parser to pick out JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Passport to authenticate
passport.use(new Strategy({
    clientID: "957386202025-lk83nqjg87pblqiv0vkri4n0b638e1s2.apps.googleusercontent.com",
    clientSecret: "KJyKtN1BtBYJy3mfiGbtByD1",
    callbackURL: "http://localhost:4000/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOrCreate(
      { userid: profile.id },
      {
        name: profile.displayName,
        userid: profile.id,
        email: profile.email
      },
      (err, user) => done(err, user));
    }
));

// Express and Passport Session
app.use(session({
  secret: "Secret",
  resave: true,
  saveUninitialized: true
}));
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
    res.redirect("/");
  }
);

app.get("/logout", (req, res) => {
  console.log(req.session);
    req.session.destroy((e) => {
        req.logout();
        res.redirect('/');
    });
});

// handle API request with /api prefix
app.use("/api", routes);


// Will act as tester to see if our routes are working properly
router.get("/", (req, res) => {
  res.json({ message: "welcome to the world where APIs happen"});
});

// Use SASS middleware to transform .scss to .scss
// Also, use prefix to guide css files
app.use(
  sassMiddleware({
    src: path.join(__dirname, "scss/stylesheets"),
    dest: path.join(__dirname + "/public/stylesheets"),
    debug: true,
    outputStyle: "compressed",
    prefix: "/stylesheets"
  })
)

app.use(express.static(path.resolve(__dirname, "../public")));

// Show index file all the time?
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});


app.listen(port, function() {
  console.log(`Port ${port} is where we get stuff done!`)
});
