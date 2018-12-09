// Linking Routes to a series of data sources
var friendsData = require("../data/friends");


// Routing

module.exports = function(app) {
    
    // GET request that displays existing friends data JSON objects
    app.get("/api/friends", function(req, res){
        
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res){
        
        // object to hold the best match friend 
        var matchFriend = {
            name: "",
            photo: "",
            difference: 1000
        };

        // parse survey POST and parse
        var newFriend = req.body;
        
        // array of scores 
        var test = newFriend.scores;

        // the difference of user and database user's score
        var diff = 0;

        for(var i = 0; i < friendsData.length; i++ ) {
            diff = 0;
            // looping all scores of friends in database
            for(var j = 0; j < friendsData[i].scores[j]; j ++){
                
                // difference bet. scores and adding them
                diff += Math.abs(parseInt(test[j]) - parseInt(friendsData[i].scores[j]));

                if(diff <= matchFriend.difference){
                    // reset
                    matchFriend.name = friendsData[i].name;
                    matchFriend.photo = friendsData[i].photo;
                    matchFriend.difference = diff;
                }
            }
        }
        
        // user's POST data will be pushed to the database 
        friendsData.push(newFriend);
        res.json(matchFriend);
    });
};