
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

// const another = createCircle(2);
// console.log(another);

// Constructor Function (Pascal Notation)

// function Circle(radius) {
// // this adds the property to the 'new' object
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
//   this.location = 45;

// }


// const circle = new Circle(1);
/* 1. new creates a empty object (x = {})
   2. sets 'this' to point to new object
   3. returns this object
*/
// console.log(circle);


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


// let x = { value: 10};
// let y = x;

// x.value = 20;

// let obj = { value: 10 };
// function increase(obj) {
//   obj.value++;
// }

// increase(obj);
// console.log(obj);

 
// const circle = {
//   radius: 1,
//   draw() {
//     console.log('draw');
//   }
// };

// for (let key in circle) 
//   console.log(key, circle[key]);

// // Object.keys gives us string array
// for (let key of Object.keys(circle)) 
//   console.log(key);

// // Object.entries gives us array
// for (let entry of Object.entries(circle)) 
//   console.log(entry);

// // 'in' to check if a property exists in object
// if ('radius' in circle) console.log('yes');
// if ('location' in circle) 
//   console.log('yes');
// else 
//   console.log('no');


// function Object() {}
// const x = { value: 1 };
// const x = new Object();


// const circle = {
//   radius: 1,
//   draw() {
//     console.log('draw');
//   }
// };


// // let another = {};
// // for (let key in circle) {
// //   another[key] = circle[key];
// //   console.log(another);
// // }


// // Object.assign copies the properties and methods from one or more source objects into targeted object to clone or combine multiple objects into single object

// // let another = Object.assign({}, circle);

// // 2nd way
// // let another = Object.assign({
// //   color: 'yellow'
// // }, circle);

// // ... --> spread (takes all the properties and methods of targeted object and put it {...} here, where we call spread operator)
// const another = { ...circle };

// console.log(another);

