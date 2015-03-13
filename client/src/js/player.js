function player(user){

	this.id = user.id;
	this.username = user.username;
	this.color = user.color;
	this.x = 5;
	this.y = 145;
	this.direction = 1;
	this.$perso = null;
	this.alt = 0;
	this.last = -1;
	this.play = true;
	this.balls = [];

	this.init = function(){
		var perso = $('<div/>',{class:"decor-perso "+this.id});
		$('#decor').append(perso);
		this.$perso = $('.'+this.id);
	}

	this.respawn = function(){
		this.last = -1;
		this.x = 5;
		this.y = 145;
		this.direction = 1;
		this.$perso.css('-webkit-transform', 'scaleX(1)');
		var that = this;
		setTimeout(function(){
			that.$perso.css({top:"145px",left:"5px"});
			that.$perso.show();
			that.play = true;
		},2500);
	}

	this.fall = function(x){
		this.play = false;
		this.$perso.animate({left:(x-150)},500);
		this.$perso.animate({top:(screen.height+310)});
		this.respawn();
	}

	this.jump = function(){
		var x = (this.x + 200)*this.direction;
		var y = 100;
		if(this.direction==1){
			if(x>app.map[this.last+1][0]){
				x = (app.map[this.last+2][1]+43);
			}
		}else{
			if(x<app.map[this.last+1][0]){
				if(app.map[this.last+1][1]!=app.map[this.last+2][1]){
					x = this.x;
				}else{
					x = (app.map[this.last+2][0]-105);
					this.last = this.last+2;
				}
			}
		}
		this.x = x;
		this.$perso.animate({left:this.x},{duration:400,queue:false});
		this.$perso.animate({top:(this.y - (y/4))},50);
		this.$perso.animate({top:(this.y - (y/4)*2)},50);
		this.$perso.animate({top:(this.y - (y/4)*3)},50);
		this.$perso.animate({top:(this.y - y)},50);
		this.$perso.animate({top:(this.y - (y/4)*3)},50);
		this.$perso.animate({top:(this.y - (y/4)*2)},50);
		this.$perso.animate({top:(this.y - (y/4))},50);
		this.$perso.animate({top:this.y},50);
	}

	this.forward = function(coeff){
		if(this.play){
			this.direction = 1;
			this.$perso.css('-webkit-transform', 'scaleX(1)');
			if(this.alt!=0){
				this.$perso.animate({left:(this.alt[0]-105),top:this.alt[1]},500);
				this.$perso.animate({left:this.alt[0]},200);
				this.y = this.alt[1];
				this.x = this.alt[0];
				this.alt = 0;
			}else{
				var x = Math.round(this.x + (coeff*app.speed));
				for(var i=0;i<app.map.length;i++){
					if(this.last>=3){
						return;
					}
					if((x+105)>=app.map[i][0]&&i>this.last&&i<this.last+2){
						x = app.map[i][0];
						if(app.map[i][1]>app.map[i+1][1]){
							this.alt = [app.map[i+1][0],(app.map[i+1][1]-app.map[i][1])+145];
							this.last = i+1;
							return this.alt;
						}else if(app.map[i][1]<app.map[i+1][1]){
							this.alt = [app.map[i+1][0],app.map[i+1][1]-300];
							this.last = i+1;
							return this.alt;
						}
					}else if((x+141)>=screen.width){
						return;
					}
				};
				this.x = x;
				this.$perso.animate({left:this.x},200);
			}
		}
	}

	this.rearward = function(coeff){
		if(this.play){
			this.direction = -1;
			this.$perso.css('-webkit-transform', 'scaleX(-1)');
			if(this.alt!=0){
				this.$perso.animate({left:this.x-105},200);
				this.$perso.animate({left:(this.alt[0]-105),top:this.alt[1]},500);
				this.y = this.alt[1];
				this.x = (this.alt[0]-105);
				this.alt = 0;
			}else{
				var x = Math.round(this.x - (coeff*app.speed));
				for(var i=0;i<app.map.length;i++){
					if(this.last<3){
						return;
					}
					if(x<=app.map[i][0]&&i>this.last&&i<this.last+2){
						x = app.map[i][0];
						if(app.map[i][1]<app.map[i+1][1]){
							this.alt = [app.map[i+1][0],app.map[i+1][1]-300];
							this.last = i+1;
							return this.alt;
						}else if(app.map[i][1]==app.map[i+1][1]){
							this.fall(x);
							return;
						}
					}else if(x<=0){
						if((this.y+300)==app.map[i+1][1]){
							this.win();
							this.play = false;
							return;
						}
						x = 0;
					}
				};
				this.x = x;
				this.$perso.animate({left:this.x},200);
			}
		}
	}

	this.attack = function(){
		if(this.direction==1){
			var Ball = new ball({user:this.id,color:this.color,x:(this.x+148),y:(this.y+125),direction:this.direction});
		}else{
			var Ball = new ball({user:this.id,color:this.color,x:(this.x-50),y:(this.y+125),direction:this.direction});
		}
		Ball.init();
		this.balls.push(Ball);
	}

	this.win = function(){
		app.socket.emit('userWin',{id:this.id});
	}
}