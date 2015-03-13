var events = {

	init : function(){
		this.listenLogin();
		this.listenDirection();
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

			$('.touch').hammer().on('swiperight',function(e){
				// Reculer
				app.socket.emit('rearward',{id:app.me.id,coeff:e.gesture.distance});
			});

			$('.touch').hammer().on('swipeleft',function(e){
				// Avancer
				app.socket.emit('forward',{id:app.me.id,coeff:e.gesture.distance});
			});

			$('.touch').hammer().on('tap',function(e){
				// Attaquer
				app.socket.emit('jump',{id:app.me.id});
			});

			$('.attack').click(function(e){
				e.preventDefault();
				app.socket.emit('attack',{id:app.me.id});
			});
	},

	listenSockets : function(){
		app.socket.on('setId',function(user){
			if(user.username==app.me.username){
				app.me.id = user.id;
				app.me.color = user.color;
				$('.color').css({"background-color":app.me.color});
				$('.username').find('input').each(function(){
					$(this).hide();
				});
			}
		});
		app.socket.on('startCtrl',function(){
			$('.username').hide();
		});
		app.socket.on('countdown',function(time){
			$('.countdown').show().text(time.time);
		});
		app.socket.on('disconnect',function(){
		  	alert('Erreur, connexion avec la socket perdu');
		});
		app.socket.on('userWin',function(id){
			$('.countdown').text("");
			$('.username').show();
		  	if(id==app.me.id){
				$('.countdown').text("Gagner");
		  	}else{
				$('.countdown').text("Perdu");
		  	}
			window.setTimeout(function(){
				window.location.reload();
			},15000);
		});
	}

}