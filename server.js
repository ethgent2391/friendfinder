//dependencies
var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var path = require("path");
//express config:
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(bodyparser.json({ type: "application/vnd.api+json"}));
app.use(bodyparser.text());
//router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlroutes")(app);
//Listener
app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
});