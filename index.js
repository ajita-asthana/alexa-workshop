'use strict';
const movie = require('movie-search');
const config = require('./config.json');
 
movie.config(config.movie_db_key);
movie.search("The Godfather Part", function(results) {
    let movies = [];
    results.map(x => movies.push({"date":x.release_date,"title": x.title}));
    console.log(movies);
});
 
// [  
// 	{ date: '1974-12-20', title: 'The Godfather: Part II' }, 
// 	{ date: '1990-12-24', title: 'The Godfather: Part III' }, 
// 	{ date: '1972-03-14', title: 'The Godfather' }  
// ] 
