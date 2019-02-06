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
app.use(express.static(pth.join(__dirname + '/app/public')));
//router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
//Listener
app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
});