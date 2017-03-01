var Student = require("./student");
var React = require('react');

var Roster = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Student Roster</h1>
                <hr />
                <Student friends={["joe", "dee", "Alan"]} name="Brock Strongo" age="14" grade="8"/>
                <Student name="Lance Uppercut" age="16" grade="10"/>
                <Student name="Brock Strongo" age="15" grade="9"/>
            </div>
        );
    }
});

module.exports = Roster;