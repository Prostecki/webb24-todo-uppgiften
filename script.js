const input = document.querySelector("input");
const button = document.querySelector("button");
const container = document.createElement("div");
container.classList.add("container");
// document.body.appendChild(container);

const todoList = document.createElement("div");
todoList.classList.add("todo-list");
const addTodoList = () => document.body.appendChild(container);

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
  task.textContent = input.value;
  todoList.appendChild(task);
  input.value = "";
  container.appendChild(todoList);
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
