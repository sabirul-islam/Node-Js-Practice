const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const staticPath = path.join(__dirname, "../public/")
const templatePath = path.join(__dirname, '../templates/views/')
const partialsPath = path.join(__dirname, '../templates/partials/')

// app.use(express.static(staticPath))

// View Engine(hbs)
app.set('view engine', 'hbs')
app.set('views', templatePath)
hbs.registerPartials(partialsPath)

// hbs route
app.get('/', (req, res) =>{
    res.render('index', {
        'Name': 'Shimul'
    })
})

app.get('/about', (req, res) =>{
    res.render('about', {
        name: req.query.name,
    })
})

app.get('/about/*', (req, res) =>{
    res.render('notFound',{
        errorComment: "about page not found"
    })
})

app.get('*', (req, res) =>{
    res.render('notFound',{
        errorComment: "page not found"
    })
})

app.listen(8080, () =>{
    console.log('Server listening')
})