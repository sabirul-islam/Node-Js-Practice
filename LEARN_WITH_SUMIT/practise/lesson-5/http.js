const http = require('http');

// const server = http.createServer();

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('hello programmers, ');
    res.write('How are you?');
    res.end();
  } else if (req.url === '/about') {
    res.write('About Page');
    res.end();
  } else {
    res.write('Not Found');
    res.end();
  }
});

// server.on('connection', () => {
//   console.log('new connection');
// });

server.listen(8080);

console.log('listening on port 8080');
