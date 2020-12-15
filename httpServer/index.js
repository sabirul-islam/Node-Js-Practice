const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

    const data = fs.readFileSync(`${__dirname}/userApi/userApi.json`, "utf-8");
    const objData = JSON.parse(data);
    
    if(req.url == "/"){
        res.end("Hello From Home");
    }else if(req.url=="/about") {
        res.end("Hello From about");
    }else if(req.url=="/userApi") {
        res.writeHead(200,{"Content-Type":"application/json"});
        // fs.readFile(`${__dirname}/userApi/userApi.json`, "utf-8", (err, data) => {
        //     // console.log(data);
        //     // res.end(data);
        //     const objData = JSON.parse(data);
            res.end(objData[3].name);
        
    }else{
        res.writeHead(404, {'Content-Type':"text/html"});
        res.end("<h1>404 Not Found</h1>");
    }
});

server.listen(5000, "127.0.0.1", ()=>{
    console.log('listening to the port 5000');
})