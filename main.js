var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Hello! This is Lisa, your personel assistant for baby activity tracking!');
});

var server = app.listen(process.env.PORT || 5000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Listening at http://%s:%s', host, port);
});