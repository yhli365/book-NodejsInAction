var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
    res.end('Hello World!\n我的世界！\n');
}).listen(3000);
console.log('Server running at http://localhost:3000/');
