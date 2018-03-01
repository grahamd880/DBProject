#!/usr/bin/env nodejs
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
	//parse the url
	var q = url.parse(req.url, true);
	
	//get the extension
	var filename = "." + q.pathname + ".html";
    
	//get the correct page
	fs.readFile(filename, function(err, data){
		if(err){
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Not Found");
		}

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	});

}).listen(8080);
