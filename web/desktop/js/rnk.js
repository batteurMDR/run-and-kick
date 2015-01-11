var rnk = {

	panel : {
		main : null
	},

	load : function(src,type){
		if(type==cns.css){
			$("<link/>", {
			   rel: "stylesheet",
			   type: "text/css",
			   href: src
			}).appendTo("head");
		}else if(type==cns.js){
			$("<script/>", {
			   src: src,
			   type: "text/javascript"
			}).appendTo("body");
		}
	},

	init : {

		game : function(callback){
			events.init();
			callback();
		},

		panel : function(callback){
			rnk.panel.main = ui.add.panel("main",null,"main",$('#content')).hide();
				ui.add.link("Solo","panel:solo",null,"main-link",rnk.panel.main);
					rnk.panel.solo = ui.add.panel("solo",null,"solo",$('#content')).hide();

				ui.add.link("Multijoueur","panel:multi",null,"main-link",rnk.panel.main);
					rnk.panel.multi = ui.add.panel("multi",null,"multi",$('#content')).hide();
						ui.add.link("Partie rapide","panel:simple",null,"multi-link",rnk.panel.multi);
							rnk.panel.simple = ui.add.panel("simple",null,"simple",$('#content')).hide();

						ui.add.link("Serveurs","panel:server",null,"multi-link",rnk.panel.multi);
							rnk.panel.server = ui.add.panel("server",null,"server",$('#content')).hide();

						ui.add.link("Friends","panel:friends",null,"multi-link",rnk.panel.multi);
							rnk.panel.friends = ui.add.panel("friends",null,"friends",$('#content')).hide();

						ui.add.link("Jouer avec des amis","panel:pwfriends",null,"multi-link",rnk.panel.multi);
							rnk.panel.pwfriends = ui.add.panel("pwfriends",null,"pwfriends",$('#content')).hide();

				ui.add.link("Options","panel:opt",null,"main-link",rnk.panel.main);
					rnk.panel.opt = ui.add.panel("opt",null,"opt",$('#content')).hide();
						ui.add.link("Joueur","panel:player",null,"opt-link",rnk.panel.opt);
							rnk.panel.player = ui.add.panel("player",null,"player",$('#content')).hide();

						ui.add.link("Son","panel:sound",null,"opt-link",rnk.panel.opt);
							rnk.panel.sound = ui.add.panel("sound",null,"sound",$('#content')).hide();

						ui.add.link("Contrôles","panel:ctrl",null,"opt-link",rnk.panel.opt);
							rnk.panel.ctrl = ui.add.panel("ctrl",null,"ctrl",$('#content')).hide();

								ui.add.text("<h1>Modifier les touches de contrôles</h1>",null,"title",rnk.panel.ctrl);
								

						ui.add.link("Graphismes","panel:graph",null,"opt-link",rnk.panel.opt);
							rnk.panel.graph = ui.add.panel("graph",null,"graph",$('#content')).hide();

			callback();
		}

	}



}