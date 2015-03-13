var http = require('http');
var colors = require('colors');
httpServer = http.createServer(function(req,res){});
httpServer.listen('3426');

var io = require('socket.io').listen(httpServer);

var users = [];
var play = false;
var winner = false;
var color  = ["DF4949","EFC94C","382B66","5A8165"];

io.sockets.on('connection',function(socket){

	console.log("new user : ".yellow+socket.handshake.address.red);

	var me = false;

	socket.on('newUser',function(user){
		if(!play){
			user.id = users.length;
			user.color = color[user.id];
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

	socket.on('userWin',function(user){
		console.log("User win".green);
		if(play&&!winner){
			winner = true;
			play = false;
			console.log("Stop the game".green);
			console.log(users[user.id].username.red+" is the winner");
			io.sockets.emit('userWin',user.id);
			setTimeout(function(){
				console.log("Restart the server".red);
				winner = false;
				users = [];
				console.log("Server is OK !".blue);
			},5000);
		}
	});

	//Listen les déplacements

	socket.on('rearward',function(e){
		if(play){
			io.sockets.emit('userRearward',e);
		}
	});

	socket.on('forward',function(e){
		if(play){
			io.sockets.emit('userForward',e);
		}
	});

	socket.on('attack',function(e){
		if(play){
			io.sockets.emit('userAttack',e);
		}
	});

	socket.on('jump',function(e){
		if(play){
			io.sockets.emit('userJump',e);
		}
	});

});