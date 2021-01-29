// const rect ={
//     width: 100,
//     height: 50,
//     draw: function(){
//         console.log('I am rectangle.');
//         this.printProperties();
//         // console.log(this);
//     },
//     printProperties: function(){
//         console.log("My width is " + this.width);
//         console.log("My height is " + this.height);
//     }
// }


// rect.draw();

// // rect.height = 30;

// // rect.draw();

// const another = {
//     width: 47,
//     height: 56,
//     print: rect.printProperties
// }

// another.print();

// Factory Pattern
// const createRect = function(width, height){
//     return {
//         width: width,
//         height: height,
//         draw: function(){
//             console.log('I am rectangle.');
//             this.printProperties();
//         },
//         printProperties: function(){
//             console.log("My width is " + this.width);
//             console.log("My height is " + this.height);
//         }
//     }
// }

// const rectangle1 = createRect(10,8);
// rectangle1.draw();

// const rectangle2 = createRect(40,30);
// rectangle2.draw();

// constructor pattern
// const Rectangle = function(width,height) {
//     this.width = width
//     this.height = height
//     this.draw = function(){
//         console.log('I am rectangle.');
//         this.printProperties();
//     }
//     this.printProperties = function(){
//         console.log("My width is " + this.width);
//         console.log("My height is " + this.height);
//     }
// }

// const rect3 = new Rectangle(10,80);
// rect3.draw();

// function myNew(constructor) {
//     const obj = {};
//     Object.setPrototypeOf(obj, constructor.prototype);
//     const args = Array.prototype.slice.apply(arguments);
//     constructor.apply(obj, args.slice(1));
//     return obj;
// }

// const rect4 = myNew(Rectangle, 45, 30);
// rect4.draw();

// const str = new String('str');
// console.log('My string is ' + str);

// function test() {
//     console.log('somthing');
// }

// console.log(test.name, test.length);

// const Rect = new Function('width', 'height', 
//     `this.width = width
//     this.height = height
//     this.draw = function(){
//         console.log('I am rectangle.');
//         this.printProperties();
//     }
//     this.printProperties = function(){
//         console.log("My width is " + this.width);
//         console.log("My height is " + this.height);}`)

// const rect5 = new Rect(4, 5)
// console.log(rect5);



// const Rectangle = function(width,height) {
//     this.width = width
//     this.height = height
//     let position ={
//         x: 56,
//         y: -100
//     }

//     const printProperties = function(){
//         console.log("My width is " + this.width);
//         console.log("My height is " + this.height);
//     }.bind(this);

//     // this.getPosition = function () {
//     //     return position;
//     // }

//     this.draw = function(){
//         console.log('I am rectangle.');
//         printProperties();
//         console.log('Position: X= ' + position.x + ' Y= ' + position.y);
//     }

//     Object.defineProperty(this, 'position', {
//         get:function(){
//             return position;
//         },
//         set: function(value){
//             position = value;
//         }
//     })
// }

// const rect7 = new Rectangle(45, 30);
// rect7.draw(47,56);
// // console.log(rect7.getPosition());
// rect7.position = {
//     x: 456,
//     y: -123
// }
// console.log(rect7.position);


// inheritance
// function Person(name) {
//     this.name = name;
// }

// const person = new Person("shimul");
// console.log(person);

// const person = {
//     name: "shimul"
// }
// console.log(person);

// for (const i in person) {
//     console.log(i);
// }

// console.log(Object.keys(person));

// const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
// console.log(descriptor);

// const baseObject = Object.getPrototypeOf(person)
// const descriptor = Object.getOwnPropertyDescriptor(baseObject, 'toString');
// console.log(descriptor);

// Object.defineProperty(person, 'name', {
//     enumerable: false,
//     writable: false,
//     configurable: false,
//     value: "sabirul Islam"
// })

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.PI = 3.1416;

// const p1 = new Person('sabirul');
// const p2 = new Person('shimul');

// // console.log(Object.getPrototypeOf(p1));
// // console.log(Person.prototype);

// console.log(p1);
// console.log(p2);


