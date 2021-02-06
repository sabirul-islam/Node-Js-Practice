const express = require("express")
require("./db/conn")
const studentRouter = require('./routers/student')



const app = express()
const port = process.env.PORT || 8080

app.use(studentRouter)
app.use(express.json())



app.listen(port, ()=>{
    console.log(`listening at the port ${port}`)
})