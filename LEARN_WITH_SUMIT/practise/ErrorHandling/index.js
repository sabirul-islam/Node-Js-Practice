/* eslint-disable no-lonely-if */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res, next) => {
    // fs.readFile('file-does-not-exist', (err, data) => {
    //     if (err) {
    //         next(err);
    //     } else {
    //         res.send(data);
    //     }
    // });

    setTimeout(() => {
        try {
            console.log(a);
        } catch (err) {
            next(err);
        }
    }, 100);
});

app.use((err, req, res, next) => {
    if (res.headerSent) {
        next('there was a problem');
    } else {
        if (err.message) {
                    res.status(500).send(err.message);
                  } else {
                    res.status(500).send('there was an error');
                }
    }
});

// app.get('/', (req, res) => {
//   for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//       next('there was an error');
//     } else {
//       res.write('a');
//     }
//   }
//   res.end();

//   //   throw new Error('error');
//   //   res.send(a);
//   //   res.send('Hello world');
// });

// // 404 error handler
// app.use((req, res, next) => {
//   //   res.status(404).send('Requested url was not found');
//   next('Requested url was not found');
// });

// app.use((err, req, res, next) => {
//   // handling error here
//   if (res.headerSent) {
//     next('there was a problem');
//   } else {
//     // eslint-disable-next-line no-lonely-if
//     if (err.message) {
//         res.status(500).send(err.message);
//       } else {
//         res.status(500).send('there was an error');
//     }
//   }
// });

app.listen(8080, () => {
  console.log('app listening on port 8080');
});
