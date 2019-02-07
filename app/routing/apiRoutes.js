var friendsData = require("../data/friends.js");



module.exports = function(app) {


    app.get("/api/friends", function(req, res) {

        res.json(friendsData);
    });

    function findBestFriend(user) {
        var userScores = user.scores;



        var maxDiff = 4 * 10;
        var winningFriend;

        for (var i = 0; i < friendsData.length; i++) {
            var friendScores = friendsData[i].scores;
            var totalDiff = 0;

            for (var j = 0; j < friendScores.length; j++) {
                totalDiff = totalDiff + Math.abs(userScores[j] - friendScores[j]);
            }
            if (totalDiff <= maxDiff) {
                winningFriend = friendsData[i];
                maxDiff = totalDiff;
            }
        }
        return winningFriend;
    }


    app.post("/api/friends", function(req, res) {
        var currentUser = req.body;
        var bestFriend = findBestFriend(currentUser);
        res.json(bestFriend);
        friendsData.push(currentUser);
    });
    app.post("/api/clear", function() {
        friendsData = [];

        console.log(friendsData);
    });
};