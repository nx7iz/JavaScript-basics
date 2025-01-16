// const nums = [10, 20, 30, 50];

// const text = ['hi', 'bye', 'good', 'hello'];

// // function getLastValue(array) {
// //   const lastValue = array.length - 1;

// //   return array[lastValue];
// // }
// // console.log(getLastValue(nums));
// // console.log(getLastValue(text));

// function arraySwap(array) {
//   const lastIndex = array.length - 1;
  
//   // let tempValue;
//   // tempValue = array[lastValue];
//   // array[lastValue] = array[0];
//   // array[0] = tempValue;

//   const lastValue = array[lastIndex];
//   const firstValue = array[0];

//   array[0] = lastValue;
//   array[lastIndex] = firstValue;
//   return array;

// }
// console.log(arraySwap(nums));
// console.log(arraySwap(text));

// for (let i = 0; i < 11; i+= 2) {
//   console.log(i);
// } 
// for (let i = 5; i > 0; i--) {
//   console.log(i);
// } 

// let i = 0;
// while (i < 11) {
//   console.log(i);
//   i+= 2;
// }
// i = 5;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// const nums = [1, 2, 3];
// // let double = [];
// // let num = [];
// // for (let i = 0; i < nums.length; i++) {
// //   // double.push(nums[i] + 1);
// //   num[i] = nums[i] + 1;
// // }
// // console.log(num);

// function addOne(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i] + 1);
//   }
//   return newArray;
// }

// console.log(addOne([-2, -1, 0, 99]));  

// function addNum(array, num) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     // newArray.push(array[i] + num);
//     newArray[i] = array[i] + num;
//   }
//   return newArray;
// }
// console.log(addNum([1, 2, 3], 10));

// function addArrays(array1, array2) {
//   let newArray = [];
//   for (let i = 0; i < array1.length; i++) {
//     newArray[i] = array1[i] + array2[i];
//   }
//   return newArray;
// }
// console.log(addArrays([1, 1, 2], [1, 1, 3]));
// console.log(addArrays([1, 2, 3], [4, 5, 6]));

// function countPositive(array) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0 ){
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countPositive([1, -2, 5]));
// console.log(countPositive([-2, 3, -5, 7, 10]));




// function minMax(array) {
  //   let max;
  //   let min;
  
  //   for (let i = 0; i < array.length; i++) {
//     if (array[0] <= array[i]) {
//       array[0] = array[i];
//       max = array[0];
//     }
//   }

//   for (let i = 0; i < array.length; i++) {
  //     if (array[0] >= array[i]) {
    //       array[0] = array[i];
    //       min = array[0];
    //     }
//   }
// for (let i = 0; i < 1; i++) {
  //   if (array[i] === undefined) {
//     max = 'null';
//     min = null;
//   }

// }

//   return `min: ${min}, max: ${max}`;
// }
// console.log(minMax([1, -3, 5]));
// console.log(minMax([-2, 3, -5, 70, 10]));
// console.log(minMax([3]));
// console.log(minMax([]));

// const numbers = [-12, -3, 5, 10, -5];


// function maxMin(nums) {
  
//   const result = {
//     max: null, 
//     min: null
//   };
  
//   for (let i = 0; i < nums.length; i++) {
//     const value = nums[i];
    
//     if (result.max === null || value > result.max) {
//       result.max = value;
//     }
//     if (result.min === null || value < result.min) { 
//       result.min = value;
//     }
//   }
//   return result;

// }
// console.log(maxMin([1, -3, 5]));

// console.log(maxMin([]));

// console.log(maxMin([3]));


// const fruitNames = ['apple', 'banana', 'apple', 'banana' , 'apple', 'grapes'];


// function countWords(words) {
//   const result = {};  

//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];

//     if(!result[word]) {
//       result[word] = 1;
//     } else {
//       result[word]++;
//     }
//   }
//   return result;

// }

// console.log(countWords(['apple', 'grape', 'apple', 'apple']));

// const names = ['grape', 'apple', 'grape', 'apple', 'banana'];

// const fruit = {};

// console.log(fruit);

// for (let i = 0; i < names.length; i++) {
//   const name = names[i];

//   if (!fruit[name]) {
//     fruit[name] = 1;
//   } else {
//     fruit[name]++;
//   }
// }

// console.log(fruit);


// let words = ['world', 'hi', 'good', 'search', 1 , 'search'];

// let index = -1;

// for (let i = 0; i < words.length; i++) {
//   if (words[i] === 'search') {
  //     index = i;
  //     break;
//   }
// }
// console.log(index);

// words = ['not', 'found'];
// index = -1;

// for (let i = 0; i < words.length; i++) {
  //   if (words[i] === 'search') {
    //     index = i;
    //     break;
    //   }
    // }
    // console.log(index);
    
// const words = ['world', 'hi', 'good', 'search', 1 , 'search'];

// function findIndex(array, word) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === word) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(findIndex(['world', 'hi', 'good', 'search', 1 , 'search'], 1));

// const foods = ['world', 'hi', 'good', 'search', 1 , 'search'];


// function removeEgg(foods) {
  //   for (let i = 0; i < foods.length; i++) {
    //     if (foods[i] === 'egg' && removeEggs < 2) {
      //       removeEggs++;
      //       continue;
      //     }  
      //     console.log(result);
      //     result.push(foods[i]);
      //   }
      //   return result;
      // }
// function removeEgg(foods) {
//   const reversedFoods = foods.reverse();

//   const result = [];
//   let removeEggs = 0;

//   for (let i = 0; i < reversedFoods.length; i++) {
//     if (foods[i] === 'egg' && removeEggs < 2) {
//       removeEggs++;
//       continue;
//     }  
//     // console.log(result);
//     result.push(reversedFoods[i]);
//   }

//   return result.reverse();
// }
// console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham', 'grapes']));

const todoList = [];

renderTodo();

function renderTodo() {
  let todoHTML = ''
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    let html = `<p>${todo}</p>`;
    todoHTML += html;
    
  }
  document.querySelector('.js-display').innerHTML = todoHTML;

}
function addTodoList() {
  
  const inputElement = document.querySelector('.js-todo-list');
  const name = inputElement.value;

  
  todoList.push(name);
  
  console.log(todoList);
  
  inputElement.value = '';
  renderTodo();
}


