console.log("Hello World!\n Im learning Node.JS!");

var http = require("http");
http.createServer(function(request, response){
	//send the http header
	//http status
	//content type: text/ plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	//send the response body as Hello world
	response.end('Hello World\n');

}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');


