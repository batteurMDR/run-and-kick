var events = {

	init : function(){
		events.alink();
	},	

	alink : function(){
		$('a').each(function(){
			var that = $(this);
			var link = that.attr('href');
			var methods = link.split(":");
			that.click(function(e){
				e.preventDefault();
				nav.panel.change(methods[1]);
			});
		});
	}

}