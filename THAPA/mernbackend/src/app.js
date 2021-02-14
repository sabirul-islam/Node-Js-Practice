const express = require("express")
const path = require("path")
const hbs = require("hbs")
require("./db/conn")
const router = require("./routers/router")
const port = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)

const static_path = path.join(__dirname,"../public/")
const template_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials/")

app.use(express.static(static_path))
app.set("view engine", "hbs")
app.set("views", template_path)
hbs.registerPartials(partials_path)

app.listen(port, ()=>{
    console.log(`Server is running at the port number ${port}`);
})