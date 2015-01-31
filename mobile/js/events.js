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
			app.login(username);
		});
	},

	listenDirection : function(){
		$('.direction').find('.arrow').each(function(){
			var that = $(this);
			var direction = that.data('direction');
			that.mousedown(function(){
				switch(direction){
					case "up":
						console.log('up');
						break;
					case "right":
						console.log('right 1');
						break;
					case "left":
						console.log('left 1');
						break;
					}
			});
			that.mouseup(function(){
				switch(direction){
					case "right":
						console.log('right 2');
						break;
					case "left":
						console.log('left 2');
						break;
					}
			});
		});
	},

	listenActions : function(){
		$('.actions').find('.action').each(function(){
			var that = $(this);
			var action = that.data('action');
			that.click(function(e){
				e.preventDefault();
				//Le code qui switch l'action et qui defini l'action a faire
			});
		});
	},

	listenSockets : function(){
		app.socket.on('setId',function(user){
			if(user.username==app.me.username){
				app.me.id = user.id;
				$('.username').find('input').each(function(){
					$(this).hide();
				});
			}
		});
		app.socket.on('startCtrl',function(){
			$('.username').hide();
		});
	}

}