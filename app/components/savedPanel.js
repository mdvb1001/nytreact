var React = require('react');
var SavedArticle = require('./savedArticle');
var SavedPanel = React.createClass({
    render: function () {
        return (
            <div>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i>Saved Articles</strong></h3>
                    </div>
                    <div className="panel-body">
            {
                this.props.savedArticles.map(function(savedArticles){
                    console.log(this.props.savedArticles);
                    return (
                        <SavedArticle savedArticles={savedArticles}
                        />
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