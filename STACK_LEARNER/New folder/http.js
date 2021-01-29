const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('<h1>Hello Node Server</h1>');
})

server.listen(8000, () => {
    console.log('Server is listening');
});