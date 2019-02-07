var friendsData = require("../data/friends.js");



module.exports = function(app) {


    app.get("/api/friends", function(req, res) {

        res.json(friendsData);
    });

    function findBFF(user) {
        var userScores = user.scores;



        var max = 4 * 10;
        var bestie;

        for (var i = 0; i < friendsData.length; i++) {
            var friendScores = friendsData[i].scores;
            var total = 0;

            for (var j = 0; j < friendScores.length; j++) {
                total = total + Math.abs(userScores[j] - friendScores[j]);
            }
            if (total <= max) {
                bestie = friendsData[i];
                max = total;
            }
        }
        return bestie;
    }


    app.post("/api/friends", function(req, res) {
        var currentUser = req.body;
        var BFF = findBFF(currentUser);
        res.json(BFF);
        friendsData.push(currentUser);
    });
    app.post("/api/clear", function() {
        friendsData = [];

        console.log(friendsData);
    });
};