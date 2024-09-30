const input = document.querySelector("input");
const button = document.querySelector("button");

const todoList = document.createElement("div");
todoList.classList.add("todo-container");
const addTodoList = () => document.body.appendChild(todoList);

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
  createTask();
  addTodoList();
}

function createTask() {
  let taskList = document.createElement("ol");
  let task = document.createElement("li");
  task.textContent = input.value;
  todoList.appendChild(task);
  todoList.appendChild(taskList);
  input.value = "";
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
