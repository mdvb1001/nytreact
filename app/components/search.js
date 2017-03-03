var React = require('react');
// var List = require("./list");
// ES ==> ES5
//class Search extends React.component {}
var Search = React.createClass({
    getInitialState() {
        return {
            articles: []
        };
    },
    handleClick: function(event) {
        helper.getStudents().then(function (response) {
            // do something
            this.setState({
                articles: response.data
            });
        }.bind(this));
    },
    render: function () {
        //JSX

        console.log(this.props);

        return (
        <div className="row">
        <div className="col-sm-12">
        <br />

            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
                </div>
                <div className="panel-body">


                    <form role="form">


                      <div className="form-group">
                        <label for="search">Search Term:</label>
                        <input type="text" className="form-control" id="searchTerm" />
                      </div>


                      <div className="form-group">
                        <label for="pwd">Number of Records to Retrieve:</label>
                        <select className="form-control" id="numRecordsSelect">
                            <option value={1}>1</option>
                            <option value={5} selected>5</option>
                            <option value={10}>10</option>
                        </select>
                      </div>


                      <div className="form-group">
                        <label for="startYear">Start Year (Optional):</label>
                        <input type="text" className="form-control" id="startYear" />
                      </div>


                      <div className="form-group">
                        <label for="endYear">End Year (Optional):</label>
                        <input type="text" className="form-control" id="endYear" />
                      </div>


                      <button type="submit" onClick={this.handleClick.bind(this)} className="btn btn-default" id="runSearch"><i className="fa fa-search"></i> Search</button>
                      <button type="button" onClick={this.getInitialState.bind(this)}className="btn btn-default" id="clearAll"><i className="fa fa-trash"></i> Clear Results</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
        );
    }
});
module.exports = Search;