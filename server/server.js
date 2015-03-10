var http = require('http');
var colors = require('colors');
httpServer = http.createServer(function(req,res){});
httpServer.listen('3426');

var io = require('socket.io').listen(httpServer);

var users = [];
var displays = [];
var play = false;
var speed = 0.1;

io.sockets.on('connection',function(socket){

	console.log("new user".yellow);

	var me = false;

	socket.on('newUser',function(user){
		if(!play){
			user.id = users.length;
			user.x  = 0;
			user.y  = 0;
			me = user;
			users.push(me);
			socket.emit('setId',me);
			io.sockets.emit('newUser',me);
			console.log("welcome "+me.username.red);
			if(users.length>=1){
				var count = 3;
				var countdown = setInterval(function(){
					io.sockets.emit('countdown',{time:count});
					console.log(count);
					count--;
					if(count==0){
						clearInterval(countdown);
					}
				},1000);
				setTimeout(function(){
					play = true;
					io.sockets.emit('startDisp');
					io.sockets.emit('startCtrl');
					console.log("Start the game".green);
				},4000);
			}
		}
	});
	
	socket.on('disconnect',function(){
		if(!me){
			return false;
		}
		users.splice(me.id,1);
		io.sockets.emit('remUser',me);
	});

	//Listen les déplacements

	socket.on('rearward',function(e){
		if(play){
			users[e.id].x = Math.round(users[e.id].x - (e.coeff*speed));
			me.x = users[e.id].x;
			io.sockets.emit('userRearward',me);
			console.log(me);
		}
	});

	socket.on('forward',function(e){
		if(play){
			users[e.id].x = Math.round(users[e.id].x + (e.coeff*speed));
			me.x = users[e.id].x;
			io.sockets.emit('userForward',me);
			console.log(me);
		}
	});

	socket.on('attack',function(e){
		if(play){
			console.log(users[e.id]);
			console.log(e);
		}
	});

	socket.on('jump',function(e){
		if(play){
			console.log(users[e.id]);
			console.log(e);
		}
	});

});