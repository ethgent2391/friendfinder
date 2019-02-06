//Depend
var path = require("path");
//Routing
module.exports = function(app) {
    //GET requests:
    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(--__dirname, "../public/survey.html"));
    });
    //if no match
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    };
