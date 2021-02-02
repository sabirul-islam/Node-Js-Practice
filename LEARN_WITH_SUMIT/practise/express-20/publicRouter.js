const express = require('express');
const adminRouter = require('./adminRouter');

const publicRouter = express.Router();

publicRouter.use((req, res, next) => {
  console.log('logging');
  next();
});

publicRouter.use(adminRouter);
/* publicRouter
  .route('/user')
  .all((req, res, next) => {
    console.log('I am logging something');
    next();
  })
  .get((req, res) => {
    res.send('get');
  })
  .post((req, res) => {
    res.send('post');
  })
  .put((req, res) => {
    res.send('putt');
  })
  .delete((req, res) => {
    res.send('delete');
  });

const log = (req, res, next) => {
  console.log('I am logging something');
  next();
};

publicRouter.all('*', log); */

/* publicRouter.param('user', (req, res, next, id) => {
  req.user = id === '1' ? 'Admin' : 'Anonymous';
  console.log('I am call once');
  next();
});

publicRouter.get('/:user', (req, res, next) => {
  console.log('this is also matches');
  next();
});

publicRouter.get('/:user', (req, res) => {
  res.send(`Hello ${req.user}`);
});

publicRouter.param((param, option) => (req, res, next, val) => {
  if (val === option) {
    next();
  } else {
    res.sendStatus(403);
  }
});

publicRouter.param('user', '12');

publicRouter.get('/:user', (req, res) => {
  res.send('Hello Admin');
});

publicRouter.get('/about', (req, res) => {
  res.send('About');
}); */

module.exports = publicRouter;
