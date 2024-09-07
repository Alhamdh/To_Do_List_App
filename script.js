// Get the task input field and add task button
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Create an array to store tasks
let tasks = [];

// Add event listener to add task button
addTaskBtn.addEventListener('click', addTask);

// Function to add task
function addTask() {
    // Get the task input value
    const task = taskInput.value.trim();

    // Check if task is not empty
    if (task !== '') {
        // Create a new task object
        const newTask = {
            text: task,
            completed: false
        };

        // Add the new task to the tasks array
        tasks.push(newTask);

        // Clear the task input field
        taskInput.value = '';

        // Render the tasks
        renderTasks();
    }
}

// Function to render tasks
function renderTasks() {
    // Clear the task list
    taskList.innerHTML = '';

    // Loop through the tasks array
    tasks.forEach((task, index) => {
        // Create a new list item
        const listItem = document.createElement('li');

        // Create a checkbox to mark task as completed
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;

        // Add event listener to checkbox
        checkbox.addEventListener('change', () => {
            // Toggle the task's completed status
            task.completed = !task.completed;

            // Render the tasks
            renderTasks();
        });

        // Create a span to display the task text
        const taskText = document.createElement('span');
        taskText.textContent = task.text;

        // Add the checkbox and task text to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);

        // Add the list item to the task list
        taskList.appendChild(listItem);

        // Add a delete button to the list item
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        // Add event listener to delete button
        deleteBtn.addEventListener('click', () => {
            // Remove the task from the tasks array
            tasks.splice(index, 1);

            // Render the tasks
            renderTasks();
        });

        // Add the delete button to the list item
        listItem.appendChild(deleteBtn);

        // Add the completed class to the list item if the task is completed
        if (task.completed) {
            listItem.classList.add('completed');
        }
    });
}