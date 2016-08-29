var express = require('express')
var app = express()
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 3000)

app.get('/', function(req, res){
	//serve html page
	// res.writeHead(200, {'Content-Type': 'text/html'})
	res.sendFile(__dirname + '/static/index.html')
})

app.get('/webhook', function(req, res){
	//handle webhook from twilio
	io.emit('cmd','2L*123')
	io.emit('cmd','2L*123')
	io.emit('cmd','2L*123')

	res.writeHead(200, {'Content-Type': 'text/html'})
	res.end('Success!')
})

app.use(express.static('static'));