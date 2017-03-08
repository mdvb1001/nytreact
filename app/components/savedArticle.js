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
                      <div className="col-xs-10">
                         <h4><a target="_blank" href={this.props.savedArticles.url}>{this.props.savedArticles.title}</a></h4>
                            <br />
                         {this.props.savedArticles.url}
                            <br />
                            <br />
                         {this.props.savedArticles.date}
                      </div>
                      <div className="col-xs-2">
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