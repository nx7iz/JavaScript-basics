
// 01- two sum
// console.log(twoSum([ -3, 4, 3, 90 ], 0));
// console.log(twoSum([ 3, 2, 3], 6));
// console.log(twoSum([ 3, 2, 4], 5));
// console.log(twoSum([ 2, 5, 5, 11], 10));

// function twoSum (nums, target) {
//   for (let i = 1; i < nums.length; i++ )
//     for (let j = 0; j < nums.length; j++)
//      if (((nums[j] + nums[i]) === target) && j !== i)
//       return [i, j];

//   return false;
// }

// 07 - palindrome Number
// console.log(isPalindrome(999));
// console.log(isPalindrome(-123));
// console.log(isPalindrome(12321));

// function isPalindrome(num) {
//   // // 1. Num to string and creating array (split)
//   // let numToString = num.toString().split('');

//   // // 2. Reversing the array
//   // let reverseString = numToString.reverse();

//   // // 3. Converting array to string and string back to Num
//   // let stringToNum = parseInt(reverseString.join(''), 10);
//   let stringToNum = parseInt(num.toString().split('').reverse().join(''),10)
//   return (num === stringToNum) ? true : false;
// }

// let number = 123;
// let newNumber = '';
// // while (number <= 0) {
// //   newNumber = number % 10;
// //   number /= 10;
// // }

// // for (let i = 0; i < 3; i++) {
// //   newNumber += number % 10;
// //   number /= 10;
// // }
// let a = number.toString(); // '123'
// let c = a.split(''); // ['1', '2', '3']
// let d = c.reverse(); // ['3', '2', '1']
// let e = d.join(''); // '321'
// let f = parseInt(e, 10); // 321
// console.log(f);

// let b = parseInt(a, 10);



// 67. Add binary
// let a = '11';
// let c = parseInt(a, 10);
// console.log(c);

// console.log(0b11);
// let b = '1';
// function abc(a, b) {
//   return (a + b).toString(2);
// }
// console.log(abc(a, b));


// 258. Add digits
  // let num = 38;
  // let numToString = num.toString().split('');
  // let parse = parseInt(numToString[1], 10);
  // let parse2 = parseInt(numToString[0], 10);
  // let sum = parse + parse2;
  // console.log(numToString);
  // console.log(parse); 
  // console.log(sum);



// 415. Add String

let a = '9333852702227987';
let b = '85731737104263';
let c = parseInt(a, 10);
let d = parseInt(b, 10);
function abc(a, b) {
  let sum = (parseInt(a) + parseInt(b));
  return sum.toString();
}
console.log(abc(a, b));


