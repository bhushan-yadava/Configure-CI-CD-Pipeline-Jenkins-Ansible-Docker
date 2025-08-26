const http = require('http');
http.createServer((req, res) => {
  res.end('Hello from Docker CI/CD Pipeline!');
}).listen(3000);
