// var Saved = require("./saved");
var React = require('react');
var Search = require('./search');
var helpers = require('./utils/helpers');
var TopPanel = require('./topPanel');

var Main = React.createClass({
    getInitialState: function () {
        return {
            searchTerm: "",
            numArticle: 5,
            startYear: "",
            endYear: "",
            topArticles: []
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
    handleArticleSave: function () {
        ///route...
            console.log("hello");
        this.setState({
        })
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
                          saveArticle={function() {
                            this.handleArticleSave()
                        }.bind(this)} />
            </div>
        );
    }
});

module.exports = Main;