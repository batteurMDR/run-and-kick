function player(user){

	this.id = user.id;
	this.username = user.username;
	this.x = 5;
	this.y = 145;
	this.direction = 1;
	this.$perso = null;
	this.alt = 0;
	this.last = -1;
	this.play = true;

	this.init = function(){
		var perso = $('<div/>',{class:"decor-perso "+this.id});
		$('#decor').append(perso);
		this.$perso = $('.'+this.id);
	}

	this.jump = function(){

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
			that.play = true;
		},2500);
	}

	this.fall = function(x){
		this.play = false;
		this.$perso.animate({left:(x-150)},500);
		this.$perso.animate({top:(screen.height+310)});
		this.respawn();
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
						//gagner
						return;
					}
				};
				this.x = x;
				this.$perso.animate({left:this.x},200);
			}
		}
	}

	this.attack = function(){
		
	}

	this.loose = function(){

	}

	this.win = function(){

	}
}