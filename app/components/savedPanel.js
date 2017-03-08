var React = require('react');
var SavedArticle = require('./savedArticle');
var SavedPanel = React.createClass({
    handleOneArticleDelete: function(articleId) {
        this.props.savedArticleDelete(articleId);
    },
    render: function () {
        return (
            <div>
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i>Saved Articles</strong></h3>
                    </div>
                    <div className="panel-body">
            {
                this.props.savedArticles.map(function(savedArticles){
                    return (
                        <SavedArticle savedArticles={savedArticles}
                                      key={ savedArticles._id }
                                      onArticleDelete={ function(articleId) {
                                        this.handleOneArticleDelete(articleId)
                                      }.bind(this)}/>
                    )
                }.bind(this))
            }
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = SavedPanel;