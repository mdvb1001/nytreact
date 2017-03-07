// var Saved = require("./saved");
var React = require('react');
var Search = require('./search');
var helpers = require('./utils/helpers');
var TopPanel = require('./topPanel');
var SavedPanel = require('./savedPanel');
var axios = require("axios");

var Main = React.createClass({
    getInitialState: function () {
        return {
            searchTerm: "",
            numArticle: 5,
            startYear: "",
            endYear: "",
            topArticles: [],
            savedArticles: []
        }
    },
    handleUserInput: function(object) {
        this.setState(object);
    },
    handleFormSubmit: function () {
        var searchQuery = {
            searchTerm: this.state.searchTerm,
            numArticle: this.state.numArticle,
            startYear: this.state.startYear,
            endYear: this.state.endYear
        }
        helpers.getArticles(searchQuery).then(function(data){
            this.setState({
                topArticles: data,
            })
        }.bind(this));
    },
    handleSearchClear: function () {
        this.setState({
            topArticles: []
        })
    },
    handleArticleSave: function (article) {
        var savedArticles = this.state.savedArticles;
        var newArticle = {
            title: article.headline.main,
            date: article.pub_date,
            url: article.web_url
        };
        axios.post('/api/saved/', newArticle)
            .then(function (response) {
                savedArticles.push(response.data);
                this.setState({
                    savedArticles: savedArticles
                })
            }.bind(this)
            );
    },
    componentDidMount: function() {
        this.getArticlesSaved()
    },
    componentDidUpdate: function() {
        this.getArticlesSaved();
    },
    getArticlesSaved: function () {
        axios.get('/api/saved/')
        .then(function (data) {
            this.setState({ savedArticles: data.data })
        }.bind(this));
    },
    handleArticleDelete: function(articleId) {
        axios.delete('/api/saved/' + articleId, {}).then(function(articleDelete) {
            console.log(articleDelete)
        });
    },

    render: function () {
        return (
            <div>
                <Search numArticle={this.state.numArticle}
                        searchTerm={this.state.searchTerm}
                        startYear={this.state.startYear}
                        endYear={this.state.endYear}
                        onUserInput={function(object){
                            this.handleUserInput(object)
                        }.bind(this)}
                        onFormSubmit={function () {
                            this.handleFormSubmit()
                        }.bind(this)}
                        onClear={function(){
                            this.handleSearchClear()
                        }.bind(this)} />
                <TopPanel topArticles={this.state.topArticles}
                          saveArticle={function(article) {
                            this.handleArticleSave(article)
                        }.bind(this)} />
                <SavedPanel savedArticles={this.state.savedArticles}
                            savedArticleDelete={function(articleId){
                                this.handleArticleDelete(articleId)
                            }.bind(this)}
                            />
            </div>
        );
    }
});

module.exports = Main;