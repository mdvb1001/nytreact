var React = require("react");
var ReactDOM = require("react-dom");
var Roster = require("./components/roster");

var where = document.getElementById("app");
ReactDOM.render(
    <div>
        <Roster />
    </div>
    , where);