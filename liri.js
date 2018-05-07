require("dotenv").config();

var Twitter = require("twitter");
var Spotify = require("node-spotify-api");

var keys = require("./keys");


var request = require("request");
var fs = require("fs");
var spotify = new Spotify(keys.spotify); 

var getArtistNames = function(artist) {
  return artist.name;
};

var getMeSpotify = function(songName){
  if (songName === undefined){
    songName = "What's my age again";
  }

  spotify.search(
    {
      type: "track",
      query: songName
    },
    function(err,data){
      if (err) {
        console.log("Error occured: " + err);
        return;
      }

      var songs = data.tracks.items;

      for (var i = 0; i < songs.length; i++) {
        console.log(i);
        console.log("artist(s): " + songs[i].artists.map(getArtistNames));
        console.log("song name: " + songs[i].name);
        console.log("preview song: " + songs[i].preview_url);
        console.log("album: " + songs[i].album.name);
        console.log("---------------------------------------");
      }
    }
  );
};  


//.  'node  liri.js spotify -this-song '<song name here>' displays: Artist(s), The song's name, a preview link of the song from spotify.
// the album that the song is from. If no song is provided then the program will will default to "The Sign" by Ace of Base.
//======================================================================================
//Make it so liri.js can take in one of the following commands: 

var client = new Twitter(keys.twitter);
var getMytweets = function () {
  var params = {
    screen_name: 'nodejs'
   };
   client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
      for(var i = 0; i < tweets.length; i++) {
      console.log("Tweets: " + JSON.stringify(tweets[i].created_at));
      console.log("Tweets: " + JSON.stringify(tweets[i].text));
  // 1. 'node liri.js my-tweets'(display last 20 tweets and when they were create in the terminal bash) window
    }
   }
  }
   );
  
}

//================

// 'node liri.js movie-this 'movie name here'
//  If the user doesn't type a movie in the program will output data for the movie 'Mr. Nobody.'

// OMDB
var request = require("request");

var pick = function(caseData,functionData){
  switch (caseData){
    case "spotify-this-song":
    getMeSpotify(functionData);
    break;
    
     case"my-tweets":
     getMytweets(functionData);
     break;
    case"movie-this":
    getMeMovie(functionData);
    break;
  
    case"do-what-it-says":
    doWhatItSays(functionData);
    break;
  }
};
var getMeMovie = function(argOne) {
  var queryUrl = "http://www.omdbapi.com/?t=" + argOne + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function (error, response, body) {
  console.log(JSON.parse(body));

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover the data
    console.log("Title: " + JSON.parse(body).Title + "Release Year: " + JSON.parse(body).Year + "IMDB Rating: " + JSON.parse(body).imdbRating + "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "Country where the movie was produced:" +
       JSON.parse(body).Country + "Language: " + JSON.parse(body).language + "Plot: " + JSON.parse(body).plot + "Actor: " + JSON.parse(body).actors
    );
  }
});

  
}

var runThis = function(argOne,argTwo) {
  pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);