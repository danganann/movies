var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listmovies', function (req, res) {
   fs.readFile( __dirname + "/" + "movies.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var movies = {
    "movies6" : {
       "title" : "Conjuring: The Beyond",
       "actor" : "Steve Larkin",
       "genre" : "Horror",
       "link": "https://www.imdb.com/title/tt20204164/?ref_=fn_al_tt_5",
       "id":"6"
    }
 }
 
 app.post('/addmovies', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "movies.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["movies6"] = movies["movies6"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

 app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "movies.json", 'utf8', function (err, data) {
       var movies = JSON.parse( data );
       var movies = movies["movies" + req.params.id] 
       console.log( movies );
       res.end( JSON.stringify(movies));
    });
 })

 var id = 2;

app.delete('/deletemovies', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "movies.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["movies" + 2];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})