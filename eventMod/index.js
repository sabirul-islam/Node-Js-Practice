const EventEmitter = require('events');

const event = new EventEmitter();

// event.on('sayMyName',()=>{
//     console.log("Your name is Md.");
// });

// event.on('sayMyName',()=>{
//     console.log("Your name is Sabirul");
// });

// event.on('sayMyName',()=>{
//     console.log("Your name is Islam");
// });

// event.on('sayMyName',()=>{
//     console.log("Your name is Shimul.");
// });

// event.emit('sayMyName');

event.on('checkPage', (sc, msg) => {
    console.log(`status code is ${sc} and message is ${msg}`);
})

event.emit('checkPage', 200, "ok");