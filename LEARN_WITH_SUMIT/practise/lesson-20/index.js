const express = require('express');

const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

const adminRouter = express.Router();

const loggerWrapper = (options) => function (req, res, next) {
    if (options.log) {
      console.log(
        `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${
          req.protocol
        } - ${req.ip}`,
      );
      next();
    } else {
      throw new Error('Failed to log');
    }
  };

// const logger = (req, res, next) => {

// //   throw new Error('This is error');
//     next();
//   //   res.end();
// };

adminRouter.use(loggerWrapper({ log: false }));

adminRouter.get('/dashboard', (req, res) => {
  res.send('Dashboard');
});
app.use('/admin', adminRouter);

app.get('/about', (req, res) => {
  res.send('About page');
});

const errorMiddleware = (err, req, res, next) => {
  console.log(err.message);
  res.status(500).send('there was a server side error');
};

adminRouter.use(errorMiddleware);

app.listen(8080, () => {
  console.log('Listen');
});
