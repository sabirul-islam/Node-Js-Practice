const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res)=>{
    res.write('<h1>Welcome to home page</h1>')
    res.write('<h1>Welcome to home page</h1>')
    res.send();
})

app.get('/about', (req, res)=>{
    res.status(200).send('Welcome to about page')
})

// app.get('/temp', (req, res)=>{
//     res.send([{
//         id: 1,
//         name: 'Shimul',
//     },{
//         id: 1,
//         name: 'Shimul',
//     },{
//         id: 1,
//         name: 'Shimul',
//     },])
// })

app.get('/temp', (req, res)=>{
    res.json([{
        id: 1,
        name: 'Shimul',
    },{
        id: 1,
        name: 'Shimul',
    },{
        id: 1,
        name: 'Shimul',
    },])
})

app.get('/contact', (req, res)=>{
    res.send('Welcome to contact page')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})