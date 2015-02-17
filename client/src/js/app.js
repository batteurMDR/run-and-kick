var app = {

	socket : null,

	init : function(){
		this.socket = io.connect('http://192.168.1.2:3426');
	}

}