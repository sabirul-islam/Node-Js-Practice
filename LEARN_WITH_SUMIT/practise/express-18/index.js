const express = require('express');
const cookieParser = require('cookie-parser');
const handler = require('./handler');

const app = express();

app.use(express.json());
app.use(cookieParser());
const adminRoute = express.Router();
adminRoute.get('/dashboard', (req, res) => {
  console.log(req.protocol);
  res.send('We are in admin Dashboard');
});

app.use('/admin', adminRoute);

app.get('/user/:id', handler);

app.post('/user/', (req, res) => {
  console.log(req.route);
  res.send('Hello World post');
});

app.get('/user/', (req, res) => {
  console.log(req.route);
  res.send('Hello World get');
});

app.listen(8080, () => {
  console.log('Listening on port 3000');
});
