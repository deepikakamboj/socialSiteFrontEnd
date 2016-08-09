var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('src/main/webapp/index.html');
console.log("listening on port 1234...");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'html'});
    res.end(index);
}).listen(1234);