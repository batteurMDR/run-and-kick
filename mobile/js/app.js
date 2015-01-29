var app = {

	socket : null,
	me : [],

	init : function(){
		this.socket = io.connect('http://localhost:3426');
		events.init();
	},

	login : function(username){
		this.me.username = username;
		console.log(username);
		this.socket.emit('newUser',{username:username});
	}
	
}