// const object = {
//     name: 'shimul',
//     print: function() {
//         console.log(this);
//     }
// };

// function myFunction() {
//     function inner(){
//         console.log(this);
//     }
//     new inner();
// }

// const person = {
//     name: "shimul",
//     print: function(){
//         console.log(this);
//         console.log("Hello: " + this.name);
//     }
// }

// person.print();

// person.print();

// const myName = person.name;
// console.log(myName);

// const myPrint = function(){
//     console.log(this);
//     console.log("Hello: " + this.name);
// }


// const myPrint = person.print.bind(person);
// console.log(myPrint);
// myPrint();

// function add (num) {
//     console.log(this);
//     return this.value + num;
// }

// const object ={
//     value: 30
// };

// const bindedObject = add.bind(object);
// const result = bindedObject(100);

// console.log(result);

// const person = {
//     name: 'shimul',
//     print: function(){
//         // const person = this.name;
//         setTimeout(function(){
//             console.log(this);
//             console.log('Hello ' + this.name);
//         }.bind(this), 2000);
//     }
// };

function myFunction(){
    console.log(this);
}
new myFunction();