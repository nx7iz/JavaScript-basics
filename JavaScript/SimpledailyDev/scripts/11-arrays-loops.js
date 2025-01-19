// const myArray = [10, 20, 30];
// console.log(myArray);

// myArray[0] = 70;
// console.log(myArray);

// myArray.push(52);
// console.log(myArray);

// myArray.splice(0, 1);
// console.log(myArray);

// [1, 'hello', true, {name: 'socks'}, [1, 2]]



// let i = 1;
// while (i <= 5) {
  //   console.log(i);
//   i++;
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }


// let randomNumber = 0;
// // Non-standard loop  
// while (randomNumber < 0.5) {
  //   randomNumber = Math.random();
  // }
  
  // console.log(randomNumber);
  
  // // looping through an array
  // const todoList = [
//   'make dinner',
//   'wash dishes',
//   'watch youtube'
// ];
// for (let i = 0; i < todoList.length; i++) {
  //   const value = todoList[i]
  //   console.log(value);
  // }
  
  // accumulator pattern
  
  // const nums = [1, 1, 3];
  // let total = 0; // Accumulator variable
  
// for (let i = 0; i < nums.length; i++) {
//   const num = nums[i]
//   total += num;
// }
// console.log(total);


// let double = [];
// for (let i = 0; i < nums.length; i++) {
  //   double.push(nums[i] * 2);
  // }
  // console.log(double);

  

// let todoList = [{
//   name: "make dinner",
//   dueDate: '19-01-2025'
// }, {
//   name: "wash dishes",
//   dueDate: '19-01-2025'
// }];

// renderTodoList()
 
// function renderTodoList() {
//   let todoListHTML = '';

//   for (let i = 0; i < todoList.length; i++) {
//     let todoObject = todoList[i];
//     // const name = todoObject.name;
//     // const dueDate = todoObject.dueDate;
//     // Destructing
//     const { name, dueDate } = todoObject;
//     const html = 
//     /* Push,splice*/
//     // 3 elements 
//     `
//       <div>${name}</div>
//       <div>${dueDate}</div>
//       <button class="delete-button" onclick ="
//         todoList.splice(${i}, ${1});;
//         renderTodoList();
//       ">Delete</button>
//     `;
//     todoListHTML += html;
//   }

//   document.querySelector('.js-todo-list').innerHTML = todoListHTML;
// }

// function addTodo() {
//   const inputElement = document.querySelector('.js-name-input');
//   let name = inputElement.value;

//   const dateInputElement = document.querySelector('.js-due-date-input');
//   const dueDate = dateInputElement.value;
  
//   // Short hand property
//   todoList.push({
//     name,
//     dueDate
// });

//   inputElement.value = '';
  
//   renderTodoList();
// }



const arrray1 = [1, 2, 3]; 
// makes a copy of array1 
const arrray2 = arrray1.slice();
arrray2.push(4);
console.log(arrray1)
console.log(arrray2);

// Destructing
const [firstValue, secondValue] = [1, 2, 3];
console.log(firstValue);
console.log(secondValue);


for (let i = 0; i < 11; i++) {
  if (i % 3 === 0) {
    continue; // Lets us skip 1 iteration
  }
  console.log(i);
  if (i === 8) {
    break; // Stops the loop early
  }
}

let i = 1;
while (i < 11) {
  if (i % 3 === 0) {
    i++; // increment step manually for continue
    continue;
  }
  console.log(i);
  i++
}
function doubleArray (nums) {

  let double = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 0) {
      return num;
    }
      double.push(num * 2);
  }
    return double;
}

  console.log(doubleArray([1, 1, 3]));
  doubleArray([2, 2, 5, 0 , 5]);





