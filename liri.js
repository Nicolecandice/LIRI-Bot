 import { twitter } from "./keys";

 require("dotenv").config();

 var spotify = new spotify(keys.spotify);
 var client = new twitter(keys.twitter);

 //Make it so liri.js can take in one of the following commands: 

 var Twitter = require('twitter');

 var client = new Twitter({
   consumer_key: '',
   consumer_secret: '',
   access_token_key: '',
   access_token_secret: ''
 });

 var params = {
   screen_name: 'nodejs'
 };
 client.get('statuses/user_timeline', params, function (error, tweets, response) {
   if (!error) {
     console.log("Tweets: " + JSON.parse(body));
     // 1. 'node liri.js my-tweets'(display last 20 tweets and when they were create in the terminal bash) window

     //========================================================================


     var spotify = require('spotify')
     var Spotify = require('node-spotify-api')
     var spotify = new Spotify({
         id: ("your spotify client id")
       }
     )}

     secret: ("your spotify client secret") 

   }); spotify.search({
     type: 'track',
     query: 'song name here',
     artist: 'artist(s)',
     link: 'preview link',
     album: ' album',
     limit: 20
   })
  
   function (err, data) {
     if (err) {

       return console.log('Error occurred: ' + err);
     }
    
     console.log("Track:" + JSON.parse(body).Track + "Song Name: " + JSON.parse(body). Twitter + "Artist(s): " + JSON.parse(body).Artist(s) + "link:"+ JSON.parse(body).Link + "Album:" + JSON.parse(body).Album + "Limit" + JSON.parse(body).Limit);
    if (song < 20);
    console.log("The Sign by Ace of Base: " + JSON.parse(body)) 
    
 });
 //2.  'node  liri.js spotify -this-song '<song name here>' displays: Artist(s), The song's name, a preview link of the song from spotify.
 // the album that the song is from. If no song is provided then the program will will default to "The Sign" by Ace of Base.
 //======================================================================================

 // 'node liri.js movie-this 'movie name here'
 //  If the user doesn't type a movie in the program will output data for the movie 'Mr. Nobody.'

 // OMDB
 var request = require("request");

 // Grab the movieName 
 var movieName = " ";

 // Then run a request to the OMDB API with the movie specified
 var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

 // This line is just to help us debug against the actual URL.
 console.log(queryUrl);

 request(queryUrl, function (error, response, body) {
   console.log(JSON.parse(body));

   // If the request is successful
   if (!error && response.statusCode === 200) {

     // Parse the body of the site and recover the data
     console.log("Title: " + JSON.parse(body).Title + "Release Year: " + JSON.parse(body).Year + "IMDB Rating: " + JSON.parse(body).imdbRating + "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "Country where the movie was produced:" +
       +JSON.parse(body).Country + "Language: " + JSON.parse(body).language + "Plot: " + JSON.parse(body).plot + "Actor: " + JSON.parse(body).actors
     );
   }
 })

