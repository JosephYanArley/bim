var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public_html/'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public_html/');
});

http.listen(port, function(){
    console.log('listening on *:' + port);
});
