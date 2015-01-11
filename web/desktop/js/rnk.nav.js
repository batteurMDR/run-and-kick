var nav = {

	panel : {

		current : "main",

		change : function(to){
			$("."+nav.panel.current).addClass("animated zoomOut");
			setTimeout(function(){
				$("."+nav.panel.current).hide().removeClass("animated zoomOut");
				$("."+to).addClass("animated zoomIn").show();
			},500);	
			setTimeout(function(){
				$("."+to).removeClass("animated zoomIn");
				nav.panel.current = to;
			},1000);
		}

	}

}