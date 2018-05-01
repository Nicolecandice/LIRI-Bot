// import { twitter } from "./keys";

require("dotenv").config();

// var spotify = new spotify(keys.spotify);
// var client = new twitter(keys.twitter);

//Make it so liri.js can take in one of the following commands: 
 //this.my-tweets = my-tweet;
// this.spotify-this-song = spotify-this-song;
// this.movie-this = movie-this;

//========================================================================

var Spotify = require('node-spotify-api')
// var spotify = new Spotify(
//     { 
//         id: ("your spotify client id") 
//         {
//  secret: ("your spotify client secret")
    
// });
//  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {   if (err) {
//  return console.log('Error occurred: ' + err);
//   }
//   console.log(data); 
//  });

//=======================================

// Each command should do

//1. 'node liri.js my-tweets'(display last 20 tweets and when they were create in the terminal bash) window
//2.  'node  liri.js spotify -this-song '<song name here>' displays: Artist(s), The song's name, a preview link of the song from spotify.
// the album that the song is from. If no song is provided then the program will will default to "The Sign" by Ace of Base.

// 'node liri.js movie-this 'movie name here'
// This will output the following info to your terminal/bash window:
//Title of the movie
// Year the movie came out
// IMDB rating of the movie.
// Rotten tomatoes Rating of the movie.
// Country where the movie wa produced.
// Language of the movie
// Plot of the movie
// Actors in the movie

//  If the user doesn't type a movie in the program will output data for the movie 'Mr. Nobody.'
//=================================================



// OMDB
var request = require("request");

// Grab the movieName which will always be the third node argument.
var movieName = "Lion King";

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {
console.log(JSON.parse(body));
  // If the request is successful
  if (!error && response.statusCode === 200) {
    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Title: " + JSON.parse(body).Title + "Release Year: " + JSON.parse(body).Year + "IMDB Rating: " + JSON.parse(body).imdbRating + "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "Country where the movie was produced:" + 
+ JSON.parse(body).Country +"Language: "  + JSON.parse(body).language + "Plot: "  + JSON.parse(body).plot + "Actor: " + JSON.parse(body).actors
);
}
})
