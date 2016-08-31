var express = require('express')
var bodyParser = require('body-parser');

var app = express()
app.use(bodyParser.urlencoded({ extended: false }));

var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 3000)

app.get('/', function(req, res){
	//serve html page
	// res.writeHead(200, {'Content-Type': 'text/html'})
	res.sendFile(__dirname + '/static/index.html')
})

app.post('/webhook', function(req, res){
	//handle webhook from twilio
	
	
	var from = req.body.From;
    var text = req.body.Body;
    io.emit('cmd', text + "*" + from)
	res.writeHead(200, {'Content-Type': 'text/html'})
	res.end('Success!')
})

app.use(express.static('static'));