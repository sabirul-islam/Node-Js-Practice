const express = require('express');
const router = express.Router()

require('../db/conn')
const User = require('../model/userSchema')

router.get("/", (req,res)=>{
    res.send(`Hello from home`)
})

router.post("/register", (req,res)=>{
    const { name, email, phone, work, password, cpassword } = req.body

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({error: "plz fillout the missing field"})
    }

    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error: "email already exist"})   
        }

        const user = new User({name:name, email:email, phone:phone, work:work, password:password, cpassword:cpassword})

        user.save().then(()=>{
            console.log("success");
            res.status(201).json({message: "user registered successfuly"})
        }).catch((err)=>res.status(500).json({error: `registration failed ${err}.`}))
    }).catch((err)=>console.log(err))


    // res.json({message: req.body})
   
})

router.get("/about", /*middleware,*/ (req,res)=>{
    res.send(`Hello from about`)
    console.log(`hello from about`);
})

router.get("/contact", (req,res)=>{
    res.send(`Hello from contact`)
})

router.get("/signin", (req,res)=>{
    res.send(`Hello from signin`)
})

router.get("/signup", (req,res)=>{
    res.send(`Hello from signup`)
})

module.exports = router