const fs = require("fs");
// fs.writeFileSync("read.txt", "welcome to my channel");
// fs.writeFileSync("read.txt", "Backend developer Bangladesh, welcome to my channel");
// fs.appendFileSync("read.txt", "How r u ? I am fine thank you.");

// const buf_data = fs.readFileSync("read.txt");
// org_data = buf_data.toString();
// console.log(org_data);

// renmae file name
fs.renameSync("read.txt", "readwrite.txt");