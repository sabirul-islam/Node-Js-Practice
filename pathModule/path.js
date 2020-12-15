const path = require('path');

// Path Name
// console.log(path.dirname('E:/Thapa Nodejs/pathModule/path.js'));

// Extension Name
// console.log(path.extname('E:/Thapa Nodejs/pathModule/path.js'));

// File Name
// console.log(path.basename('E:/Thapa Nodejs/pathModule/path.js'));

// Parse
// console.log(path.parse('E:/Thapa Nodejs/pathModule/path.js'));

// accessing property of parse
const pathName = path.parse('E:/Thapa Nodejs/pathModule/path.js');
console.log(pathName.root);
