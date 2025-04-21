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
//   alert(e);
// }

// console.log(person);


// Local vs Global scope

   




















