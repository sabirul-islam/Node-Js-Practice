require('dotenv').config()
const express = require("express")
const path = require("path")
const hbs = require("hbs")
require("./db/conn")
const bcrypt = require("bcryptjs")
const cookieParser = require('cookie-parser')
const Register = require("./models/registers")
const auth = require("./middleware/auth")

// const app = require("./apps/app")
const port = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.use(app)
app.use(cookieParser())

const static_path = path.join(__dirname,"../public/")
const template_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials/")

app.use(express.static(static_path))
app.set("view engine", "hbs")
app.set("views", template_path)
hbs.registerPartials(partials_path)




app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/secret", auth, (req, res)=>{
    // console.log(`this is the cookie awesome ${req.cookies.jwt}`);
    res.render("secret")
})

app.get("/register", (req, res)=>{
    res.render("register")
})

app.get("/login", (req, res)=>{
    res.render("login")
})

app.post("/register", async (req, res)=>{
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
            console.log(`success part ${registerEmployee}`);
            const token = await registerEmployee.generateAuthToken()
            console.log("the token part"+token);

            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 100000),
                httpOnly: true
            })
            console.log(cookie);

            const registered = await registerEmployee.save()
            res.status(201).render("index")
            console.log(`the page part ${registered}`);
        }else{
            res.send("password not matching")
        }

    }catch(e){
        res.status(500).send(e)
    }   
})

app.post("/login", async(req, res)=>{
    try{
        const email = req.body.email
        const password = req.body.password

        const user = await Register.findOne({email:email})

        const isMatch = await bcrypt.compare(password, user.password)
        console.log(isMatch);

        const token = await user.generateAuthToken()
            console.log("the token part"+token);
            
        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 100000),
            httpOnly: true,
            // secure: true
        })
        
        console.log(`this is the cookie awesome ${req.cookies.jwt}`);

        if(isMatch){
            res.render('index')
        }else{
            res.status(500).send("invalid password details")
        }
    }catch(e){
        res.status(500).send("invalid login details")
    }
})


app.listen(port, ()=>{
    console.log(`Server is running at the port number ${port}`);
})