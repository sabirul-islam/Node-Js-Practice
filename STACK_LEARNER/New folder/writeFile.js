const fs = require('fs');

const testObj = {
    name: 'shimul',
    email: 'sabirul.shimul@gmail.com',
    address: {
        city: 'sarishabari',
        country: 'Bangladesh'
    }
}

const data = JSON.stringify(testObj);

fs.writeFile('test.json', data, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Flie Writing Successful');
    }
})