var events = {

	init : function(){
		this.listenSockets();
	},

	listenSockets : function(){
		app.socket.on('startDisp',function(time){
			$('.pause').hide();
		});
		app.socket.on('countdown',function(time){
			$('.countdown').show().text(time.time);
		});
		app.socket.on('newUser',function(user){
			console.log(user);
			app.users[user.id] = new player(user);
			console.log(app.users);
		});
		app.socket.on('userRearward',function(user){
			console.log(user);
			
		});
	}

}