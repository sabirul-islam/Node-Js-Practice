// const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');
// const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`, 'utf8');

// // ourReadStream.on('data', (chunk) => {
// //   ourWriteStream.write(chunk);
// // });

// ourReadStream.pipe(ourWriteStream);

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');
  myReadStream.pipe(res);
});

server.listen(8080);

console.log('listening on port 8080');
