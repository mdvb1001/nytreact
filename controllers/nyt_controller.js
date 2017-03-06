var Article = require('../models/article');
var axios = require('axios');

module.exports = function (app) {

    app.get('/api/saved/:id', function (req, res) {
        // get all of the data from the DB for articles
    });

    app.post('/api/saved/', function (req, res) {
        var article = req.body;
        console.log("super: " + article);
        Article.create(article, function(err, article) {
            if (err) {
                res.send(err);
            } else {
                res.send(article);
            }
        });
    });

    app.delete('/api/saved/delete', function (req, res) {

    });
};