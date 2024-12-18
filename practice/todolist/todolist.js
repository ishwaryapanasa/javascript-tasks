document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("new-task");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
  
    // Load tasks from localStorage on page load
    loadTasks();
  
    // Add task
    addTaskBtn.addEventListener("click",() => {
      const taskText = taskInput.value.trim();
      if (taskText) {
        addTask(taskText);
        taskInput.value = "";
        saveTasks();
      }
    });
  
    // Add task by pressing Enter key
    taskInput.addEventListener("keyup",(event) =>  {
      if (event.key === "Enter") {
        addTaskBtn.click();
      }
    });
  
    // Add a new task to the list
    function addTask(text) {
      const li = document.createElement("li");
      li.innerText = text;

      // Add delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "&#x1F5D1;";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", () => {
        li.remove();
        saveTasks();
      });
  
      // Toggle task completion
      li.addEventListener("click", () => {
        li.classList.toggle("completed");
        saveTasks();
      });
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    }
  
    // Save tasks to localStorage
    function saveTasks() {
      const tasks = [];
      taskList.querySelectorAll("li").forEach((task) => {
        tasks.push({
          text: task.textContent.replace("🗑", "").trim(),
          completed: task.classList.contains("completed")
        });
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    // Load tasks from localStorage
    function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      tasks.forEach(task => addTask(task.text, task.completed));
    }
  });
  