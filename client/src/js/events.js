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
			app.users[user.id] = new player(user);
			app.users[user.id].init();
		});
		app.socket.on('userRearward',function(user){
			app.users[user.id].rearward(user.coeff);
		});
		app.socket.on('userForward',function(user){
			app.users[user.id].forward(user.coeff);
		});
		app.socket.on('disconnect', function () {
		  	alert('Erreur, connexion avec la socket perdu');
		});
	}

}