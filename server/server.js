var http = require('http');
httpServer = http.createServer(function(req,res){});
httpServer.listen('3426');

var io = require('socket.io').listen(httpServer);

var users = [];

io.sockets.on('connection',function(socket){

	console.log("new user");

	var me = false;

	socket.on('newUser',function(user){
		user.id = users.length;
		me = user;
		users.push(me);
		socket.emit('setId',me);
		
	});

});