var ui = {

	add : {

		button : function(text,position,classe,append){
			if(position==cns.any){
				return $('<button/>',{class:classe}).append(text).appendTo(append);
			}else{
				return $('<button/>',{top:position[0],left:position[1],class:classe}).append(text).appendTo(append);
			}
		},

		text : function(text,position,classe,append){
			if(position==cns.any){
				return $('<p/>',{class:classe}).append(text).appendTo(append);
			}else{
				return $('<p/>',{top:position[0],left:position[1],class:classe}).append(text).appendTo(append);
			}
		},

		link : function(text,link,position,classe,append){
			if(position==cns.any){
				return $('<a/>',{href:link,class:classe}).append(text).appendTo(append);
			}else{
				return $('<a/>',{href:link,top:position[0],left:position[1],class:classe}).append(text).appendTo(append);
			}
		},

		image : function(src,position,classe,append){
			if(position==cns.any){
				return $('<img/>',{src:src,alt:"image run & kick",class:classe}).appendTo(append);
			}else{
				return $('<img/>',{src:src,alt:"image run & kick",top:position[0],left:position[1],class:classe}).appendTo(append);
			}
		},
		

		panel : function(name,position,classe,append){
			if(position==cns.any){
				return $('<section/>',{class:"panel "+classe}).data("name",name).appendTo(append);
			}else{
				return $('<section/>',{top:position[0],left:position[1],class:classe}).data("name",name).appendTo(append);
			}
		},

		form : {

			init : function(classe,position,append,submit){
				if(position==cns.any){
					return $('<form/>',{class:"form "+classe}).appendTo(append).submit(submit());
				}else{
					return $('<form/>',{top:position[0],left:position[1],class:"form "+classe}).appendTo(append).submit(submit());
				}
			},

			input : {

				text : function(placeholder,name,postion,classe,append){
					
				},

				password : function(placeholder,name,position,classe,append){

				}

			}

		}

	},

	remove : {

		button : function(elem){
			elem.remove();
		},

		text : function(elem){
			elem.remove();
		},

		link : function(elem){
			elem.remove();
		},

		image : function(elem){
			elem.remove();
		},

		panel : function(elem){
			elem.remove();
		}

	}

}