// function person (name, age) {
//     this.name = name;
//     this.age = age;
//     this.hello = function() {
//         console.log('Hello' + this.name);
//     }
// }

function person (name, age) {
    this.name = name;
    this.age = age;
}

// person.prototype.hello = function() {
//     console.log('Hello' + this.name);
// }

// person.prototype.print = function() {
//     console.log(this.name, this.age);
// }

// person.prototype.email = "sabirul.shimul@gmail.com";

person.prototype = {
    hello: function() {
        console.log("Hello " + this.name);
    },
    print: function() {
        console.log(this.name, this.age);
    },
    email: "sabirul.shimul@gmail.com"
}

const person1 = new person("shimul", 34);
console.log(person1);
const person2 = new person("sabirul", 32);
console.log(person2);

// console.log(person.prototype);