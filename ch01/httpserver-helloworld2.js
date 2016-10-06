var http = require('http');
var server = http.createServer();
server.on('request', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
    res.end('Hello World!\n我的世界！\n');
});
server.listen(3000);
console.log('Server running at http://localhost:3000/');
