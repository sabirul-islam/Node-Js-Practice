const fs = require("fs");

// create a folder
// fs.mkdirSync("thapa");

// create a file
// fs.writeFileSync("thapa/bio.txt","Hello I am vinod bahadur thapa.");

// Adding new line
// fs.appendFileSync("thapa/bio.txt"," Subscribe my channel. ");

// Read file
// const data = fs.readFileSync("thapa/bio.txt", "utf8");
// console.log(data);

// Rename file
// fs.renameSync("thapa/bio.txt","thapa/mybio.txt");

// Delete file
// fs.unlinkSync("thapa/mybio.txt");

// Delete folder
fs.rmdirSync("thapa");