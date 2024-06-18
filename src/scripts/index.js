const { ok } = require("assert")



function sendUsername() {

    var usernameInput = document.getElementById('input-username')
    var username = usernameInput.value

    var inputedUsername = document.getElementById('inputed-username')
    var newUser = inputedUsername.innerHTML = username

    var okButton = document.getElementById('ok-button')
    
    if (newUser) {
        usernameInput.style.display = 'none'
        okButton.style.display = 'none'
    }
}