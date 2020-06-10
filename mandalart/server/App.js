var express = require('express');
var app = express();
var port = process.env.PORT || 4000;

app.get('/', function(req, res){
    console.log('hi express');
    res.send('<h1>asdf</h1>'); // res.end('(문자열)')라면 그냥 문자열을 res body에 저장하는데 그친다.
})

var server = app.listen(port, function(){
    console.log('Server started on port '+port);
});

var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("connected mongodb")
});
mongoose.connect('mongodb://localhost:27017');