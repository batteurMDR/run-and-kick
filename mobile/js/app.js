var app = {

	socket : null,
	me : [],
	jump : false,
	direction : 1,

	init : function(){
		this.socket = io.connect('http://192.168.1.2:3426');
		$('.touch').css({height:(screen.width-150)+"px"});
		events.init();
	},

	login : function(username){
		this.me.username = username;
		this.socket.emit('newUser',{username:username});
	}
	
}