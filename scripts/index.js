let dayTasks = [];
let nightTasks = [];

function sendUsername() {
    const usernameInput = document.getElementById('input-element');
    const username = usernameInput.value;

    const inputedUsername = document.getElementById('inputed-username');
    inputedUsername.innerText = "Boas vindas, " + username + "!";

    const bio = document.getElementById('bio');
    const inputContainer = document.getElementById('input-container');

    if (username.length > 0) {
        bio.style.display = 'block';
        inputContainer.style.display = 'none';
    } else {
        alert('Por favor, informe o seu nome');
        inputedUsername.innerText = "Olá!";
    }
}

function addDayTask() {
    const inputNewTask = document.getElementById('new-day-task');

    if (inputNewTask.value.trim() === '') {
        alert('Por favor, informe qual a tarefa');
        return;
    }

    const taskExists = dayTasks.some(task => task.name === inputNewTask.value.trim());

    if (taskExists) {
        alert('Esta tarefa já existe');
        return;
    }

    const newTask = {
        name: inputNewTask.value.trim(),
        id: dayTasks.length + 1
    };

    dayTasks.push(newTask);
    inputNewTask.value = '';
    showDayTasks();
}

function addNightTask() {
    const inputNewTask = document.getElementById('new-night-task');

    if (inputNewTask.value.trim() === '') {
        alert('Por favor, informe qual a tarefa');
        return;
    }

    const taskExists = nightTasks.some(task => task.name === inputNewTask.value.trim());

    if (taskExists) {
        alert('Esta tarefa já existe');
        return;
    }

    const newTask = {
        name: inputNewTask.value.trim(),
        id: nightTasks.length + 1
    };

    nightTasks.push(newTask);
    inputNewTask.value = '';
    showNightTasks();
}

function showDayTasks() {
    const ordenedList = document.getElementById('day-list');
    ordenedList.innerHTML = '';

    dayTasks.forEach(task => {
        const newListItem = document.createElement('li');
        newListItem.innerHTML = `<span>${task.name}</span><i class="fas fa-trash-alt" onclick="deleteDayTask(${task.id})"></i>`;
        ordenedList.appendChild(newListItem);
    });
}

function showNightTasks() {
    const ordenedList = document.getElementById('night-list');
    ordenedList.innerHTML = '';

    nightTasks.forEach(task => {
        const newListItem = document.createElement('li');
        newListItem.innerHTML = ` <span>${task.name}</span><i class="fas fa-trash-alt" onclick="deleteNightTask(${task.id})"></i>`;
        ordenedList.appendChild(newListItem);
    });
}

function deleteDayTask(id) {
    const index = dayTasks.findIndex(task => task.id === id);
    if (index !== -1) {
        dayTasks.splice(index, 1);
        showDayTasks();
    }
}

function deleteNightTask(id) {
    const index = nightTasks.findIndex(task => task.id === id);
    if (index !== -1) {
        nightTasks.splice(index, 1);
        showNightTasks();
    }
}
