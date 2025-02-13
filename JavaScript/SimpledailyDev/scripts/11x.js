// When loading the page, load from localStorage.
const parseArray = JSON.parse(localStorage.getItem('todoList'));
const todoList = parseArray || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();

        // Whenever we update the todo list, save in localStorage.
        saveToStorage();
      " class="delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();

  // Whenever we update the todo list, save in localStorage.
  saveToStorage();
}

function saveToStorage() {
  const stringArray = JSON.stringify(todoList);
  localStorage.setItem('todoList', stringArray);
}

// let array = ['eol', 'hai', 'dklf'];
// // array = array.push('sd');

// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(2, 5);
// console.log(citrus);


// fruits = ["Banana", "Orange", "Apple", "Mango"];

// // Splice = push(add) + slice(remove)
// // At position 2, remove 1 item, add "Lemon" and "Kiwi"
// fruits.splice(2, 2, "Lemon", "Kiwi", "koko");
// console.log(fruits);


