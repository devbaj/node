var fs = require('fs');
var http = require('http');

var server = http.createServer(function (request, response) {
	console.log('client request URL:', request.url);
	if (request.url === '/cars') {
		fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end;
		});
	}
	else if (request.url === '/cats'){
		fs.readFile('./views/cats.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-type': 'text/html'});
			response.write(contents); // this line is causing an error in the server
			console.log("reading file");
			response.end();
		});
	}
	else if (request.url === '/cars/new') {
		fs.readFile('./views/newcarform.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/images/cars/audi.jpg') {
		fs.readFile('./images/cars/audi.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/images/cars/lambo.jpg') {
		fs.readFile('./images/cars/lambo.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/images/cars/tesla.jpg') {
		fs.readFile('./images/cars/tesla.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/images/cats/black.jpg') {
		console.log("requesting first cat image")
		fs.readFile('./images/cats/black.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/images/cats/blonde.jpg') {
		fs.readFile('./images/cats/blonde.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/images/cats/spotted.jpg') {
		fs.readFile('./images/cats/spotted.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else {
		response.writeHead(404);
		response.end('Not found');
	}
})
const port = 7077;
server.listen(port);
console.log('Running server on port', port);