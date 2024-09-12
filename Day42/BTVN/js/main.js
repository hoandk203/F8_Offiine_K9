const btnAdd = document.querySelector(".form-btn");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal-btn");
const saveBtn = document.querySelector(".save-btn");
const amountCompleted = document.querySelector(".amount-completed");
const toggleTodosCompleted = document.querySelector(".toggle-todos-completed");
const searchInput = document.querySelector("#searchInput");
const inputTaskValue = document.querySelector(".input-task");

const endPoint = "https://zzyfqk-8080.csb.app/todos";
let todos = [];
let currTask = {};
let searchInputValue = "";
let completedClick = false;

// event toggleTodosCompleted
toggleTodosCompleted.addEventListener("click", (e) => {
    const iEl = document.querySelector(".toggle-todos-completed i");
    iEl.classList.toggle("rotate-90");
    iEl.style.transition = "transform 0.3s ease";
    document.querySelector(".todo-completed").classList.toggle("show");
});

// event btnAdd
btnAdd.addEventListener("click", (e) => {
    document.querySelector(".modal").style.display = "block";
});

// event closeModalBtn
closeModalBtn.addEventListener("click", (e) => {
    document.querySelector(".modal").style.display = "none";
    inputTaskValue.value = "";
    currTask = {};
});

// event overlay
overlay.addEventListener("click", (e) => {
    document.querySelector(".modal").style.display = "none";
    inputTaskValue.value = "";
    currTask = {};
});

// event saveBtn
saveBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    await addTask();
    await renderTask();
    await searchTask(searchInputValue);
    document.querySelector(".modal").style.display = "none";
    inputTaskValue.value = "";
    currTask = {};
});

//event searchInput
searchInput.addEventListener("input", (e) => {
    searchTask(searchInput.value);
});

// main
const main = async () => {
    renderTask();
};

// renderTask
const renderTask = async () => {
    try {
        const response = await fetch(endPoint);
        todos = await response.json();
    } catch (error) {
        const errorMessage = document.querySelector(".error-message p");
        errorMessage.textContent = "Server not access";
    }
    let todoItem = "";
    let completedItem = "";
    let count = 0;
    todos.forEach((todo) => {
        if (!todo.completed) {
            todoItem += `<div class="todo-item">
                    <div class="todo-content">
                        <p>${todo.content}</p>
                    </div>
                    <div class="todo-action">
                        <button onclick="updateTask('${todo.id}')" class="btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button onclick="deleteTask('${todo.id}')" class="btn-delete"><i class="fa-solid fa-trash"></i></button>
                        <button onclick="completeTask('${todo.id}')" class="btn-complete"><i class="fa-solid fa-check-to-slot"></i></button>
                    </div>
                </div>`;
        } else {
            completedItem += `<div class="todo-item">
                    <div class="todo-content">
                        <p>${todo.content}</p>
                    </div>
                    <div class="todo-action">
                        <button onclick="updateTask('${todo.id}')" class="btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button onclick="deleteTask('${todo.id}')" class="btn-delete"><i class="fa-solid fa-trash"></i></button>
                        <button onclick="completeTask('${todo.id}')" class="btn-complete green"><i class="fa-solid fa-check-to-slot"></i></button>
                    </div>
                </div>`;
            count++;
        }
    });
    const todoList = document.querySelector(".todo-list");
    const completedList = document.querySelector(".todo-completed");
    todoList.innerHTML = `${todoItem}`;
    completedList.innerHTML = `${completedItem}`;

    amountCompleted.textContent = `Completed Todos ${count}`;
};

// searchTask
const searchTask = async (value) => {
    let todoItem = "";
    let completedItem = "";
    let count = 0;
    searchInputValue = value;
    todos.forEach((todo) => {
        if (!todo.completed && todo.content.includes(value)) {
            todoItem += `<div class="todo-item">
                    <div class="todo-content">
                        <p>${todo.content}</p>
                    </div>
                    <div class="todo-action">
                        <button onclick="updateTask('${todo.id}')" class="btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button onclick="deleteTask('${todo.id}')" class="btn-delete"><i class="fa-solid fa-trash"></i></button>
                        <button onclick="completeTask('${todo.id}')" class="btn-complete"><i class="fa-solid fa-check-to-slot"></i></button>
                    </div>
                </div>`;
        } else if (todo.completed && todo.content.includes(value)) {
            completedItem += `<div class="todo-item">
                    <div class="todo-content">
                        <p>${todo.content}</p>
                    </div>
                    <div class="todo-action">
                        <button onclick="updateTask('${todo.id}')" class="btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button onclick="deleteTask('${todo.id}')" class="btn-delete"><i class="fa-solid fa-trash"></i></button>
                        <button onclick="completeTask('${todo.id}')" class="btn-complete green"><i class="fa-solid fa-check-to-slot"></i></button>
                    </div>
                </div>`;
            count++;
        }
    });
    const todoList = document.querySelector(".todo-list");
    const completedList = document.querySelector(".todo-completed");
    todoList.innerHTML = `${todoItem}`;
    completedList.innerHTML = `${completedItem}`;
    amountCompleted.textContent = `Completed Todos ${count}`;
};

// addTask
const addTask = async (newCompleted) => {
    const inputTaskValue = document.querySelector(".input-task").value;
    const method = currTask.id ? "PATCH" : "POST";
    const taskEndPoint = currTask.id ? `${endPoint}/${currTask.id}` : endPoint;
    if (currTask.id && !completedClick) {
        body = JSON.stringify({
            content: inputTaskValue.replace("<", "&lt;").replace(">", "&gt;"),
        });
    } else if (!currTask.id) {
        body = JSON.stringify({
            content: inputTaskValue.replace("<", "&lt;").replace(">", "&gt;"),
            completed: false,
        });
    } else if (currTask.id && completedClick) {
        body = JSON.stringify({
            completed: newCompleted,
        });
    }
    try {
        const response = await fetch(taskEndPoint, {
            method: method,
            body: body,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        const errorMessage = document.querySelector(".error-message p");
        errorMessage.textContent = "Error";
    }
    completedClick = false;
};

// updateTask
const updateTask = async (id) => {
    document.querySelector(".modal").style.display = "block";
    currTask = todos.find((todo) => todo.id === id);
    inputTaskValue.value = currTask.content;
};

// deleteTask
const deleteTask = async (id) => {
    try {
        const response = await fetch(`${endPoint}/${id}`, {
            method: "DELETE",
        });
    } catch (error) {
        const errorMessage = document.querySelector(".error-message p");
        errorMessage.textContent = "Error";
    }
    await renderTask();
};

// completeTask
const completeTask = async (id) => {
    completedClick = true;
    currTask = todos.find((todo) => todo.id === id);
    const newCompleted = !currTask.completed;
    await addTask(newCompleted);

    await renderTask();
    currTask = {};
};

main();
