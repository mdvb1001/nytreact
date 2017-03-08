var Article = require('../models/Article.js');
var axios = require('axios');
module.exports = function (app) {

    app.get('/api/saved/', function (req, res) {
        // get all of the data from the DB for articles
        Article.find({}, function (articles, err) {
            if (err) {
                res.send(err);
            } else {
                res.send(articles);
            }
        });
    });
    app.post('/api/saved/', function (req, res) {
        var article = req.body;
        console.log("super: " + article);
        Article.create(article, function (err, article) {
            if (err) {
                res.send(err);
            } else {
                res.send(article);
            }
        });
    });
    app.delete('/api/saved/:id', function (req, res) {
        var articleId = req.params.id;
        Article.remove({
            _id: articleId
        }, function (error, articleDelete) {
            if (error) {
                res.send(error);
            } else {
                res.send(articleDelete);
            }
        });
    });
};