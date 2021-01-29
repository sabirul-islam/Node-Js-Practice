const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
  // console.log(res.headersSent);
  // res.render('pages/about', {
  //   name: 'Shimul',
  // });
  // res.send({
  //   name: 'Shimul',
  // });
  // res.status(200);
  // res.end();
  // res.sendStatus(403);
  // res.format({
  //   'text/plain': () => {
  //     res.send('hi');
  //   },
  //   'text/html': () => {
  //     res.render('pages/about', {
  //       name: 'Shimul',
  //     });
  //   },
  //   'application/json': () => {
  //     res.json({
  //       message: 'about',
  //     });
  //   },
  //   default: () => {
  //     res.status(406).send('Not acceptable');
  //   },
  // });
  // res.cookie('name', 'shimul');
  // res.redirect('/test');
  // res.location('/test');
  res.set('Platform', 'SHimuL');
  console.log(res.get('Platform'));
  res.end();
});

app.get('/test', (req, res) => {
  res.send('Hello');
});

app.listen(8080, () => {
  console.log('listening');
});
