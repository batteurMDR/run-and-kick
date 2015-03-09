var app = {

	socket : null,
	users : [],

	init : function(){
		this.socket = io.connect('http://192.168.0.38:3426');
		events.init();
	}

}