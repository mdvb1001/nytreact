var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.models = {};
mongoose.modelSchemas = {};
var articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    date:{
        type: Date
    },
    url: {
        type: String,
        required: true
    }
});
var Article = mongoose.model('Article', articleSchema);
module.exports = Article;