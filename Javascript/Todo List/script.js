const taskList = document.getElementById("task-list");
let l = 0;

const addTask = (e) => {
  e.preventDefault();
  task = document.getElementById("task");
  if (task.value) {
    while (localStorage.getItem(l)) l += 1;
    createTask(task.value, l);
    localStorage.setItem(l, task.value);
    task.value = "";
  }
};

const deleteTask = (id) => {
  localStorage.removeItem(id);
  document.getElementById(id).remove();
};

const createTask = (taskContent, taskId) => {
  newTask = document.createElement("div");
  newTask.id = taskId;
  newTask.innerHTML = `${taskContent} <button class="btn btn-dark" onclick="deleteTask(${taskId})">Delete</button>`;
  newTask.classList.add("d-flex", "justify-content-between", "my-3");
  taskList.appendChild(newTask);
};

const formId = document.getElementById("formId");
formId.addEventListener("submit", addTask);

for (let t = 0; t < localStorage.length; t++) {
  let key = +localStorage.key(t);
  if (key) {
    let currTask = localStorage.getItem(key);
    if (currTask) createTask(currTask, key);
  }
}
