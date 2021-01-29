function Person(name, email) {
    this.name = name;
    this.email = email;
    this.print = function() {
        console.log("name: " + this.name);
    }
}

const p1 = new Person('shimul','sabirul.shimul@gmail.com');
const p2 = new Person('sabirul','sabirul@gmail.com');
const p3 = new Person('shumit','shumit@gmail.com');

const people = [p1, p2, p3];

// for(const props in p1){
//     console.log("properties: " + props);
// }

// console.log(p1.name);
// console.log(p1.email);
// console.log(people);

// people.forEach(function(person){
//     // console.log("Email: "+person.email);
//     // console.log("Name: " + person.name);
//     person.print();
// });

function Book(name,author,price){
    this.name = name;
    this.author = author;
    this.price = price;
}

const book = new Book('javascript','sabirul',20);

console.log(book.constructor);