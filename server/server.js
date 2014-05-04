var http = require('http');
var static = require('node-static');
//pass in path where you want the code to look at for index.html
var file = new static.Server('../client');

http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');
