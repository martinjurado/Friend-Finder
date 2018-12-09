// dependencies to use for our app
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Tells node that this app will run express server
var app = express();

// port to deploy in Heroku
var PORT = process.env.PORT || 8080;

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Sets up Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// ROUTER
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Listen
app.listen(PORT, function(){
    console.log("App listening on http://localhost:" + PORT);
});