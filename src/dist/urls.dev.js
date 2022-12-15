"use strict";

var _constants = require("./constants/constants");

var originals = "trending/all/week?api_key=".concat(_constants.API_KEY, "&language=en-US");
var action = "discover/movie?api_key=".concat(_constants.API_KEY, "&with_genres=28"); // action ='https://api.themoviedb.org/3/discover/movie?api_key={API_KEY_HERE}&with_genres=28'
// originals ='https://api.themoviedb.org/3/discover/tv?api_key={API_KEY_HERE}&with_networks=213'
// ComedyMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=35',
// HorrorMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=27',
// ActionMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=28',
// RomanceMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=10749',
// Documentaries: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=99',