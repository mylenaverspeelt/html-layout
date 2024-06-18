function sendUsername() {
    const usernameInput = document.getElementById('input-username')
    const username = usernameInput.value

    const inputedUsername = document.getElementById('inputed-username')
    const newUser = inputedUsername.innerText = username

    const okButton = document.getElementById('ok-button')

    if (newUser) {
        usernameInput.style.display = 'none'
        okButton.style.display = 'none'
    }
}

let dayTasks = []


function addDayTask() {

    const inputNewTask = document.getElementById('new-day-task')

    if (inputNewTask.value === '') {
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
    }

    dayTasks.push(newTask)

    inputNewTask.value = '';

    showDayTasks()

}


function showDayTasks() {

    const ordenedList = document.getElementById('day-list');
    ordenedList.innerHTML = '';

    return dayTasks.forEach(task => {
        const newListItem = document.createElement('li');
        newListItem.innerHTML = `${task.name} <i class="fas fa-trash-alt"></i>`;
        ordenedList.appendChild(newListItem);
    });

}

function addNightList() {

}
