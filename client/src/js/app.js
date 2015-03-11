var app = {

	socket : null,
	users : [],
	speed : 0.1,
	map : [
		[600,446],
		[929,273],
		[1613,273],
		[1775,768],
		[1183,768],
		[854,939],
		[492,939],
		[340,939],
		[0,939]
	],

	init : function(){
		this.socket = io.connect('http://192.168.1.2:3426');
		events.init();
	}

}