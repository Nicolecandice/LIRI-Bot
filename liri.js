import { twitter } from "./keys";

require("dotenv").config();

var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);

//Make it so liri.js can take in one of the following commands:
// *'my-tweets'
// *'spotify-this-song'
// *'movie-this'

//========================================================================

// var Spotify = require('node-spotify-api');
// var spotify = new Spotify({
//   id: <your spotify client id>,
//   secret: <your spotify client secret>
// });
 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });

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

