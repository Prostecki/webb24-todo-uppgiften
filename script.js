const input = document.querySelector("input");
input.setAttribute("placeholder", "Enter any task...");
const button = document.querySelector("button");
const container = document.createElement("div");
container.classList.add("container");

const todoList = document.createElement("div");
todoList.classList.add("todo-list");
const addTodoList = () => document.body.appendChild(container);

document.addEventListener("DOMContentLoaded", loadTasks);

button.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});

function addTask() {
  if (input.value.trim() === "") {
    //Remove class
    input.classList.remove("error-input");
    //Add a class back with a bit delay through setTimeout
    setTimeout(() => {
      input.classList.add("error-input");
    }, 10);
    //Stop running if input is empty
    return;
  } else {
    //Remove an error if a text is written
    input.classList.remove("error-input");
  }
  document.body.appendChild(container);
  createTask();
  addTodoList();
}

function createTask() {
  let task = document.createElement("p");
  let checkbox = document.createElement("input");
  checkbox.classList.add("rounded-checkbox");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = false;
  console.log(checkbox.checked);
  let taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");
  taskContainer.appendChild(task);
  taskContainer.appendChild(checkbox);
  task.textContent = input.value;
  input.value = "";
  container.appendChild(taskContainer);
  // saveTask(task); ?? Need to find out the way to fix it

  //when you change a state of input, you have to use "change" event listener
  checkbox.addEventListener("change", () => {
    isChecked(checkbox, task);
  });
}

//To params input and element which I want to check
function isChecked(input, element) {
  //If input changes a state to true, element take a class from css
  if (input.checked === true) {
    element.classList.add("isDone");
    // otherwise it removes
  } else {
    element.classList.remove("isDone");
  }
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    createTask(task);
  });
}

// // Closure function
// function createMember(firstName) {
//   return function (lastName) {
//     console.log(firstName + " " + lastName);
//   };
// }

// const logWithLastName = createMember("Mark");
// console.log(logWithLastName("Smith"));
// console.log(logWithLastName("LOLKA"));
