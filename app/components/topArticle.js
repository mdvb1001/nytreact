var React = require('react');
var TopArticle = React.createClass({
    handleOnClickSave: function(event, article) {
        event.preventDefault();
        this.props.saveThisArticle(article);
    },
    render: function () {
        return (
            <div>
            {
                <div className="well" id={ 'articleWell-' + this.props.article._id }>
                    <div className="row">
                      <div className="col-xs-9">
                        {this.props.article.headline.main}
                            <br />
                        {this.props.article.web_url}
                            <br />
                        {this.props.article.pub_date}
                      </div>
                      <div className="col-xs-3">
                          <button type='submit' form={ this.props.article._id }
                                className='btn btn-primary btn-lg pull-right'>Save</button>
                          <form id={ this.props.article._id }
                              className='hidden-xs-up'
                              onSubmit={function(event) {
                                this.handleOnClickSave(event, this.props.article);
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
module.exports = TopArticle;