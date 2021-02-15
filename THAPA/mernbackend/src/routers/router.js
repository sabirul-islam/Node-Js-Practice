const express = require("express")
const router = new express.Router
const Register = require("../models/registers")

router.get("/", (req, res)=>{
    res.render("index")
})

router.get("/register", (req, res)=>{
    res.render("register")
})

router.get("/login", (req, res)=>{
    res.render("login")
})

router.post("/register", async (req, res)=>{
    try{
        const password = req.body.password
        const cpassword = req.body.confirmpassword

        if(password === cpassword){
            const registerEmployee = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                gender: req.body.gender,
                phone: req.body.phone,
                age: req.body.age,
                password: password,
                confirmpassword: cpassword,
            })
            const registered = await registerEmployee.save()
            res.status(201).render("index")
        }else{
            res.send("password not matching")
        }

    }catch(e){
        res.status(500).send(e)
    }   
})

router.post("/login", async(req, res)=>{
    try{
        const email = req.body.email
        const password = req.body.password
        const user = await Register.findOne({email:email})

        if(user.email === email && password === user.password){
            res.render('index')
        }else{
            res.status(500).send("invalid login")
        }
    }catch(e){
        res.status(500).send("invalid login")
    }
})

module.exports = router