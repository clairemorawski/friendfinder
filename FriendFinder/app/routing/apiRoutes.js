//Contain 2 routes:
//A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//Dependencies
var path = require("path");
//Import Friend Data
var friends = require("../data/friends");

//Export API Routes
module.exports = function (app) {
    //Get Route
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //Post Route: Add new friend entry
    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);
        var user = req.body;
        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        //Set variables to compare data
        var bestFriendIndex = 0;
        var minimumDifference = 50;

        //Compare user and friend's score with a zero difference. 
        //Depending on difference, add to the total difference.
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }
            //New Minimum
            if (totalDifference < minimumDifference) {
                bestFriendIndex = i;
                minimumDifference = totalDifference;
            }
        }

        //Add match (user) to friend array
        friends.push(user);

        //Send best friend match to browser
        res.json(friends[bestFriendIndex]);
    });
};
