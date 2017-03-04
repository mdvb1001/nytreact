var React = require('react');
var TopPanel = React.createClass({
    render: function () {
        return (
            <div>

            {
                this.props.topArticles.map(function(article){
                    return <div>{article.headline.main}</div>
                }.bind(this))
            }
            </div>
        );
    }
});

module.exports = TopPanel;
