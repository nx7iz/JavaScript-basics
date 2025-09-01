// // variables
// // let name = 'Ruxus';
// // console.log(name);

// // constants
// const interestRate = 0.3;
// // interestRate = 1;
// console.log(interestRate);

// /*
//  Primitives / value types
//  1. String
//  2. Number
//  3. Boolean
//  4. undefined
//  5. null
// */
// let name = 'Arceues'; // String
// let isAprroved = true; // Booleans
// let age = 20; // Number
// let firstName; // undefined
// let lastName = null; // null

// // Static
// // string name = 'Ruxus';

// // Dynamic
// let code = 'A1';

// /*
// Reference Type
// 1. Objects
// 2. Arrays
// 3. Functions
// */

// // Objects
// let person = {
//   // 2 keys / key-value pairs / properties
//   name: 'Ruxus',
//   age: 20
// };
// let favColor = 'color';
// person[favColor] = 'red';
// console.log(person);

// // Dot notation
// person.name = 'Arceus';
// console.log(person.name);

// // Bracket notation
// person['name'] = 'Ruxus';
// let selection = 'name';
// person[selection] = 'Laxie';
// console.log(person['name']);

// // Arrays (object) - data structure
// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 'green';
// selectedColors[3] = 3;
// selectedColors[4] = true;
// console.log(selectedColors);
// console.log(selectedColors.length);

// // Funtions
// function greet(name, lastName) {
//   // console.log('Hello ' + name + ' ' + lastName);
//   console.log(`Hello ${name + lastName}`)
// }
// greet('Ruxus', 'Arceus');

// function square(number) {
//   return number * number;
// }
// let number = square(3);
// console.log(number);

// Operators

// let x = 10;
// let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y); // Remainder
// console.log(x ** y); // Exponentiation (x to power of y)

// Increment (++)
// console.log(x++);
// console.log(x);

// Decrement (--)
// console.log(--x);
// console.log(x--);
// console.log(x);

// Assignment

// x += 5;
// x *= 3;
// console.log(x);

// Comparison
// Relational
// console.log(x >= 10);
// console.log(x < 0);

// Equality
// Strict Equality (Same --> Type + Value)
// console.log(10 === 10);
// console.log('10' === 10);

// Lose Equality (converts to same type)
// console.log(10 == 10);
// console.log('10' == 10);
// console.log(true == 0);

// Ternary

// let points = 110;
// let type = points > 100 ? 'gold' : 'silver';
// console.log(type);

// Logical operators

// //1. AND (&&)
// console.log(true && false);
// console.log(true && true);
// //2. OR(||)
// console.log(true || false);
// //3. NOT (!)
// console.log(true != true);

// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN (Not a Number)

// Anything not falsy --> Truthy

// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;
// console.log(currentColor);

// // Bitwise Operators
// // 1 = 00000001
// // 2 = 00000010
// // 3 = 00000011 (|)
// // 0 = 00000000 (&)

// console.log(1 | 2); // Bitwise OR (|)
// console.log(1 & 2); // Bitwise AND (&)

// Predence
// x =( 2 + 3) * 4;
// console.log(x);

// let a = 'red';
// let b = 'blue';
// console.log('Before',a);
// console.log(b);
// let c = a;
// a = b;
// b = c;
// console.log('After',a);
// console.log(b);

// console.log(1)
