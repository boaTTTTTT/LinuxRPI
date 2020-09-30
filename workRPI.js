var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hi hi hi hi hi hi');
}).listen(3012);