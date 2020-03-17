const http = require('http');

http.createServer(function(req , resp){
resp.writeHead(200,{'Content-type' : 'text/html'});
resp.write('<h1>Hello world from nodejs</h1>');
resp.end();

}).listen(3000);