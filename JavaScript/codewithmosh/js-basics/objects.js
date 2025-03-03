
// Object-oriented Programming (OOP)

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   },
//   isVisible: true,
//   draw: function() {
//     console.log('draw');
//   }
// };
// Method --> function part of an object 
// Calling draw method of circle object
// circle.draw(); // Method

// Factory Function
// function createCircle(radius, location) {
//   return {
//     // location: location,
//     // isVisible: true,
//     radius,
//     draw() {
//       console.log('draw');
//     }
//   };
// }
// const circle1 = createCircle(1);
// console.log(circle1);

// const circle2 = createCircle(2);
// console.log(circle2);

// Constructor Function (Pascal Notation)

function Circle(radius) {
// this adds the property to the 'new' object
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
  this.location = 45;

}


const circle = Circle.call({}, 1)
/* 1. new creates a empty object (x = {})
   2. sets 'this' to point to new object
   3. returns this object
*/
console.log(circle);


// Built-in Constructor function for String
// let s1 = new String('Arceus');
// s1 += ' Ruxus';
// console.log(s1);


// const circle = {
//   radius: 1
// };

// circle.color = 'yellow';
// circle.draw = function() {}

// delete circle.draw;
// console.log(circle);








