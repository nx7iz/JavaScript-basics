
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
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// const slice = combined.slice(3);
// console.log(combined);
// console.log(slice);

// 6 Combining array using spread -> ... method
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = [...first, 'a', ...second, 'b'];

// // const copy = combined.slice();
// const copy = [...combined];
// console.log(combined);
// console.log(copy);

// 7 Iterating an array
// const numbers = [1, 2, 3];

// for (let number of numbers)
//   console.log(number);

// // for (let number in numbers)
// //   console.log(number, numbers[number]);

// // Apprach 1
// // numbers.forEach(function(number) {
//   //   console.log(number);
// // });

// // Apprach 2
// numbers.forEach((number, index) => console.log(index, number));


// 8 Joining arrays        
// const numbers = [1, 2, 3];
// const joined = numbers.join(',');
// console.log(joined);

// const messsage = 'This is my first message';
// const parts = messsage.split(' ');
// console.log(parts);

// const combined = parts.join('-');
// console.log(combined);

// 9 Sorting arrays

// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);
// const courses = [
//   { id: 1, name: 'Node.js' },
//   { id: 2, name: 'javaScript' }
// ];
// courses.sort(function(a, b) {
//   // a < b => -1
//   // a > b => 1
//   // a === b => 0
//   const nameA = a.name.toUpperCase();
//   const nameB = b.name.toUpperCase();
//   if (nameA < nameB) return -1;
//   if (nameA > nameB) return 1;
//   return 0;

// });

// console.log(courses);


// 10 Testing elements of an array
// const numbers = [-1, -2, 2, -3];
// every() -> checks every element
// some() -> checks if one element is matching the condition
// const allPositive = numbers.every(function(value) {
// return value >= 0;
// });

// const allPositive = numbers.every(value => value >= 0);
// const atLeastOnePositive = numbers.some(value => value >= 0);

// console.log(atLeastOnePositive);


// 11 Filtering an array
// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(n => n >= 0);

// console.log(filtered);


// 12 Mapping an array

// const numbers = [1, -1, 2, 3];
// // Chaining
// const items = numbers
//   .filter(n => n >= 0)
//   .map(n => ({ value: n}))
//   .filter(obj => obj.value > 1)
//   .map(obj => obj.value);

// // const items = filtered.map(n => ({ value: n}));

// // const html ='<ul>' + items.join('') + '</ul>';

// console.log(items);
// // console.log(html);


// 13 Reducing an array

// const numbers = [1, -1, 2, 3];

// // let sum = 0;
// // for (let n of numbers)
// //   sum += n;


// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );

// console.log(sum);



// Exercise 1 - Array from Range
// const numbers = arrayFromRange(1, 4);

// console.log(numbers);

// function arrayFromRange(min, max) {
//   const output = [];

//   for (let i = min; i <= max; i++) {
//     output.push(i);
//   }

//   return output;
// }


























