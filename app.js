//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button ');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {
    event.preventDefault();
    console.log("hello");

    //Create Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);

    //Check Button
    const completedButton = document.createElement('button');
    completedButton.innerText = "Tick";
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton);

    //Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

    //Append the big div to the todo-list
    todoList.appendChild(todoDiv);

    // Clear todo INPUT VALUE
    todoInput.value = "";
}

// deleteCheck
function deleteCheck(e) {
    console.log(e.target);
    //Grab the item to delete
    const item = e.target;
    //DELETE
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement; //Grab its parent element
        todo.remove();
    }

    //CHECK
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}




