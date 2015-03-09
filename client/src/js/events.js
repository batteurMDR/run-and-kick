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
	}

}