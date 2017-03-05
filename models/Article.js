var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.models = {};
mongoose.modelSchemas = {};
var articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    }
});
var Article = mongoose.model('Article', articleSchema);
module.exports = Article;