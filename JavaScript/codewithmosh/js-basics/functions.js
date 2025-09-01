// Hoisting -> process of moving Function Declarations on top of file ... done automatically by JS Engine

// Function Decleartion
// walk();

// function walk() {
//   console.log('walk');
// }

// // Named Fucntion Expression
// // let run = function walk() {
// //   console.log('run');
// // };

// // Anonymous Fucntion Expression
// let run = function () {
//   console.log('run');
// };

// Arguments
// function sum() {
//   let total = 0;
//   for (let value of arguments) total += value;

//   // console.log(arguments);
//   return total;
// }

// Rest operator (...parameter)
// function sum(discount, ...prices) {

//   const total = prices.reduce((a, b) => a + b);
//   return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30));

// Default Parameters
// function interest(principal, rate = 3.5, years = 5) {

//   // rate = rate || 3.5;
//   // years = years || 5;

//   return principal * rate / 100 * years;

// }

// console.log(interest(10000));

// Getters Setters

// const person = {
//   firstName: 'Ruxus',
//   lastName: 'Arceus',
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`
//   },
//   set fullName(value) {
//     const parts = value.split(' ');
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// };

// person.fullName = 'Helios Liqx'; // value to the set method

// // split --> string to array

// // getters => access properties
// // setters => change (mutate) them

// console.log(person);

// Try and Catch --> Defensive programming
// const person = {
//   firstName: "Ruxus",
//   lastName: "Arceus",
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     // const e = new Error(); --> error
//     // throw e; --> Exception

//     if (typeof value !== "string") throw new Error("Value is not a string.");

//     const parts = value.split(" ");
//     if (parts.length !== 2) throw new Error("Enter a first and last name");

//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };
// try {
//   person.fullName = "";
// } catch (e) {
//   console.log(e.message);
// }

// console.log(person);

// Local vs Global scope

// const color = "red";

// function start() {
//   const message = "hi";
//   const color = 'blue';
//   console.log(color);
// }

// function stop() {
//   const message = "bye";
// }

// start();

// function start() {
//   for (var i = 0; i < 5; i++) {
//     if (true) {
//       var color = 'red';
//     }
//   }
//   console.log(color);
// }
// start();

// var color = 'red';
// let age = 30;

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     // const self = this;
//     // using .bind()
//     // using arrow functions
//     this.tags.forEach(tag => {
//       console.log(this.title, tag);
//     });
//   },
// };
// video.showTags();

// function playVideo(a, b) {
//   console.log(this);
// }

// playVideo.call( {name: 'Ziv'}, 1, 2);
// playVideo.apply( {name: 'Ziv'}, [1, 2]);
// playVideo.bind( {name: 'Ziv'})();

// playVideo();

// video.stop = function() {
//   console.log(this);
// };

// function Video(title) {
//   this.title = title;
//   console.log(this);
// }
// // video.stop();
// const v = new Video('b');

// Exercise 1
// function sum(array) {
//   let total = 0;

//   if (Array.isArray(array)) {
//     for (let value in array) {
//       total += array[value];
//     }
//   }
//   console.log(total);
//   // return total;
// }

// function sum(...items) {
//   if (items.length === 1 && Array.isArray(items[0]))
//     items = [...items[0]];

//   return items.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 4));

// console.log(sum([1, 2, 3, 4]));

// Exercise 2

// const circle1 = {
//   radius: 1,
//   get area() {
//     return Math.PI * this.radius * this.radius;
//   }
// };
// circle1.radius = 2;console.log(circle1.area);

// Exercise 3
// try {
//   const numbers = [1, 2, 3, 4];
//   const count = countOccurences(null, 1);
//   console.log(count);
// } catch (e) {
//   console.log(e.message);
// }

// function countOccurences(array, searchElement) {
//   if (!Array.isArray(array)) throw new Error("Invalid array.");

//   return array.reduce((accumulator, current) => {
//     const occurrence = current === searchElement ? 1 : 0;
//     return accumulator + occurrence;
//   }, 0);
// }
