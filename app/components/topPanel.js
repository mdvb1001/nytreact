var React = require('react');
var TopArticle = require('./topArticle');
var TopPanel = React.createClass({
    handleSave: function () {
        this.props.saveArticle();
    },
    render: function () {
        return (
            <div>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i>Search Result</strong></h3>
                    </div>
                    <div className="panel-body">
                        <form role="form">
            {
                this.props.topArticles.map(function(article){
                    return (
                            <TopArticle article={article}
                                        saveThisArticle={function() {
                                            this.handleSave()
                                  }.bind(this)} />
                                    )
                                }.bind(this))
            }
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TopPanel;
