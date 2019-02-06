//dependencies
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
//express config:
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({extended: true}))
app.use(express.json());
//router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
//Listener
app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
});