// will be used by REACT on the FRONT END
var axios = require("axios");
var helper = {
    getStudents: function () {
        // ajax request (promised based!!!)
        return axios.get("/api/articles");
    },
    updateStudents: function () {}
};

module.exports = helper;