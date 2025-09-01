// array.forEach(element => {
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
// let sortedMovies = numbers;

// Solution 1 -> 2nd (valid if we don't have sortedMovies variable pointing to array)
// numbers = [];

// // Solution 2 -> 1st
// numbers.length = 0;

// Solution 3 -> 3rd
// numbers.splice(0, numbers.length);

// Solution 4 -> 4th
// while (numbers.length > 0)
//   numbers.pop();

// console.log(sortedMovies);
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
// const number = [1, -1, 2, 3];

// const filtered = number.filter(n => n >= 0);

// console.log(filtered);

// 12 Mapping an array

// const numbers = [1, -1, 2, 3];
// Chaining
// const items = numbers
//   .filter(n => n >= 0)
//   .map(n => ({ value: n}))
//   .filter(obj => obj.value > 1)
//   .map(obj => obj.value);

// const items = filtered.map(n => ({ value: n}));

// const html ='<ul>' + items.join('') + '</ul>';

// console.log(items);
// console.log(html);

// 13 Reducing an array

// const numbers1 = [1, -1, 2, 3];

// // let sum = 0;
// // for (let n of numbers)
// //   sum += n;

// const sum = numbers1.reduce(
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

// Exercise 2 - Includes

// const numbers = [1, 2, 3, 4];

// console.log(includes(numbers, 2));
// // for in gives the index
// // for of gives the value at that index
// function includes(array, searchElement) {
//   for (let element of numbers)
//     if (searchElement === element)
//       return true;
//   return false;
// }

// Exercise 3 - Except
// const numbers = [1, 2, 3, 4, 1, 1];

// const output = except(numbers, [1, 2]);

// console.log(numbers);
// console.log(output);

// function except(array, excluded) {
//   const output = [];
//   for (let element of array)
//     if (!excluded.includes(element))
//       output.push(element);
//   return output ;
// }

// Exercise 4 - Moving an Element

// const numbers = [1, 2, 3, 4];
// const output = move(numbers, 1, 3);

// console.log(output);

// // console.error("Invalid");

// function move(array, index, offset) {
//   const position = index + offset;
//   if (position >= array.length || position < 0){
//     console.error("Invalid offset");
//     return;
//   }

//     let output = [...array];
//     output.splice(index, 1);
//     output.splice(position, 0, array[index]);

//   return output;
// }

// Exercise 5 - Count occurrences

// const numbers = [1, 2, 3, 4, 1];

// const count = countOccurrences(numbers, 1);

// console.log(count);

// function countOccurrences(array, searchElement) {
//   // // 1st method - loop
//   // let count = 0;
//   // for (let element of array)
//   //   if (element === searchElement)
//   //     count++;
//   // return count;

//   return array.reduce((accumulator, current) => {
//     const occurrence = (current === searchElement) ? 1 : 0;
//     console.log(accumulator, current, searchElement);
//     return accumulator + occurrence;
//   }, 0);
// }

// Exercise 6 - Get Max

// const numbers = [1, 2, 3, 4];

// const max = getMax([]);

// console.log(max);

// function getMax(array) {
//   if (array.length === 0) return undefined;

//   // 1st method
//   // let max = array[0];

//   // for (let i = 1; i < array.length; i++) {
//   //   if (array[i] > max)
//   //     max = array[i];
//   // }

//   // return max;

//   // 2nd - Reduce method -- if we wna get single method in result of iterating an array, we should think bout using reduce method

//   return array.reduce((a, b) => (a > b) ? a : b);
// }

// Exercise 7 - Movies

// const movies = [
//   { title: 'a', year: 2018, rating: 4.5 },
//   { title: 'b', year: 2018, rating: 4.7 },
//   { title: 'c', year: 2018, rating: 3 },
//   { title: 'd', year: 2017, rating: 4.5 }
// ];

// const titles = movies
//   .filter(m => m.year === 2018 && m.rating >= 4)
//   .sort((a, b) => a.rating - b.rating)
//   .reverse()
//   .map(m => m.title)

// console.log(titles);

// const sortedMovies = [];

// movies
// .find(obj => {
//   if (obj.year === 2018 && obj.rating > 4)
//     sortedMovies.push(obj);
// })
// const titles = sortedMovies.map( m => m.title);

// console.log(titles);

// });
