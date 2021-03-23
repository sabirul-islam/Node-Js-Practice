const express = require('express');
const dotenv = require('dotenv');

const app = express()

dotenv.config({path: './config.env'})
require('./db/conn')
const PORT = process.env.PORT

const middleware = (req, res, next) => {
    console.log(`hello from middleware`);
    next()
}

app.get("/", (req,res)=>{
    res.send(`Hello from home`)
})

app.get("/about", middleware, (req,res)=>{
    res.send(`Hello from about`)
    console.log(`hello from about`);
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

app.listen(PORT, ()=>{
    console.log(`server is running at port no ${PORT}`);
})