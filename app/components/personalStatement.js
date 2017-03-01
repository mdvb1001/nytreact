var React = require("react");
var PersonalStatement = React.createClass({
    render: function () {
        return (
            <div>
            Hello my name is {this.props.name}, and I believe in equality!
            </div>
            );
    }
});
module.exports = PersonalStatement;