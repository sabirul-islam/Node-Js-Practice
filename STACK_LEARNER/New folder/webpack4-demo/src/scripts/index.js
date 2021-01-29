import '../styles/index.scss'

// import { sum, sub  } from './math'

// console.log('Hello Webpack 4')

// console.log(sum(10, 20))
// console.log(sub(10, 20))

// alert('Yes, I have done everything perfectly.')

// const s = `hdkjs
// jhsahdjkhsakj
// sakjdgsjhahdjkash
//  iosiaudioas    djhsajkhdisd`
//  console.log(s.trim());


// (temaplate String)
// const age = 34;
// const name = 'shimul'

// console.log("My Name is " + name + " and I am " + age + " years old.");

// console.log(`My name is ${name} and I am ${age} years old. I am${age>=18?"":" not "} adult.`);

// console.log(name.padStart(15, '*'));
// console.log(name.padEnd(15, 'a'));
// console.log('S'.repeat(10));


// (var, let, const)

// const a = 10;
// a = 100;
// console.log(a);

// let a = 10;
// a = 100;
// console.log(a);

// var a = 10;
// a = 100;
// console.log(a);

// if(true){
//     let a = 10;
// }
// // console.log(a);

// for (let i = 0; i < 5; i++){

// }
// // console.log(i);

// {
//     let iamLet = 'I am let';
// }
// // console.log(iamLet);

// (function() {
//     var abc = 'ABC';
//     console.log(abc);
// })()
// console.log(abc);


// (Arrow)
// function add(a, b){
//     return a + b;
// }

// const add = (a, b) => {
//     return a + b;
// }

// const sqr = x => x*x;

// const add = (a, b) =>  a + b;

// console.log(add(5,7));
// console.log(sqr(2));

// function testMe(){
//     console.log(this);
// }
// testMe.call({});

// const obj = {
//     name: "Shimul",
//     print: () => {
//         console.log(this);
//     }
// }
// obj.print();


// // (Arrow This)
// const obj = {
//     name: "Shimul",
//     print: function () {
//         // const self = this;
//         // setTimeout(function (){
//         //     console.log(this);
//         //     console.log(`Hello, ${this.name}`);
//         // }.bind(this), 1000)
//         setTimeout(()=>{
//             console.log(this);
//             console.log(`Hello, ${this.name}`);
//         }, 1000)
//     }
// }
// obj.print();



// Default parameter
// function sqr(n=1){
//     // if(!n){
//     //     n=1;
//     // }

//     // n = n || 1;

//     return n * n;
// }

// console.log(sqr());

// function greet(name='shimul',msg='hello'){
//     console.log(name.length);
//     console.log(`${msg}! ${name}`);
// }
// greet(null,'Hello');



// // Iterator
// const obj = {
//     start: 1,
//     end: 10,
//     [Symbol.iterator]: function(){
//         let currentValue = this.start;
//         const self = this;
//         return{
//             next() {
//                 return{
//                     done: currentValue > self.end,
//                     value: currentValue++
//                 }
//             }
//         }
//     }
// }

// for(const v of obj){
//     console.log(v);
// }



// // Rest and Spread Operator
// function sum(...rest){
//     // let sum = 0;
//     // for(let i = 0; i < arguments.length; i++){
//     //     sum += arguments[i];
//     // }
//     // return sum;
//     return rest.reduce((a,b) => a + b);
// }

// console.log(sum(1,2,3,4,5));

// let a = [1,2,3,4,5];
// console.log(...a);

// let obj = {
//     a:10,
//     b:20,
//     c:30
// }

// let obj2 = {
//     ...obj
// }
// console.log(obj2);



// Object
// let a= 10, b= 20

// let obj={
//     a,
//     b,
//     print(){
//         console.log(this);
//     }
// }

// obj.print();


// // destructuring
// const person ={
//     name: "shimul",
//     email: "sabirul.shimul@gmail.com",
//     address: {
//         city: "San Francisco",
//         country: "USA"
//     }
// }

// const {name, email, address:{city, country}} = person;
// console.log(name, email, city);

// let array = [1, 2, 3, 4, 5];

// let [one, ,,, five] = array;

// console.log(one, five);



// // Convvert Object Array
// const obj = {
//     a: 10,
//     b: 20
// }
// console.log(Object.entries(obj));

// const objArray = [
//     ['a', 10],
//     ['b', 20]
// ];
// console.log(Object.fromEntries(objArray));




// Symbol es6
// const s1 = Symbol();
// const s2 = Symbol('test symbol');

// console.log(s1);
// console.log(s2);
// console.log(s1===s2);




// (Iterator)
// const array = [1, 2, 3];

// for (let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// function createIterator(collection){
//     let i = 0;
//     return {
//         next() {
//             return {
//                 done: i>=collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }

// let iterator = createIterator(array);

// let iterator = array[Symbol.iterator]();

// let obj = {
//     start: 1,
//     end: 5,
//     [Symbol.iterator]: function* (){
//         let currentValue = this.start;
//         while(currentValue <= this.end){
//             yield currentValue++;
//         }
//     }
// }

// let iterator = obj[Symbol.iterator]()

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.dir(iterator.next);

// console.log(array[Symbol.iterator]);
// console.log('str'[Symbol.iterator]);

// let str = 'TEXT';
// let iterateText = str[Symbol.iterator]()

// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());

// for(let v of array) {
//     console.log(v);
// }

// for (let v of 'shimul'){
//     console.log(v);
// }

// let obj = {
//     a:10,
//     b:20
// }
// for(let v of obj){
//     console.log(v);
// }


// function* generate() {
//     yield 1
//     yield 2
//     yield 3
// }

// function* generate(collection){
//     for(let i = 0; i < collection.length; i++){
//         yield collection[i];
//     }
// }

// let it = generate(array);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// let set = new Set([1, 2, 3]);
// // let set = new Set();
// set.add(5);
// set.add(6);
// set.add(1);
// set.add(2);
// console.log(set);
// console.log(set.size);
// set.clear();
// set.delete(5);
// console.log(set.has(5));
// console.log(set.toJSON());
// console.log(set.keys());
// console.log(set.values());
// let keyIterator = set.keys();

// let keyIterator = set.values();
// console.log(keyIterator.next());

// function isIterable(obj) {
//     return typeof obj[Symbol.iterator] === 'function'
// }

// console.log(isIterable(set));

// for (let v of set) {
//     console.log(v);
// }

// console.log(set.entries());

// let map = new Map([
//     ['a', 10],
//     ['b', 20],
//     ['c', 30]
// ])
// map.set('d',40)
// map.set({name: 'shimul'}, 45)
// map.delete('c')
// console.log(map);
// console.log(map.size);
// console.log(map.get('b'));
// console.log(map.values());
// console.log(map.keys());
// console.log(map.entries());
// for(let [k, v] of map){
//     console.log(k, v);
// }
// map.forEach((v,k)=>{
//     console.log(k,v);
// })

// let a = {a: 10}, b = {b: 20}
// let set = new Set([a,b]);
// a = null;
// console.log(set);

// let arr = [...set];
// console.log(arr[0]);

// let weakSet = new WeakSet([a, b]);
// a = null
// console.log(weakSet);


// let weakMap = new WeakMap([[a, 45], [b, 75]])
// a= null
// console.log(weakMap.get(a));
// console.log(weakMap.has(a));
// console.log(weakMap.has(b));



// ES6 Class
// function Rectangle(width, height){
//     this.width = width
//     this.height = height
// }

// Rectangle.prototype.draw = function () {
//     console.log(this);
//     console.log('Drawing...');
// }
// let rect1 = new Rectangle(12, 15)

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//         this.another = function() {

//         }
//     }

//     // name = 'shimul'

//     draw() {
//         console.log(this);
//         console.log('Drawing...');
//     }

//     test () {

//     }
// }

// let rect1 = new Rectangle(45, 23);
// console.log(rect1);


// class Person {
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }

//     print() {
//         console.log(this.name, this.email);
//     }

//     test() {

//     }

//     static create(str){
//         let person = JSON.parse(str)
//         return new Person(person.name, person.email)
//     }
// }

// let str = '{"name": "shimul", "email": "sabirul.shimul@gmail.com"}'

// let p1 = Person.create(str)
// console.log(p1);
// console.log(p1 instanceof Person);
// p1.print();

// let test = p1.test
// test();


// 'use strict';

// function Shape() {
//     this.draw = function() {
//         console.log(this);
//     }
// }

// let s1 = new Shape();
// // s1.draw();
// let anotherDraw = s1.draw;
// anotherDraw();


// const _radius = Symbol()
// const _name = Symbol()
// const _draw = Symbol()
// class Circle{
//     constructor(radius, name){
//         this[_radius] = radius;
//         this[_name] = name;
//     }

//     [_draw](){
//         console.log('Drawing.....');
//     }
// }

// let c1 = new Circle(2, 'CRED');
// console.log(c1);
// let key = Object.getOwnPropertySymbols(c1)[1]
// console.log(c1[key]);




// const _radius = new WeakMap()
// const _name = new WeakMap()
// const _resize = new WeakMap()

// class Circle{
//     constructor(radius, name){
//         this.size = 100;
//         _radius.set(this, radius)
//         _name.set(this, name)
//         _resize.set(this, () => {
//             console.log(this.size);
//         })
//     }

//     get radius() {
//         return _radius.get(this)
//     }

//     set radius(value) {
//         _radius.set(this, value)
//     }

//     draw(){
//         console.log('Drawing.....');
//         console.log(_radius.get(this), _name.get(this));
//         _resize.get(this)();
//     }
// }
// let c1 = new Circle(2, 'CRED');
// c1.draw();
// c1.radius = 20;
// console.log(c1.radius);


// inheritance
// class Shape {
//     constructor(color) {
//         this.color = color;
//     }

//     draw() {
//         console.log('Drawing ......');
//     }
// }

// class Rectangle extends Shape {
//     constructor(color, width, height) {
//         super(color)
//         this.width = width;
//         this.height = height;
//     }

//     draw() {
//         console.log('Drawing rectangle');
//     }

//     calculate(){
//         return this.width * this.height;
//     }
// }

// import Rectangle from './Rectangle';

// let r = new Rectangle('Green', 4, 5);
// console.log(r);
// r.draw()

// import * as func from './func';
// import {add, times}  from './func';
// const {add,times} = func;
// console.log(add(45,10));
// console.log(times(45,10));
