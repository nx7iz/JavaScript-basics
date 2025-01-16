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

  

const todoList = [];

renderTodoList()

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

  function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    let name = inputElement.value;

    todoList.push(name);
    console.log(todoList);
  
    inputElement.value = '';


    renderTodoList();
  }

