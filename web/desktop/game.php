<html>
	<head>
		<meta charset="utf-8">
		<title>RUN & KICK</title>
	</head>
	<body>
		<div id="content"></div>
		<script src="//code.jquery.com/jquery-1.11.0.min.js" type="text/javascript"></script>
		<script src="js/rnk.js" type="text/javascript"></script>
		<script src="js/rnk.const.js" type="text/javascript"></script>
		<script type="text/javascript">
			$('<div/>',{class:"load"}).append($('<span/>',{class:"loader loader-double"})).prependTo("body");
			rnk.load("http://fonts.googleapis.com/css?family=Ubuntu",cns.css);
			rnk.load("css/rnk.css",cns.css);
			rnk.load("css/rnk.animation.css",cns.css);
			rnk.load("css/rnk.players.css",cns.css);
			rnk.load("css/rnk.maps.css",cns.css);
			rnk.load("css/rnk.ui.css",cns.css);
			rnk.load("css/rnk.panel.css",cns.css);

			rnk.load("js/rnk.players.js",cns.js);
			rnk.load("js/rnk.maps.js",cns.js);
			rnk.load("js/rnk.ui.js",cns.js);
			rnk.load("js/rnk.events.js",cns.js);
			rnk.load("js/rnk.nav.js",cns.js);

			rnk.load("js/app.js",cns.js);
		</script>
	</body>
</html>