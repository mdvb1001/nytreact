var React = require('react');
var TopArticle = require('./topArticle');
var TopPanel = React.createClass({
    render: function () {
        return (
            <div>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i>Search Result</strong></h3>
                    </div>
                    <div className="panel-body">
            {
                this.props.topArticles.map(function(article){
                    return (
                        <TopArticle article={article}
                                    key={ article._id }
                                    saveThisArticle={function(article) {
                                        this.props.saveArticle(article)
                                    }.bind(this)} />
                    )
                }.bind(this))
            }
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TopPanel;