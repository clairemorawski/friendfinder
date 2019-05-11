//use express and path
//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express
var app = express();
var PORT = process.env.PORT || 3000;

//Access CSS Files
app.use(express.static(path.join(__dirname, './app/public')));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.text());

//Router
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

//Listener app
app.listen(PORT, function () {
    console.log("Friend Finder App is listening on PORT: " + PORT);
});
