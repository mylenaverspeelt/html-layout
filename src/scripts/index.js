function sendUsername() {
    const usernameInput = document.getElementById('input-username')
    const username = usernameInput.value

    const inputedUsername = document.getElementById('inputed-username')
    const newUser = inputedUsername.innerHTML = username

    const okButton = document.getElementById('ok-button')

    if (newUser) {
        usernameInput.style.display = 'none'
        okButton.style.display = 'none'
    }
}

let dayTasks = []


function addDayTask() {

    const inputNewTask = document.getElementById('new-day-task')

    const newTask = {
        name: inputNewTask.value,
        id: dayTasks.length + 1
    }

    dayTasks.push(newTask)

    inputNewTask.value = '';


    showDayTasks()

}


function showDayTasks() {

    const ordenedList = document.getElementById('day-list');

    return dayTasks.forEach(task => {
        const newListItem = document.createElement('li');
        newListItem.innerHTML = `${task.name} <i class="fas fa-trash-alt"></i>`;
        ordenedList.appendChild(newListItem);
    });

}

function addNightList() {

}
