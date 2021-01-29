// function printMe(){
//     console.log("Hello, " + this.name);
// }

// const object1 = {
//     name: "shimul",
//     age: 34
// }

// const object2 = {
//     name: "sabirul",
//     email: "sabirul.shimul@gmail.com"
// }

// // const binded1 = printMe.bind(object1);
// // const binded2 = printMe.bind(object2);

// // binded1();
// // binded2();

// printMe.call(object1);
// printMe.call(object2);

function add (a, b) {
    return (a + b) * this.c;
}

const object1 = {
    c: 3
}

const object2 = {
    c: 5
}

const response1 = add.call(object1, 10, 5);
const response2 = add.apply(object2, [10, 5]);
const binded = add.bind(object1);

console.log(binded(12,5));
console.log(response1);
console.log(response2);


function myFunc(c, d) {
    console.log(this);
    console.log(this.a + this.b + c + d);
}

myFunc.call({a: 40, b:25}, 10, 5);
myFunc.apply({a: 400, b:250}, [100, 50]);
// const binded = myFunc.bind({a:7, b:3}, 5, 5);
// binded();
const binded = myFunc.bind({a:7, b:3});
binded(5, 5);
// myFunc.apply({});
// myFunc();