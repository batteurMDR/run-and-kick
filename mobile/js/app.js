var app = {

	socket : null,
	me : [],
	jump : false,
	walk : false,
	direction : 1,

	init : function(){
		this.socket = io.connect('http://192.168.1.2:3426');
		events.init();
	},

	login : function(username){
		this.me.username = username;
		this.socket.emit('newUser',{username:username});
	}
	
}