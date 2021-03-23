const express = require('express');
const app = express()
const port = process.env.PORT || 8080

app.get("/", (req,res)=>{
    res.send(`Hello from home`)
})

app.get("/about", (req,res)=>{
    res.send(`Hello from about`)
})

app.get("/contact", (req,res)=>{
    res.send(`Hello from contact`)
})

app.get("/signin", (req,res)=>{
    res.send(`Hello from signin`)
})

app.get("/signup", (req,res)=>{
    res.send(`Hello from signup`)
})

app.listen(port, ()=>{
    console.log(`server is running at port no ${port}`);
})