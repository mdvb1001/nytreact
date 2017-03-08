var React = require('react');
var SavedArticle = React.createClass({
    handleThisDelete: function(event, articleId) {
        event.preventDefault();
        this.props.onArticleDelete(articleId);
    },
    render: function () {
        return (
            <div>
            {
                <div className="well" id={ 'articleWell-' + this.props.savedArticles._id }>
                    <div className="row">
                      <div className="col-xs-9">
                        {this.props.savedArticles.title}
                            <br />
                        {this.props.savedArticles.url}
                            <br />
                        {this.props.savedArticles.date}
                      </div>
                      <div className="col-sm-3">
                          <form id={this.props.savedArticles._id} >
                          <button type="click" form={this.props.savedArticles._id}
                                  onClick={ function(event) {
                                      this.handleThisDelete(event, this.props.savedArticles._id)
                                  }.bind(this) }
                                  className="btn btn-danger btn pull-right">
                              Delete
                          </button>
                          </form>
                        </div>
                    </div>
                </div>
            }
            </div>
        );
    }
});
module.exports = SavedArticle;