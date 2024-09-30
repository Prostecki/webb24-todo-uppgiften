const input = document.querySelector("input");
const button = document.querySelector("button");

// Example for png drop-shadow in css
const dogImg = document.createElement("img");
dogImg.className = "dog-img";
document.body.appendChild(dogImg);
console.log(dogImg);

const todoList = document.createElement("div");
todoList.classList.add("todo-container");
document.body.appendChild(todoList);
console.log(todoList);

button.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});

function addTask() {
  if (input.value === "") {
    input.classList.add("error-input");
    return;
  } else {
    input.classList.remove("error-input");
  }

  let taskList = document.createElement("ol");
  let task = document.createElement("li");
  task.textContent = input.value;
  todoList.appendChild(task);
  todoList.appendChild(taskList);
  input.value = "";
}
