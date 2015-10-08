var express = require('express'),
		app = express(),
		path = require('path'),
		compression = require('compression'),
		gzippo = require('gzippo');

/* 
*	No longer bundled with Express and must be installed separately
* READ MORE https://github.com/senchalabs/connect#middleware
*/
	// app.use(express.compress())
	// app.use(express.static(path.join(__dirname,'public')))

/* 
*	Compress all responses using compression
* Set 'public' folder using express static
*/
	// app.use(compression())
	// app.use(express.static(path.join(__dirname,'public')))
	
/* 3 Using gzippo middleware to gzip compress */
	app.use(gzippo.staticGzip(path.join(__dirname,'public')))

// default root router
app.get('/',function(req,res){ 
	res.render('index.html',{})
});

// serve the app
app.listen(process.env.PORT || 8080,function() {
	console.log("Server started at port 8080")
});