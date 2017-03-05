// var Saved = require("./saved");
var React = require('react');
var Search = require('./search');
var helpers = require('./utils/helpers');
var TopPanel = require('./topPanel');
var TopArticl = require('./topArticle');
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
            startYear: this.state.startYear,
            endYear: this.state.endYear
        }
        helpers.getArticles(searchQuery).then(function(data){
            this.setState({
                topArticles: data.response.docs
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
            title: article.title,
            link: article.link,
            pub_date: article.date,
        };
        console.log(newArticle);
        axios.post('/api/saved/', newArticle)
            .then(function (response) {
                savedArticles.push(response.data);
                this.setState({
                    savedArticles: savedArticles
                })
            }.bind(this)
            );
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
            </div>
        );
    }
});

module.exports = Main;