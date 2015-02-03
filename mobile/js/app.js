var app = {

	socket : null,
	me : [],
	jump : false,
	walk : false,
	direction : 1,

	init : function(){
		this.socket = io.connect('http://localhost:3426');
		events.init();
	},

	login : function(username){
		this.me.username = username;
		this.socket.emit('newUser',{username:username});
	}
	
}