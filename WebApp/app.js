var http      = require('http');
var express   = require('express');

var app    = express();

app.get('/', function(req, res){
  res.send("Newww");
  console.log('Incoming request');
});

app.use(function(err, req, res, next){
  if (req.xhr) {
    res.send(500, 'Something went wrong!');
  }
  else {
    next(err);
  }
});

console.log('starting the Express (NodeJS) Web server');
app.listen(3000);
console.log('Webserver is listening on port 80');