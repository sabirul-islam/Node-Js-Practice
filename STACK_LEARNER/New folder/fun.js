const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    fs.readFile('index.html', 'utf8',(err, data) => {
        if(err){
            console.log(err);
        }else{
            res.write(data);
            res.end();
        }
        })
});

server.listen(4141, () => console.log('server is running'));