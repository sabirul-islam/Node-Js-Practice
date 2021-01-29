// const path = require('path');
// const os = require('os');
// const fs = require('fs');
const EventEmitter = require('events');

const emitter = new EventEmitter();

const School = require('./school');

// const myPath = 'E:/Learn With Sumit/practise/index.js';

// console.log(path.parse(myPath));

// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.cpus());

// fs.writeFileSync('myFile.txt', 'Hello programmers');
// fs.appendFileSync('myFile.txt', '. How are you?');
// fs.readFile('myFile.txt', (err, data) => {
//     console.log(data.toString());
// });
// console.log('hello');

const school = new School();

school.on('bellRing', ({ period, text }) => {
  console.log(`we need to run because ${period} ${text}`);
});

school.startPeriod();
