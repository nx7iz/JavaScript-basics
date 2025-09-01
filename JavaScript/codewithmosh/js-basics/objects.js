
// const circle = {
//    radius: 1
// };
// circle.color = 'red';
// circle.draw = function() {}

// delete circle.color;
// delete circle.draw;
// console.log(circle);


// // Factory Function
// function createCircle(radius) {
//    return {
//       // if key and value == same i.e.(radius: radius) then we use this
//       radius,
//       // similarly for method
//       // draw: function (){
//       //    console.log('draw');
//       // }
//       draw() {
//          console.log('draw')
//       }
//    };
// }
// const circle = createCircle(1);
// // console.log(circle1);
// // circle1.draw();

// // Constructor Function
// function Circle(radius) {
//    this.radius = radius;
//    this.draw = function() {
//       console.log('draw');
//    }
// } 
// const Circle1 = new Function('radius', `
// this.radius = radius;
// this.draw = function() {
//    console.log('draw');
// }
// `);
// // const circle1 = new Circle1(1);

// Circle.call({}, 1);
// Circle.apply({}, [ 1 ]);

// const another = new Circle(1);
// // console.log(circle.radius);


// let x = { value: 10, color: 'red' };
// let y = x;

// x.value = 20;
// let obj =  { value: 10 };

// function increase(number) {
//    number.value++;
// }
// increase(obj);
// console.log(obj);


// Enumerating over properties in an objects
// const circle = {
//    radius: 1,
//    draw () {
//       console.log('draw');
//    }
// };

// for (let key in circle) 
//    console.log(key, circle[key]);

// // for - of --> arrays / maps ... obj is not iterable
// for (let key of Object.keys(circle))
//    console.log(key, circle[key]); 

// for (let entry of Object.entries(circle))
//    console.log(entry);   

// if ('radius' in circle) console.log('yes');




// const circle = {
//    radius: 1,
//    draw() {
//    }
// };

// Cloning objects
// 1. For in
// const another = {};
// for (let key in circle)
//    another[key] = circle[key];

// 2. Object.assign
// const another = Object.assign({
//    color: 'yellow'
// }, circle, x);

// 3. ... --> spread
// const another = { ...circle };
// console.log(another);

// Math obj
// function getRandomArbitary(max, min) {
//    return Math.random() * (max - min) + min;
// }
// console.log(getRandomArbitary(6, 3));


// const message = 'hi';
// // message.
// const another = new String('hi');

// // Date

// const now = new Date();
// const date1 = new Date('May 11 2018 09:00');
// const date2 = new Date(2018, 4, 11, 9);
// now.getDate();
// now.setFullYear(2017);
// console.log(now);

// const address = {
//    street:'North shore, 24th Avenue zone',
//    city: 'Los Angeles',
//    zipCode: 10520
// };

// let address1 = new Address('q', 'r', 1);
// let address2 = new Address('q', 'r', 1);

// function Address(street, city, zipCode) {
//    this.street = street;
//    this.city = city;
//    this.zipCode = zipCode; 
// }

// function areEqual(address1, address2) {
//    return address1.street === address2.street &&
//    address1.city === address2.city &&
//    address1.zipCode === address2.zipCode;
// }

// console.log(areEqual(address1, address2));

// function areSame(address1, address2) {
//    return address1 === address2
// }
// address1 = address2;
// console.log(areSame(address1, address2));


// const post = {
//    title: 'a',
//    body: 'b',
//    author: 'c',
//    views:  100,
//    comments: [
//       { author: 'a', body: 'b'},
//       { author: 'c', body: 'd'}
//    ],
//    isLive: true
// };

// console.log(post);


// function Post(title, body, author) {
//    this.title = title;
//    this.author = author;
//    this.body = body;
//    this.views = 0;
//    this.comments = [];
//    this.islive = false;
// }

// const post = new Post('a', 'b', 'c');
// console.log(post);

// const priceRanges = [
//    {label: "$", tooltip: "Inexpensive", min: 0, min: 10},
//    {label: "$$", tooltip: "Moderate", min: 11, min: 20},
//    {label: "$$$", tooltip: "Pricey", min: 21, min: 40}
// ];

// console.log(priceRanges);







// address-oriented Programming (OOP)

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
// Method --> function part of an address 
// Calling draw method of circle address
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
// // this adds the property to the 'new' address
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
//   this.location = 45;

// }


// const circle = new Circle(1);
/* 1. new creates a empty address (x = {})
   2. sets 'this' to point to new address
   3. returns this address
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

// // address.keys gives us string array
// for (let key of address.keys(circle)) 
//   console.log(key);

// // address.entries gives us array
// for (let entry of address.entries(circle)) 
//   console.log(entry);

// // 'in' to check if a property exists in address
// if ('radius' in circle) console.log('yes');
// if ('location' in circle) 
//   console.log('yes');
// else 
//   console.log('no');


// function address() {}
// const x = { value: 1 };
// const x = new address();


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


// // address.assign copies the properties and methods from one or more source addresss into targeted address to clone or combine multiple addresss into single address

// // let another = address.assign({}, circle);

// // 2nd way
// // let another = address.assign({
// //   color: 'yellow'
// // }, circle);

// // ... --> spread (takes all the properties and methods of targeted address and put it {...} here, where we call spread operator)
// const another = { ...circle };

// console.log(another);

// function getRandomArbitary(max, min) {
//    return Math.random() * (max - min) + min;
// }
// console.log(getRandomArbitary(5, 2));

// function max(array) {
//    let largest = array[0];
//    for  (let i = 0; i < array.length; i++)
//       if (array[i] > largest)
//          largest = array[i];
//    return largest;
// }
// console.log(max([1, 2, 3, 5, 6, 7,  10]))


// // String primitive 
// const message = 
// `This is my 
// first message`;

// console.log(message);
// // message.
// // String address
// const another = new String('hi');

// // Date
// const now = new Date();
// const date1 = new Date('May 11 2018 19:00');
// const date2 = new Date(2018, 4, 11, 9);
// console.log(date2);

// now.setFullYear(2017);

// 01 - Show Address
// const address = {
//    street:'24 Street, North Green Lake',
//    city: 'Miami',
//    zipCode: 4400
// };

// showAddress(address);

// function showAddress(address) {
//    for (let key in address)
//       console.log(key, address[key]);
// }


// 02 - Factory and Constructor function

// // Factory
// function showAddress(street, city, zipCode) {
//    return {
//       street,
//       city,
//       zipCode
//    }
// }
// console.log(showAddress('24 Street, North Green Lake', 'Miami', 1));

// // Constructor 
// function ShowAddress(street, city, zipCode) {
//    this.street = street;
//    this.city = city;
//    this.zipCode = zipCode;
// }

// const address = new ShowAddress('24 Street, North Green Lake', 'Miami', 1);

// console.log(address);


// 03 - Object Equality
// let address1 = new Address('a', 'b', 'c');
// let address2 = new Address('a', 'b', 'c');

// function Address(street, city, zipCode) {
//    this.street = street;
//    this.city = city;
//    this.zipCode = zipCode;
// }

// console.log(areEqual(address1, address2));
// // To check they have same properties
// function areEqual(address1, address2) {
//    return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode
// }

// console.log(areSame(address1, address2));

// // To check they have same address / reference
// function areSame(address1, address2) {
//    return address1 === address2;
// }


// 04 - Blog Post
// const post = {
//    title:'Wick',
//    body:'about movie',
//    author:'Ruxus',
//    views:15203,
//    comments: [
//       { author:'userId', body: 'user' },
//       { author:'userId2', body: 'you' }
//    ],
//    isLive: true
// };



// 05 - Constructor

// const post = new Post('a', 'b', 'c');
// console.log(post);

// function Post(title, body, author) {
//    this.title = title;
//    this.body = body;
//    this.author = author;
//    this.views = 0;
//    this.comments = [];
//    this.isLive = false;
// }


// 06 - Price Range Object

// const priceRanges = [
//    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
//    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
//    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
// ];
// console.log(priceRanges);






