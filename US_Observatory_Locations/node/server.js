// This script launches an http server on port 3000.
// It is accessed via AJAX calls from the getData() function 
// in the client-side controller.js script in the Observatories web app.

var http = require('http');
var url  = require('url')
var HOST = '127.0.0.1';
var PORT = 3000;

/**
 * This function spawns a python child process to scrape a web page(s), then
 * returns the data. The function listens for python to write the response to stdout.
 *
 * callBack: callback function to send response back to
 * action: identifies the type of web page scrape to be performed (python)
 * dataURL: URL to retrieve data from
 */
function getData(callBack, action, dataURL) {
    var spawn = require('child_process').spawn,
        child = spawn('python3',['../py/scrape.py', action, dataURL]);
	console.log('Spawning Python Process: python3 scrape.py ' +  action + ' ' + dataURL);
    var resp = '';

    child.stdout.on('data', function(data) {
        resp += data.toString();
    });

    child.on('close', function() {
        callBack(resp);
    });
}

/**
 * This function creates an anonymous function which listens for calls
 * on port 3000 on the local host.
 *
 * When a request is received, it calls the getData() function to retreive
 * data from the python script(s) whcih scrapes the appropraite web page(s) for data,
 * then returns the data as a JSONP payload.
 */
http.createServer(function(request, response) {
	console.log(request.url);
    var parts   = url.parse(request.url, true).query;
    var action  = parts.action;
    var dataURL = parts.dataURL;
    
	// call getData function
    getData(function(data) {
		response.writeHead(200, {
				'Content-Type':
				'application/json',
				'Access-Control-Allow-Origin' : '*' });
		response.write(JSON.stringify(data));
		response.end();
    }, action, dataURL);
}).listen(PORT, HOST);
console.log('Node server listening at http://' + HOST + ':' + PORT);
