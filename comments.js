// Create web server
// Run with node comments.js

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  if (req.url === '/comments') {
    fs.readFile('comments.html', function(err, data) {
      res.write(data);
      res.end();
    });
  } else {
    res.write('<h1>Page not found</h1>');
    res.end();
  }
});

server.listen(3000);
console.log('Server running at http://localhost:3000/');