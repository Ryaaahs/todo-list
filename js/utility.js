todoList = []; 

function storeText() {
    let inputElement = document.getElementsByClassName("input-bar")[0];
    todoList.push(inputElement.value);
    createTodoItem(inputElement.value);
    inputElement.value = ""
}

function createTodoItem(textValue) {
    let itemContainer = document.getElementsByClassName("todo-list-item-container")[0];    
    let todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    let todoItemText = document.createTextNode(textValue);

    todoItem.appendChild(todoItemText); 
    itemContainer.appendChild(todoItem);
}