
const loginBtn = document.getElementById('loginBtn');
const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');


loginBtn.addEventListener('click', () => {
    clearLoginForm();
    loginModal.show();
});


function showMessage(message) {
    alert(message);
}


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

 
    loginMessage.textContent = '';
    loginMessage.className = '';


    if (!loginForm.checkValidity()) {
        loginForm.classList.add('was-validated');
        return;
    }

    
    const email = document.getElementById('emailInput').value;
    loginMessage.textContent = `Bienvenido, ${email}! Has iniciado sesión correctamente.`;
    loginMessage.className = 'alert alert-success';

  
    setTimeout(() => {
        loginModal.hide();
    }, 2000);
});


function clearLoginForm() {
    loginForm.reset();
    loginForm.classList.remove('was-validated');
    loginMessage.textContent = '';
    loginMessage.className = '';
}
