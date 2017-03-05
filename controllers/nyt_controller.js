var Article = require('../models/article');

var axios = require('axios');

module.exports = function (app) {

    app.get("/api/saved", function (req, res) {
        // get all of the data from the DB for articles
    });

    app.post("/api/saved", function (req, res) {

    });

    app.delete("/api/saved", function (req, res) {

    });
};