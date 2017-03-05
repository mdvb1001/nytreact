// will be used by REACT on the FRONT END
var axios = require("axios");
var helper = {
    getArticles: function (searchQuery) {
        // ajax request (promised based!!!)
        var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=" + searchQuery.searchTerm;
        if (searchQuery.startYear) {
            queryUrl = queryUrl + '&begin_date=' + searchQuery.startYear + '0101';
        }
        if (searchQuery.endYear) {
            queryUrl = queryUrl + '&end_date' + searchQuery.endYear + '0101';
        }
        return  axios({
            method: 'get',
            url:  queryUrl,
        }).then(function (response) {
            console.log(response.data);
            return response.data;
        });
    },
    updateArticles: function () {}
};

module.exports = helper;