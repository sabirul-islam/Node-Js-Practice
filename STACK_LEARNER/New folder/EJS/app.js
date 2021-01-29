const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/about', (req, res) => {
    res.render('pages/about', {title: 'Awesome About Page.'});
});
app.get('/help', (req, res) => {
    res.render('pages/help', {title: 'Awesome Help Page.'});
});

app.get('/', (req, res) => {
    let post = {
        title: 'Test title',
        body: 'Test body',
        published: false
    }
    let posts = [
        {title: 'Test title', author:'shimul'},
        {title: 'Test title', author:'shimul'},
        {title: 'Test title', author:'shimul'},
        {title: 'Test title', author:'shimul'}
    ];
    res.render('pages/index', {title: 'Ejs is an awesome template engine.', post, posts});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})