// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
const addTask = () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement('li');

  // Task text
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => taskList.removeChild(li);

  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  // Clear input field
  taskInput.value = '';
};

// Add task on button click
addTaskBtn.addEventListener('click', addTask);

// Add task on pressing "Enter"
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});
