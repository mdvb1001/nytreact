// Dependencies:
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require("body-parser");
// Initialize express
var app = express();
// Snatches HTML from URLs
var request = require('request');
var Article = require("../models/Article.js");
// link to routes
require("../controllers/nyt_controller.js")(app);

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));


// Not sure if we need this or not. I think Mark said webpack is handling this now.
app.use(express.static(__dirname + '/public/index.html'));

var PORT = process.env.PORT || 7777;
mongoose.connect('mongodb://localhost/nytreact');
mongoose.Promise = Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('MONGOOSE is working');
    // we're connected!
});
// Make a request call to grab the HTML body from the site of your choice
// First, tell the console what server.js is doing
console.log("\n***********************************\n" + "Grabbing every article\n" + "from the NYT's website:" + "\n***********************************\n");



app.listen(PORT, function() {
    console.log("App running on port 7777!");
});