var Article = require('../models/article');

var axios = require('axios');

module.exports = function (app) {
    function runQuery(numArticles, queryURL) {
        // The AJAX function uses the URL and Gets the JSON data associated with it. The data then gets stored in the variable called: "NYTData"
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (NYTData) {
            // Here we are logging the URL so we have access to it for troubleshooting
            console.log("------------------------------------")
            console.log("URL: " + queryURL);
            console.log("------------------------------------")
                // Here we then log the NYTData to console, where it will show up as an object.
            console.log(NYTData);
            console.log("------------------------------------")
                // Loop through and provide the correct number of articles
            for (var i = 0; i < numArticles; i++) {
                // Add to the Article Counter (to make sure we show the right number)
                articleCounter++;
                // Create the HTML Well (Section) and Add the Article content for each
                var wellSection = $("<div>");
                wellSection.addClass('well');
                wellSection.attr('id', 'articleWell-' + articleCounter)
                $('#wellSection').append(wellSection);
                // Confirm that the specific JSON for the article isn't missing any details
                // If the article has a headline include the headline in the HTML
                if (NYTData.response.docs[i].headline != "null") {
                    $("#articleWell-" + articleCounter).append('<h3 class="articleHeadline"><span class="label label-primary">' + articleCounter + '</span><strong>   ' + NYTData.response.docs[i].headline.main + "</strong></h3>");
                    // Log the first article's Headline to console.
                    console.log(NYTData.response.docs[i].headline.main);
                }
                // If the article has a Byline include the headline in the HTML
                if (NYTData.response.docs[i].byline && NYTData.response.docs[i].byline.hasOwnProperty("original")) {
                    $("#articleWell-" + articleCounter).append('<h5>' + NYTData.response.docs[i].byline.original + "</h5>");
                    // Log the first article's Author to console.
                    console.log(NYTData.response.docs[i].byline.original);
                }
                // Then display the remaining fields in the HTML (Section Name, Date, URL)
                $("#articleWell-" + articleCounter).append('<h5>Section: ' + NYTData.response.docs[i].section_name + "</h5>");
                $("#articleWell-" + articleCounter).append('<h5>' + NYTData.response.docs[i].pub_date + "</h5>");
                $("#articleWell-" + articleCounter).append("<a href='" + NYTData.response.docs[i].web_url + "'>" + NYTData.response.docs[i].web_url + "</a>");
                // Log the remaining fields to console as well
                console.log(NYTData.response.docs[i].pub_date);
                console.log(NYTData.response.docs[i].section_name);
                console.log(NYTData.response.docs[i].web_url);
            }
        });
    }
    app.get("/api/articles", function (req, res) {
        // get all of the data from the DB for students
        axios({
            method: 'get',
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=trump",
        }).then(function (response) {
            console.log(response.data); // ex.: { user: 'Your User'}
            console.log(response.status);
        });
    });
    // app.post("/api/student", function (req, res) {
    //     var newStudent = new Student(req.body);
    //     newStudent.create(function (doc, err) {});
    // });
    // let the server take requests
};