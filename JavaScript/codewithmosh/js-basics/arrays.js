
// 1. Adding elements to array
// const numbers = [ 3, 4];

// // End --> push
// numbers.push(5, 6);

// // Beginning --> unshift
// numbers.unshift(1, 2);

// // Middle --> splice
// numbers.splice(2, 0, 'a', 'b');

// console.log(numbers);


// 2. Finding elements (primitive)
// const numbers = [ 1, 2, 3, 1, 4 ];
// console.log(numbers.indexOf(1, 22));
// console.log(numbers.lastIndexOf(1));

// console.log(numbers.indexOf(7) !== -1);
// console.log(numbers.includes(1));

// 2a. Finding elements (objects --> reference)

const courses = [ 
  { id: 1, name: 'a'},
  { id: 2, name: 'b'},
  { id: 3, name: 'c'}
];

// console.log(courses.includes({id: 1, name: 'a'}));

// const course = courses.find(function(course) {
//   return course.id === 3;
// });

// Arrow function synatx when we pass funtion as a parameter
const course1 = courses.find(course => course.name === 'a'); 
const course2 = courses.find(course => course.id === 2);
console.log(course2);




