var app = {

	socket : null,
	me : [],
	jump : false,
	run : false,
	direction : 1,

	init : function(){
		this.socket = io.connect('http://192.168.0.38:3426');
		events.init();
	},

	login : function(username){
		this.me.username = username;
		this.socket.emit('newUser',{username:username});
	}
	
}