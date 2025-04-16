
// 1. Adding elements to array
// const numbers = [3, 4];

// // End --> push
// numbers.push(5, 6);
// console.log(numbers);

// // Beginning --> unshift
// numbers.unshift(1, 2);

// // Middle --> splice
// numbers.splice(2, 0, 4.5);

// console.log(numbers);


// 2. Finding elements (primitive)
// const numbers = [ 1, 2, 3, 1, 4 ];
// console.log(numbers.indexOf(1, 2));
// console.log(numbers.lastIndexOf(1));

// to check if a number exists in an array
// console.log(numbers.indexOf(7) !== -1);
// console.log(numbers.includes(1));

// 2a. Finding elements (objects --> reference)

// const courses = [ 
//   { id: 1, name: 'a'},
//   { id: 2, name: 'b'},
//   { id: 3, name: 'c'}
// ];

// console.log(courses.includes({id: 1, name: 'a'}));
// Predicate find function
// const course = courses.find(function(course) {
//   return course.id === 3;
// });

// Arrow function synatx when we pass funtion as a parameter
// const course1 = courses.find(course => course.name === 'a'); 
// const course2 = courses.find(course => course.id === 2);
// console.log(course2);

// 3 Remove Elements
// const numbers = [1, 2, 3, 4];
// End
// const last = numbers.pop();
// console.log(numbers);
// console.log(last);
 
// // Beginning
// const first = numbers.shift();
// console.log(numbers);
// console.log(first);

// Middle
// const middle = numbers.splice(2, 2);
// console.log(numbers);
// console.log(middle);


// 4 Emptying an array
// let numbers = [1, 2, 3, 4]
// let another = numbers;

// Solution 1 -> 2nd (valid if we don't have another variable pointing to array)
// numbers = [];

// // Solution 2 -> 1st
// numbers.length = 0;

// Solution 3 -> 3rd
// numbers.splice(0, numbers.length);

// Solution 4 -> 4th
// while (numbers.length > 0)
//   numbers.pop();

// console.log(another);
// console.log(numbers);

// 5 Combining array
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const slice = combined.slice(3);
console.log(combined);
console.log(slice);


