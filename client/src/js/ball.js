function ball(options){

	this.user = options.user;
	this.color = options.color;
	this.x = options.x;
	this.y = options.y;
	this.direction = options.direction;
	this.$ball = null;
	this.interval = null;

	this.init = function(){	
		var ball = $('<div/>',{class:"decor-ball"});
		this.$ball = ball;
		this.$ball.css({"background-color":"#"+this.color,top:this.y,left:this.x});
		$('#decor').append(ball);
		this.interval = window.setInterval(this.move(),1000);
	}

	this.move = function(){
		if(this.direction==1){
			var x=this.x+5;
			this.$ball.css({left:this.x});
			this.x = x;
			for(var i=0;i<app.users.length;i++){
				if((this.x+50)>=app.users[i].x&&app.users[i].id!=this.user){
					if(app.users[i].x>this.x){
						if(this.y>app.users[i].y&&(this.y+50)<(app.users[i].y+300)){
							this.kill(app.users[i]);
							return;
						}
					}
				}if(this.x>=screen.width){
					this.$ball.hide();
					return;
				}
			};
			var that = this;
			setTimeout(function(){
				that.move();
			},40);
		}else{
			var x=this.x-5;
			this.$ball.css({left:this.x});
			this.x = x;
			for(var i=0;i<app.users.length;i++){
				if(this.x<=(app.users[i].x+105)&&app.users[i].id!=this.user){
					if(app.users[i].x<this.x){
						if(this.y>app.users[i].y&&(this.y+50)<(app.users[i].y+300)){
							this.kill(app.users[i]);
							return;
						}
					}
				}if((this.x+50)<=0){
					this.$ball.hide();
					return;
				}
			};
			var that = this;
			setTimeout(function(){
				that.move();
			},40);
		}
	}

	this.kill = function(user){
		this.$ball.hide();
		clearInterval(this.interval);
		app.users[user.id].$perso.hide();
		app.users[user.id].respawn();
	}

}