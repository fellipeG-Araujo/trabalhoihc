const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');

usernameInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);

function checkInputs() {
    if (usernameInput.value && passwordInput.value) {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
}
