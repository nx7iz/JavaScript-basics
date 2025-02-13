// function greeting() {
//   console.log('hello');
// }
// greeting();

// // var greeting = function() {
// //   console.log('hello');
// // };

// const num = 2;
// // Anonymous fuunction(fnuction without a name)

// const function1 = function() {
//   console.log('hello2');
// };

// console.log(function1);

// console.log(typeof function1);

// function1();

// const object1 = {
//   num: 2,
//   fun: function() {
//     console.log('hello3');
//   }
// };
// object1.fun();

// function display (param) {
//   console.log(param);
// }

// display(2);


// function run(param) {
//    param();
// }
// run(function() {
//   console.log('hello4');
// });

// // Asynchronous Code (wont wait)
// setTimeout(function() {
//   console.log('timeout');
// }, 3000); //1000 milliseconds = 1 seconds

// console.log('next line'); 

// let intervalId;
// intervalId = setInterval(function() {
//   console.log('interval');
// }, 3000);

// console.log('next line2');

// clearInterval(intervalId);


[
  'make dinner',
  'wash dishes',
  'code' 
].forEach(function(value, index) { // loops through array and display each value in a array
  console.log(index);
  console.log(value);
});