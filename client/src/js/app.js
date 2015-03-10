var app = {

	socket : null,
	users : [],

	init : function(){
		this.socket = io.connect('http://192.168.1.3:3426');
		events.init();
	}

}