const express = require('express');
const morgan = require('morgan');
const userRouter = require('./userRoute');
const postRouter = require('./postRoute');

const app = express();

// function customMiddleware(req, res, next) {
//     if(req.url==='/help'){
//         res.send('<h1>I am blocked by admin</h1>');
//     }
//     next();
// }

// function tinylogger(){
//     return(req,res,next)=>{
//         console.log(`${req.method} - ${req.url}`);
//         next();
//     }
// }

// const middleware = [customMiddleware, tinylogger()];

// app.use(middleware);

app.use(morgan('dev'));

// app.get('/about', morgan('dev'), (req, res) => {
//     // res.send('<h1>I am about page</h1>');
//     res.json({
//         message: 'I am about page'
//     });
// });

// app.get('/help', (req, res) => {
//     res.send('<h1>I am help page</h1>');
// });

// User Router Start

// User Router End

app.use('/user', userRouter);
app.use('/posts', postRouter);

// app.get('/products/:productId/reviews/:reviewId',(req, res)=>{
//     console.log(req.params);
//     res.send('I am listening' + req.params.productId);
// });

app.get('/', (req, res) => {
    res.send('<h1>Node js is awesome</h1>');
});

// app.get('*', (req, res) => {
//     res.send('<h1>404, Page Not Found</h1>');
// });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});