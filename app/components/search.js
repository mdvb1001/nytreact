var React = require('react');
// var List = require("./list");
// ES ==> ES5
//class Search extends React.component {}
var Search = React.createClass({
    handleChange: function(event) {
        var name = event.target.name;
        var object = {};
        object[name] = event.target.value
        this.props.onUserInput(object);
    },
    handleSubmit: function(event) {
        event.preventDefault();
        this.props.onFormSubmit();
    },
    handleClear: function () {
        this.props.onClear();
    },
    render: function () {
        //JSX
        return (
        <div className="row">
        <div className="col-sm-12">
        <br />

            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
                </div>
                <div className="panel-body">


                    <form role="form" onSubmit={function(event) {
                        this.handleSubmit(event);
                    }.bind(this)}>

                      <div className="form-group">
                        <label htmlFor="search">Search Term:</label>
                        <input type="text" className="form-control" id="searchTerm" name="searchTerm" value={this.props.searchTerm} onChange={function(event){
                            this.handleChange(event);
                        }.bind(this)} />
                      </div>


                      <div className="form-group">
                        <label htmlFor="pwd">Number of Records to Retrieve:</label>
                        <select name="numArticle" className="form-control" id="numArticle" value={this.props.numArticle} onChange={function(event){
                            this.handleChange(event);
                        }.bind(this)}>
                            <option value={1}>1</option>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                        </select>
                      </div>


                      <div className="form-group">
                        <label htmlFor="startYear">Start Year (Optional):</label>
                        <input type="text" className="form-control" id="startYear" name="startYear" value={this.props.startYear} onChange={function(event){
                            this.handleChange(event);
                        }.bind(this)} />
                      </div>


                      <div className="form-group">
                        <label htmlFor="endYear">End Year (Optional):</label>
                        <input type="text" className="form-control" id="endYear" name="endYear" value={this.props.endYear} onChange={function(event){
                            this.handleChange(event);
                        }.bind(this)} />
                      </div>


                      <button type="submit" className="btn btn-default" id="runSearch"><i className="fa fa-search"></i> Search</button>
                      <button type="button" onClick={function(event) {
                        this.handleClear(event);
                    }.bind(this)} className="btn btn-default" id="clearAll"><i className="fa fa-trash"></i> Clear Results</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
        );
    }
});
module.exports = Search;