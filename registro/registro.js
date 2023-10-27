const registerForm = document.getElementById('register-form');
const registrationSuccess = document.getElementById('registration-success');
const registrationError = document.getElementById('registration-error');
const registerButton = document.getElementById('register-button');

registerForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o envio do formulário

    const fullname = document.getElementById('fullname').value;
    const birthdate = document.getElementById('birthdate').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if( password !== confirmPassword){
        registrationError.style.display = 'block';
        registrationSuccess.style.display = 'none';
    } else if (fullname && birthdate && email && password && confirmPassword) {
        registerForm.reset();
        registrationSuccess.style.display = 'block';
        registrationError.style.display = 'none';
        registerButton.disabled = true;
        // Aguarde 5 segundos antes de redirecionar
        setTimeout(function() {
            window.location.href = '../login/login.html';
        }, 4000); 
    } else  {
        registrationError.style.display = 'block';
        registrationSuccess.style.display = 'none';
    }
});

const formInputs = registerForm.querySelectorAll('input');
formInputs.forEach(input => {
    input.addEventListener('input', function () {
        const isFormValid = Array.from(formInputs).every(input => input.value);
        registerButton.disabled = !isFormValid;
    });
});
