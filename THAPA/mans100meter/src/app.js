const express = require("express")
const router = require("../src/routers/men")
require("../src/db/conn")

const app = express()

app.use(express.json())
app.use(router)

const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log(`app listening at ${port} port.`);
})