// Dependencies:
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require("body-parser");
// Initialize express
var app = express();
// Snatches HTML from URLs
var request = require('request');
var Article = require("./models/Article.js");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// link to routes
require("./controllers/nyt_controller.js")(app);

// Not sure if we need this or not. I think Mark said webpack is handling this now.
app.use(express.static(__dirname + '/public'));

var PORT = process.env.PORT || 7777;

//  mongodb://localhost/nytreact
// connect to mongoose

var db;
// mongoose.connect("mongodb://heroku_sd1rpjsp:vpnc8i7dg712lntvs03niaa9q1@ds123050.mlab.com:23050/heroku_sd1rpjsp", function (err) {
//     if (err) {
//         console.log("Connection Failed!", err);
//     } else {
//         console.log("Connection Successful!");
//         db = mongoose.connection("");
//         init();
//     }
// });

mongoose.connect("mongodb://heroku_sd1rpjsp:vpnc8i7dg712lntvs03niaa9q1@ds123050.mlab.com:23050/heroku_sd1rpjsp");

db = mongoose.connection;

// function init() {
    mongoose.Promise = Promise;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('MONGOOSE is working');
        // we're connected!
    });
    // we need to explicitly tell express to send anyone who goes to / route to open index.html
    app.get("/", function(req, res) {
        res.sendFile(__dirname + "index.html");
    });

    app.listen(PORT, function() {
        console.log("App listening on PORT: " + PORT);
    });
// }