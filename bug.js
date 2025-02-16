const http = require('http');

const server = http.createServer((req, res) => {
  // This line will throw an error if the request is too large
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    res.writeHead(200);
    res.end('OK');
  });
});

server.listen(3000);