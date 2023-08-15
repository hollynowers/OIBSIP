// Array to store tasks
var tasks = [];

// Function to create a new task
function createTask(taskText) {
    var task = {
        text: taskText,
        completed: false,
        createdAt: new Date()
    };
    tasks.push(task);
    return task;
}

// Function to render the tasks
function renderTasks() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    var completedList = document.getElementById('completedList');
    completedList.innerHTML = '';

    tasks.forEach(function (task, index) {
        var li = document.createElement('li');
        li.className = 'task';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', function () {
            toggleTaskCompletion(index);
        });
        li.appendChild(checkbox);

        var taskText = document.createElement('span');
        taskText.className = task.completed ? 'completed' : 'taskText';
        taskText.textContent = task.text;
        li.appendChild(taskText);

        var deleteButton = document.createElement('span');
        deleteButton.className = 'deleteButton';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            deleteTask(index);
        });
        li.appendChild(deleteButton);

        if (task.completed) {
            completedList.appendChild(li);
        } else {
            taskList.appendChild(li);
        }
    });

    // Show message when there are no pending tasks
    if (taskList.children.length === 0) {
        var noTasksMessage = document.createElement('p');
        noTasksMessage.className = 'noTasksMessage';
        noTasksMessage.textContent = 'No pending tasks.';
        taskList.appendChild(noTasksMessage);
    }

    // Show message when there are no completed tasks
    if (completedList.children.length === 0) {
        var noCompletedTasksMessage = document.createElement('p');
        noCompletedTasksMessage.className = 'noTasksMessage';
        noCompletedTasksMessage.textContent = 'No completed tasks.';
        completedList.appendChild(noCompletedTasksMessage);
    }
}

// Function to toggle task completion
function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to show notification
function showNotification(message) {
    var notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';

    setTimeout(function () {
        notification.style.display = 'none';
    }, 2000); // Notification will disappear after 2 seconds
}

// Event listener for the form submission
document.getElementById('taskForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    if (taskText !== '') {
        var task = createTask(taskText);
        taskInput.value = '';
        renderTasks();
        showNotification('Task has been successfully added!');
    }
});

// Initial rendering of tasks
renderTasks();

// Function to delete a task
function deleteTask(index) {
    var deletedTask = tasks[index];
    tasks.splice(index, 1);
    renderTasks();
    showNotification('Task has been successfully deleted!', 'green');
}

// Function to show notification
function showNotification(message, color) {
    var notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    notification.style.backgroundColor = color;

    setTimeout(function () {
        notification.style.display = 'none';
    }, 2000); // Notification will disappear after 2 seconds
}
