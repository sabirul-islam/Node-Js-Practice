const express = require('express');

const app = express();

app.set('view engine', 'ejs');

// const admin = express();

// const handle = require('./handle');

// app.use(express.urlencoded());
// app.use(express.static(`${__dirname}/public/`, { index: 'home.html' }));

// const router = express.Router({
//   caseSensitive: true,
// });

// app.use(router);

// app.locals.title = 'My app';

// admin.get('/dashboard/hello', (req, res) => {
//   console.log(admin.mountpath);
//   res.send('welcome to admin dashboard');
// });

// app.enable('case sensitive routing');
// app.disable('case sensitive routing');

// app.param('id', (req, res, next, id) => {
//   const user = {
//     userid: id,
//     name: 'Bangladesh',
//   };
//   req.userDetails = user;
//   next();
// });

app
  .route('/about/mission')
  .get((req, res) => {
    res.render('pages/about');
  })
  .post((req, res) => {
    res.send('welcome to application home post');
  })
  .put((req, res) => {
    res.send('welcome to application home put');
  });

// app.get('/', (req, res) => {
//   // console.log(req.userDetails);
//   res.send('welcome to application home');
// });

// // app.use('/admin', admin);

// app.post('/', (req, res) => {
//   // console.log(req.body);
//   res.send('welcome to application home post');
// });

// app.put('/', (req, res) => {
//   res.send('welcome to application home put');
// });

app.listen(8080, () => {
  console.log('listening');
});
