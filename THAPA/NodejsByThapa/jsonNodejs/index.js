const fs = require('fs');
const bioData = {
    name: 'shimul',
    age: '34',
    channel: 'Backend developer bangladesh'
};

// // Object to json
// const json = JSON.stringify(bioData);
// console.log(json);

// // json to Object
// const obj = JSON.parse(json);
// console.log(obj);

// // Write File
// const jsonData = JSON.stringify(bioData);
// fs.writeFile("json1.json", jsonData, (err) => {
//     console.log("done");
// });

fs.readFile("json1.json", "utf-8", (err, data) => {
    console.log(data);
    const originalData = JSON.parse(data)
    console.log(originalData);
})