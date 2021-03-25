const express = require('express');
const router = express.Router()
const bcrypt = require('bcryptjs');
const token = require('jsonwebtoken')

require('../db/conn')
const User = require('../model/userSchema')

router.get("/", (req, res)=>{
    res.send(`Hello from home`)
})

/*router.post("/register", (req,res)=>{
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

        user.save()
        .then(()=>{
            console.log("success");
            res.status(201).json({message: "user registered successfuly"})
        })
        .catch((err)=>res.status(500).json({error: `registration failed ${err}.`}))
    }).catch((err)=>console.log(err))

    // res.json({message: req.body})   
})*/

// User registration router
router.post("/register", async (req,res)=>{
    
    //destructuring
    const { name, email, phone, work, password, cpassword } = req.body

    // validation check
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({error: "plz fillout the missing field"})
    }

    try {
        // finding email
        const userExist = await User.findOne({email:email})

        // email existence check
        if(userExist){
            return res.status(422).json({error: "email already exist"})
        }else if(password != cpassword){
            return res.status(422).json({error: "password not match"})
        }else{
        // creating new user
        const user = new User({name, email, phone, work, password, cpassword})
        
        // saving user
        await user.save()
        console.log(await user.save());

        res.status(201).json({message: "user registered successfuly"})
        }

    } catch (error) {
        console.log(error);
    }  
})

// User login router
router.post('/signin', async (req, res)=>{
    try {
        // destructuring
        const { email, password } = req.body

        // validation check
        if(!email || !password){
            return res.status(400).json({error: 'fill out the empty field'})
        }

        // finding email
        const userLogin = await User.findOne({email:email})

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)

            const token = await userLogin.generateAuthToken()
            console.log(token);

            if(!isMatch){
            res.status(400).json({message: 'Invalid Credentials pass.'})
            }else{
            res.json({message: "user signin successfuly."})
            }
        } else {
            res.status(400).json({message: 'Invalid Credentials.'}) 
        }

        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'signin not successful'})
    }
})



const middleware = (req, res, next) => {
    console.log(`hello from middleware`);
    next()
}

router.get("/about", middleware, (req,res)=>{
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