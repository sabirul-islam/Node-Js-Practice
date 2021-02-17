// const express = require("express")
// const router = new express.Router
// const bcrypt = require("bcryptjs")
// const Register = require("../models/registers")

// router.get("/", (req, res)=>{
//     res.render("index")
// })


// router.get("/register", (req, res)=>{
//     res.render("register")
// })

// router.get("/login", (req, res)=>{
//     res.render("login")
// })

// router.post("/register", async (req, res)=>{
//     try{
//         const password = req.body.password
//         const cpassword = req.body.confirmpassword

//         if(password === cpassword){
//             const registerEmployee = new Register({
//                 firstname: req.body.firstname,
//                 lastname: req.body.lastname,
//                 email: req.body.email,
//                 gender: req.body.gender,
//                 phone: req.body.phone,
//                 age: req.body.age,
//                 password: password,
//                 confirmpassword: cpassword,
//             })
//             console.log(`success part ${registerEmployee}`);
//             const token = await registerEmployee.generateAuthToken()
//             console.log("the token part"+token);

//             res.cookie("jwt", token, {
//                 expires: new Date(Date.now() + 100000),
//                 httpOnly: true
//             })
//             console.log(cookie);

//             const registered = await registerEmployee.save()
//             res.status(201).render("index")
//             console.log(`the page part ${registered}`);
//         }else{
//             res.send("password not matching")
//         }

//     }catch(e){
//         res.status(500).send(e)
//     }   
// })

// router.post("/login", async(req, res)=>{
//     try{
//         const email = req.body.email
//         const password = req.body.password

//         const user = await Register.findOne({email:email})

//         const isMatch = await bcrypt.compare(password, user.password)
//         console.log(isMatch);

//         const token = await user.generateAuthToken()
//             console.log("the token part"+token);
            
//         res.cookie("jwt", token, {
//             expires: new Date(Date.now() + 100000),
//             httpOnly: true,
//             // secure: true
//         })
        
//         console.log(`this is the cookie awesome ${req.cookies.jwt}`);

//         if(isMatch){
//             res.render('index')
//         }else{
//             res.status(500).send("invalid password details")
//         }
//     }catch(e){
//         res.status(500).send("invalid login details")
//     }
// })

// module.exports = router