const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('<html><head><title>Form</title></head>');
    res.write(
      '<body><form method="post" action="/process"><input name="message"></input></form></body></html>'
    );
    res.end();
  } else if (req.url === '/process' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      console.log('Stream Finished');
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      res.write('Thank you for submitting');
      res.end();
    });
  } else {
    res.write('Not Found');
    res.end();
  }
});

server.listen(8080);

console.log('listening on port 8080');
