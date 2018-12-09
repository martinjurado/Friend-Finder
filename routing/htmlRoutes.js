// Dependencies

var path = require("path");

// Routes

module.exports = function (app) {
    // html get requests
    
    app.get("/survey",function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // default page
    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};