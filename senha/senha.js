const emailInput = document.getElementById('email');
const loginButton = document.getElementById('login-button');

emailInput.addEventListener('input', checkInputs);

function checkInputs() {
    if (emailInput) {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
}
