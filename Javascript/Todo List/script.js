const taskList = document.getElementById("task-list");
let l = localStorage.length;

const addTask = (e) => {
  e.preventDefault();
  task = document.getElementById("task");
  createTask(task.value, l);
  localStorage.setItem(l, task.value);
  l += 1;
  task.value = "";
};

const deleteTask = (e) => {
  let decision = confirm("Do you want to delete the task?");
  if (decision) {
    localStorage.removeItem(e.target.id);
    e.target.remove();
  }
};

const createTask = (taskContent, lid) => {
  newTask = document.createElement("a");
  newTask.textContent = taskContent;
  newTask.classList.add("list-group-item", "list-group-item-action");
  newTask.id = lid;
  taskList.appendChild(newTask);
  newTask.addEventListener("click", deleteTask);
};

const formId = document.getElementById("formId");
formId.addEventListener("submit", addTask);

for (let t = 0; t < l; t++) {
  let currTask = localStorage.getItem(t);
  if (currTask) createTask(currTask, t);
}
