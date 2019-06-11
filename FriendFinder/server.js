//use express and path
//Dependencies
var express = require('express');
var bodyParser = require('bosy-parser');

//Express
var app = express();
var PORT = process.env.PORT || 3000;

//Access CSS Files
app.use(express.static('app/public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Router
require(path.join('./app/routing/apiRoutes'))(app);
require(path.join('./app/routing/htmlRoutes'))(app);

//Listener app
app.listen(PORT, function () {
    console.log('Friend Finder App is listening on PORT: ' + PORT);

    // //Listener for Materialize's "Select" element:
    // document.addEventListener('DOMContentLoaded', function () {
    //     var elems = document.querySelectorAll('select');
    //     var instances = M.FormSelect.init(elems, options);
    // });
});

