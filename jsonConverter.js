var express = require('express');
var router = express.Router();


router.get('/:str',function(req,res,next){

function name_split(names){

    var tokens = names.split('<');
    //console.log(tokens);
    var first = "";
    var middle = "";
    var last = "";
    
    if(tokens.length>=4){
    	if(tokens[1].length>1){
           first = tokens[1].slice(0,-1);
    	}
    	if(tokens[2].length>1){
    	   middle= tokens[2].slice(0,-1);	
    	}
    	if(tokens[3].length>1){
    		last= tokens[3].slice(0,-1);
    	}
    }
    
    var namePayLoad = {
    	"first":first,
    	"middle":middle,
    	"last":last
    };

    return (namePayLoad);
}


function loc_split(loc){
    
    var tokens = loc.split('<');
    
    var name = "";
    var long = "";
    var lat = "";
    
    if(tokens.length>=4){
    	if(tokens[1].length>1){
           name= tokens[1].slice(0,-1);
    	}
    	if(tokens[3].length>1){
    	   long= tokens[3].slice(0,-1);	
    	}
    	if(tokens[4].length>1){
    		lat= tokens[4].slice(0,-2);
    	}
    }

    //console.log(name+long+""+lat);    
    
    var locPayLoad = {
    	"name":name,
    	"long":long,
    	"lat":lat
    };

    return (locPayLoad);

}

function follower_split(followers){
     var tokens = followers.split('@@|');
     //console.log(tokens);
     var followers = [];
    var count =0;
     tokens.forEach(function(follower){
         
         
         var tokenFollower = follower.split('|');
        
         if(count==0){
         	tokenFollower.shift();
         	count++;
         }
         if(tokenFollower){

         	id = tokenFollower[0];
         	name = name_split(tokenFollower[1]);
         	location = loc_split(tokenFollower[2]);
         }
        
         followers.push({
         		"id":id,
         		"name":name,
         		"location":location
         	});
     });

     return (followers);
}

var queryString = req.params.str;


var queryTokens = queryString.split('**');

var profile = queryTokens[0];
var followers = queryTokens[1];

var profileTokens = profile.split('|');

var id = profileTokens[1];

var username = name_split(profileTokens[2]);

var userlocation = loc_split(profileTokens[3]);

var imageId= profileTokens[4];


var followers = follower_split(followers);

var payLoad = {
        "id":id,
        "name": username,
        "location":userlocation,
        "imageId":imageId,
        "followers": followers
};


res.send(payLoad);

});



module.exports = router;