const fs = require('fs');

// Create Folder
// fs.mkdir("shimul",(err)=>{
//     console.log("folder created");
// });

// Create File
// fs.writeFile("./shimul/bio.txt","I am Sabirul Isalm Shimul",(err)=>{
//     console.log('File Created');
// });

// Update File
// fs.appendFile("./shimul/bio.txt",". I am 34 years old.",(err)=>{
//     console.log("Files Updated Successfully.");
// })

// Read Data
// fs.readFile("./shimul/bio.txt","utf8",(err,data)=>{
//     console.log(data);
// })

// Rename File
// fs.rename("./shimul/bio.txt","./shimul/myBio.txt",(err)=>{
//     console.log("Rename File Done");
// });

// Delete A File
// fs.unlink("./shimul/myBio.txt",(err)=>{
//     console.log("File Deleted.");
// });

// Delete a Folder
fs.rmdir("./shimul",(err)=>{
    console.log("Folder Deleted");
});