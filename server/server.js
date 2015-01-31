var http = require('http');
var colors = require('colors');
httpServer = http.createServer(function(req,res){});
httpServer.listen('3426');

var io = require('socket.io').listen(httpServer);

var users = [];
var play = false;

io.sockets.on('connection',function(socket){

	console.log("new user".yellow);

	var me = false;

	socket.on('newUser',function(user){
		if(!play){
			user.id = users.length;
			me = user;
			users.push(me);
			socket.emit('setId',me);
			console.log("welcome "+me.username.red);
			if(users.length>=2){
				play = true;
				io.sockets.emit('startCtrl');
				//emit du startDsp (start display)
				console.log("Start the game".green);
			}
		}
	});

	//Listen les déplacements

	

});