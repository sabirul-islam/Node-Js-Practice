const express = require('express');
const dotenv = require('dotenv');

const app = express()

dotenv.config({path: './config.env'}) // dotenv file path
require('./db/conn') // mongoose connection
app.use(express.json()) // for using json
app.use(require('./router/auth')) //import router
const PORT = process.env.PORT

// const middleware = (req, res, next) => {
//     console.log(`hello from middleware`);
//     next()
// }



app.listen(PORT, ()=>{
    console.log(`server is running at port no ${PORT}`);
})