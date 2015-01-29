var events = {

	init : function(){
		this.listenLogin();
		this.listenDirection();
		this.listenActions();
		this.listenSockets();
	},

	listenLogin : function(){
		$('.username').submit(function(e){
			e.preventDefault();
			var that = $(this);
			var input = that.find('input[name=username]');
			var username = input.val();
			input.blur();
			console.log(username);
			app.login(username);
		});
	},

	listenDirection : function(){
		$('.direction').find('.arrow').each(function(){
			var that = $(this);
			var direction = that.data('direction');
			that.click(function(e){
				e.preventDefault();
			});
		});
	},

	listenActions : function(){
		$('.actions').find('.action').each(function(){
			var that = $(this);
			var action = that.data('action');
			that.click(function(e){
				e.preventDefault();
			});
		});
	},

	listenSockets : function(){
		app.socket.on('setId',function(user){
			console.log(user);
			if(user.username==app.me.username){
				app.me.id = user.id;
				$('.username').hide();
			}
		});
	}

}