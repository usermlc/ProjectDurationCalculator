let tasks = [];

function addTask() {
    const taskId = document.getElementById('taskId').value.trim();
    const duration = parseInt(document.getElementById('duration').value, 10);
    const dependencies = document.getElementById('dependencies').value.split(',').map(d => d.trim()).filter(d => d);

    tasks.push({ id: taskId, duration, dependencies, earliestStart: 0, latestStart: 0, timeReserve: 0 });

    document.getElementById('taskId').value = '';
    document.getElementById('duration').value = '';
    document.getElementById('dependencies').value = '';

    displayTasks();
}

function displayTasks() {
    const table = document.getElementById('tasksTable');
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    tasks.forEach(task => {
        let row = table.insertRow();
        row.insertCell(0).textContent = task.id;
        row.insertCell(1).textContent = task.duration;
        row.insertCell(2).textContent = task.dependencies.join(', ');
    });
}

// Dummy calculation function to illustrate functionality
function calculate() {
    tasks.forEach(task => {
        task.earliestStart = Math.floor(Math.random() * 10);
        task.latestStart = task.earliestStart + Math.floor(Math.random() * 5);
        task.timeReserve = task.latestStart - task.earliestStart;
    });

    displayResults();
}

function displayResults() {
    const table = document.getElementById('resultsTable');
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    tasks.forEach(task => {
        let row = table.insertRow();
        row.insertCell(0).textContent = task.id;
        row.insertCell(1).textContent = task.earliestStart;
        row.insertCell(2).textContent = task.latestStart;
        row.insertCell(3).textContent = task.timeReserve;
    });
}
