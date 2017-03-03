var Article = require('../models/article');

module.exports = function(app) {

app.get("/all", function(req, res) {
    Business.find(function(err, businesses) {
        if (err) return console.error(err);
        res.json(businesses);
    });
});

};