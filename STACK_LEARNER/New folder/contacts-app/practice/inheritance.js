// function person(){
//     this.name = "shimul";
// }

// function teacher(){
//     person.call(this);
//     this.subject = "rocket science";
// }

// const teacherNew = new teacher();

// const newName = teacherNew.name;

// console.log(newName);

// function person (name) {
//     this.name = name;
// }

// person.prototype.printName = function(){
//     console.log("Name: " + this.name);
// }

// function student (name, id) {
//     person.call(this, name);
//     this.id = id;
// }

// student.prototype = Object.create(person.prototype);

// const studentNew = new student("shimul", 1660);



// function extend (Parent, Child) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }

// function Shape(color) {
//     this.color = color;
// }

// Shape.prototype.common = function() {
//     console.log('I am common');
//     }


// function Square(width, color) {
//     Shape.call(this, color);
//     this.width = width;
// }

// extend(Shape, Square);

// Square.prototype.draw = function() {
//     console.log('Drawing');
// }

// Square.prototype.common = function() {
//     // Shape.prototype.common.call(this);
//     console.log('I am calling from square.');
// }


// // const shape = new Shape();
// const sqr = new Square(45, 'green');

// function Circle(radius, color) {
//     Shape.call(this, color);
//     this.radius = radius;
// }
// extend(Shape, Circle);

// Circle.prototype.common = function() {
//     // Shape.prototype.common.call(this);
//     console.log('I am calling from circle.');
// }

// const c = new Circle(4, 'Black');

// const s = new Shape('purple');

// const shapes = [s, c, sqr];

// for(const i of shapes){
//     i.common();
// }



