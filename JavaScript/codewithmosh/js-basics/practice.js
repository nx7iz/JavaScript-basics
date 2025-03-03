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
// showarray(10);

// function showarray(limit) {
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


// 11 - Prime array
// showPrime(100);

// function showPrime(limit) {
//   for (let number = 2; number <= limit; number++)
//     if (isPrime(number)) console.log(number);
// }

// function isPrime(number) {
//   for (let factor = 2; factor < number; factor++) 
//     if (number % factor === 0) 
//       return false;

//   return true;
// }


// 12 - Min
// console.log(min(4,9));
// function min(first, second) {
//   if (first < second)
//     return first;
//   return second;
// }


// 13 - Square
// console.log(isSquare(100,100));
// console.log(isSquare(150,200));
// function isSquare(width, height) {
//   if (width === height) 
//     return true
//   return false;
// }


// 14 - Leap year
// console.log(isLeapYear(2024)); 
// console.log(isLeapYear(1900)); 
// console.log(isLeapYear(2000)); 
// function isLeapYear(year) {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) 
//     return true;
//   return false;
// }


// 15 - Reverse String
// console.log(reverseString('Arceus'));

// function reverseString(str) {
//   // 03 method
//   return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);

  // 02 method
// let newString = '';
// for (let i = str.length - 1; i >= 0; i--) {
//   newString += str[i];
// }
// return newString;

// 01 method
// let splitString = str.split('');

// reversedString = reverseArray(splitString);
// return reversedString;
// // Splits char into array
// let splitString = str.split("");

// // Reverses an array
// let reversedString = splitString.reverse();
// console.log(reversedString);

// // joins all element of array into string
// let joinString = reversedString.join("");
// return joinString;

// let joinString = str.split("").reverse().join("");
// return joinString;
// }


// function reverseArray(array) {
//   let reverseArray = '';
//   for (let i = 0; i < array.length; i++) {
//     let newarray = array[5 - i];
//     reverseArray += newarray;
//   }
//   return reverseArray;
// }

// 16 - count vowels
// console.log(countVowels('Javascript'));
// function countVowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'a' || str[i] === 'e' ||str[i] === 'i' ||str[i] === 'o' ||str[i] === 'u') {
//       count++;
//     }
//   }
//   return count;
// }


// 17 - Factorial
// console.log(factorial(5));
// function factorial(number) {
//   let fact = 1;
//   for (let i = 1; i <= number; i++) {
//     fact *= i;
//   }
//   return fact;
// }


// 18 - Fibonacci
// fibonacci(5);
// function fibonacci(number) {
//   let prev = 0;
//   let series = 0;
//   let sum = 1;
//   for (let i = 1; i < number; i++) {
//     prev += sum;
//     series += prev;
//     console.log(series);
//   }
// }


// 19 - Second largest number
// let numbers = [10, 20, 30, 60, 40, 50];

// console.log(secondLargest(numbers));

// function secondLargest(array) {
//   let largest = array[0];
//   let index;
//   let secondLargest = array[0];
//   for (let i = 1; i < array.length; i++) {
//     let value = array[i];
//     if (value > largest) {
//       largest = value;
//       index = i;
//     }
//   }
//   array[index] = 0;
//   for (let i = 1; i < array.length; i++) {
//     let value = array[i];
//     if (value > secondLargest) {
//       secondLargest = value;
//     }
//   }
//   // console.log(array);
//   return secondLargest;
// }


// 20 - Sum Even array
// let array = [1, 2, 3, 4, 5, 6, 7];
// console.log(sumEvenarray(array));
// function sumEvenarray(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       sum += array[i];
//     }
//   }
//   return sum;
// }


// 21 - Palindrome
// console.log(isPalindrome('civic'));
// console.log(isPalindrome('hello'));
// console.log(isPalindrome('madam'));

// function isPalindrome(string) {
//   let newArray = '';
//   for (let i = string.length - 1; i >= 0; i--) {
//     newArray += string[i];
//   }
//   return (newArray === string) ? true : false;

// //   let reverseString = string.split('').reverse().join('');
// // return (reverseString === string) ? true : false;
// }



// Factory function

// function createSqaure(area) {
//   const square = {
//     area,
//     draw() {
//       console.log('draw');
//     },
//   }
//   return square;
// }

// const sqaure = createSqaure(1);
// console.log(sqaure);