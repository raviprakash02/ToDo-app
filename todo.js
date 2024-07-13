let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    if (todoItem && todoDate) {
        todoList.push({ item: todoItem, dueDate: todoDate });
        inputElement.value = '';
        dateElement.value = '';
        saveAndDisplayItems();
    }
}

function saveAndDisplayItems() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
      let {item, dueDate} = todoList[i];
      newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="todoList.splice(${i}, 1);
        displayItems();">Delete</button>
      `;
    }
    containerElement.innerHTML = newHtml;
  }

function deleteTodoItem(index) {
    todoList.splice(index, 1);
    saveAndDisplayItems();
}

// Initial display of items
saveAndDisplayItems();
