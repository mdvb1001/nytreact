var React = require('react');
var SavedArticle = React.createClass({
    handleOnClickSave: function(event, article) {
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
                      <div className="col-xs-3">
                          <button type='submit' href='#' form={ 'hidden-form-' + this.props.savedArticles._id }
                                className='btn btn-primary pull-right'>Delete</button>
                          <form id={ 'hidden-form-' + this.props.savedArticles._id }
                              className='hidden-xs-up'
                              onSubmit={function(event) {
                                this.handleOnClickSave(event, this.props.savedArticles);
                              }.bind(this)}>
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