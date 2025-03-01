// let name = 'Arceus';
// let age = 20;
// let isStudent = true;

// console.log(name);
// console.log(age);
// console.log(isStudent);


// 01 - Max
// function max(first, second) {
//   // if (first > second) return first;
//   // return second;
//   return (first > second) ? first : second;
// }
// let number = max(9, 6);
// console.log(number);


// 02 - Landscape or Potrait
// console.log(isLandscape(190.3, 130.54));

// function isLandscape(width, height) {
//   return (width > height);
// }


// 03 - FizzBuzz
// Divisible by 3 --> Fizz
// Divisible by 5 --> Buzz
// Divisible by both 3 and 5 --> FizzBuzz
// Not divisible by 3 or 5 --> input
// Not a number --> 'Not a number'

// const output = fizzBuzz(false); 
// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input !== 'number')
//     return NaN;

//   if ((input % 3 === 0) && (input % 5 === 0)) 
//     return 'FizzBuzz';
  
//   if (input % 3 === 0) 
//     return 'Fizz';
  
//   if (input % 5 === 0) 
//     return 'Buzz';
  
//   return input;
// }


// 04 - Demeric points
// Speed limit = 70
// 5 --> 1 point
// Math.floor( )
// Points > 12 --> suspended

// checkSpeed(180);

// function checkSpeed(speed) {
// // 1st Method
//   const speedLimit = 70;
//   const speedPerKm = 5;
//   if (speed < speedLimit + speedPerKm) {
//     console.log('Ok');
//     return;
//   }
//   const points = Math.floor((speed - speedLimit) / speedPerKm);
//   if (points >= 12)
//     console.log('License suspended');
//   else 
//     console.log('Point', points);


// // 2st Method

  // if (speed >= 180) {
  //   console.log('License suspended');
  //   return 0;
  // }
  // let points = 0.2;
  // for (let i = 0; i < speed - 70; i++) {
  //   if (speed >= 70) {
  //     points += 0.2;
  //   }
  // }
  // points = Math.floor(points);
  // if (speed < 75) 
  //   console.log('Ok');
  // else if (points >= 12) 
  //   console.log('License suspended');
  // else 
  //   console.log('Point:',points);

// }


// 5 - Even / Odd
// showNumbers(10);

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     // if (i % 2 === 0) console.log(i, "EVEN");
//     // else console.log(i, "ODD");
     
//     const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//     console.log(i, message);
//   }
// }


// 6 - Count truthy
// Falsy 
// undefined
// null
// ''
// 0
// false
// NaN

// const array = [0, undefined, null, '', 2, 3, 'Arceus'];
// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;

//   for (let value of array)
//     if (value) 
//       count++;
//   return count;
// }


// 07 - String properties
// const movie = {
//   title: 'John Wick',
//   releaseYear: 2019,
//   rating: 4.9,
//   director: 'Nolan'
// }
// showProperties(movie);

// function showProperties(obj) {
//   for (let key in obj)
//     if (typeof obj[key] === 'string')
//       console.log(key, obj[key]);
// }


// 08 - Sum of multiples of 3 and 5
// console.log(sum(10));

// function sum(limit) {
//   let sum = 0;
  
//   for (let i = 0; i <= limit; i++)
//     if (i % 3 === 0 || i % 5 === 0) 
//       sum += i;

//   return sum;
// }

// 09 - Grade
// const marks = [80, 80, 50];
// /* Average = 70
//  1 - 59: F
//  60 - 69: D
//  70 - 79: C
//  80 - 89: B
//  90 - 100: A
// */
// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//   const average = calculateAverage(marks);
//   if (average < 60) return 'F';
//   if (average < 70) return 'D';
//   if (average < 80) return 'C';
//   if (average < 90) return 'B';
//   return 'A';

// }

// function calculateAverage(array) {
//   let sum = 0;
//   for (let value of array) {
//     sum += value;
//   }
//   return sum / array.length;

// }


// 10 - Stars
// showStars(5);

// function showStars(rows) {
//   for (let i = 0; i < rows; i++) {
//     let pattern = '';
//     pattern += '*';
//     console.log(pattern);
//   }
// }

// 11 - Prime Numbers
showPrime(20);

function showPrime(limit) {
  for (let number = 2; number <= limit; number++) 
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0)
      return false;

  return true;
}
