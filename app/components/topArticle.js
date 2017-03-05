var React = require('react');
var TopArticle = React.createClass({
    handleOnClickSave: function() {
        this.props.saveThisArticle();
    }
    ,
    render: function () {
        return (
            <div>
            {
                <div className="well">
                    <div className="row">
                      <div className="col-xs-9">
                        {this.props.article.headline.main}
                            <br />
                        {this.props.article.web_url}
                            <br />
                        {this.props.article.pub_date}
                      </div>
                      <div className="col-xs-3">
                        <button type="button" onClick={function() {
                            this.handleOnClickSave();
                        }.bind(this)} className="btn btn-success pull-right" id="save">Save</button>
                      </div>
                    </div>
                </div>
            }
            </div>
        );
    }
});
module.exports = TopArticle;