const http = require('http');

const serverhandle=http.createServer(function(req , resp){
resp.writeHead(200,{'Content-type' : 'text/html'});
resp.write('<h1>Hello world from nodejs</h1>');
resp.end();

});

serverhandle.listen(3000,function(){
    console.log('Server is listen to on port 3000');
})

