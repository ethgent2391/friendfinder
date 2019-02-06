//call data from friends.js
var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    function bestMatch(user){
        var scoresinput = user.scores;
        var max = 4 * 10;
        var bestfriend;
        for (i = 0; i < friends.length; i++){
            var scores = friends[i].scores;
            var diff = 0
            for (l = 0; l< scores.lngth; l++){
                diff = diff + Math.abs(scoresinput[l] - scores[l]);
            }

            if (diff <= max){
                bestfriend = friends[i];
                max = diff;
            }
        }
        return bestfriend;
    }

    app. post("/api/friends", function(req, res) {
        var currentuser = req.body;
        var match = bestmatch(currentuser);
        res.json(bestfriend);
        friends.push(currentuser);
    });
    app.post("api/clear", function(){
        friends = [];
        console.log(freinds);
    });

};