//Include 2 routes:
//A GET Route to `/survey` which should display the survey page.
//A default, catch-all route that leads to `home.html` which displays the home page.

//Dependencies
var path = require("path");

//Exporting HTML Routes
module.exports = function (app) {
    //Home Page
    app.get('/..', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    //Survey Page
    app.get('/..', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};