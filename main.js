const taskInput = document.getElementById("task-input");
const inputBtn = document.getElementById("input-btn");
const taskList = document.getElementById("task-list");
const heading = document.getElementById("task-heading");
const completedList = document.getElementById("completed-list");
const toggleBtn = document.getElementById("toggle-completed");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";
  completedList.innerHTML = "";

  let completedCount = 0;

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text + " "
    if (task.completed) {
      li.classList.add("completed")
    }

const taskContent = document.createElement("div")
    taskContent.classList.add("task-content")
    const taskText = document.createElement("span")
    taskText.taskContent = task.task
    const taskDate = document.createElement("small")
    taskDate.textContent = task.date
    taskDate.classList.add("task-date")
    taskContent.appendChild(taskText)
    taskContent.appendChild(taskDate)
    li.textContent = task.text;
    

const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.classList.add("task-checkbox");
    
    
    const delBtn = document.createElement("button")
    delBtn.textContent = "❌"
    delBtn.classList.add("delete-btn")
    delBtn.addEventListener("click", () => {
      tasks.splice(index, 1)
      saveTasks()
      renderTasks()
    })
    li.appendChild(checkbox)
    li.appendChild(delBtn)
    
    if (task.completed) {
      completedList.appendChild(li)
    }
    