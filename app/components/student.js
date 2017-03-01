var React = require('react');
var PersonalStatement = require("./personalStatement");
// ES ==> ES5
//class Student extends React.component {}
var Student = React.createClass({
    getInitialState() {
        return {
            counter: 0
        };
    },
    handleClick: function(event) {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    render: function () {
        //JSX

        var myStyle = {border: "1px solid red"}
        console.log(this.props);

        return (
                <div style={
                    myStyle
                }>
                I am a student {this.props.name} | {this.props.age} | {this.props.grade}
                <button onClick={this.handleClick.bind(this)}> Click For Counter {this.state.counter}</button>
                <hr />
                <PersonalStatement name={this.props.name} />
                }
                </div>
        );
    }
});
module.exports = Student;