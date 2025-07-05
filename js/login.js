const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registration-form');
const loginContainer = document.querySelector('.login-container');
const signupContainer = document.querySelector('.signup-container');
const showSignupLink = document.getElementById('show-signup');
const showLoginLink = document.getElementById('show-login');
const authWrapper = document.querySelector('.auth-wrapper');

// --- Input Label Handling ---
const allInputs = document.querySelectorAll('.input-group input');

allInputs.forEach(input => {
    if (input.value) {
        input.closest('.input-group').classList.add('has-content');
    }

    input.addEventListener('focus', () => {
        input.closest('.input-group').classList.add('is-focused');
    });

    input.addEventListener('blur', () => {
        input.closest('.input-group').classList.remove('is-focused');
        if (!input.value) {
            input.closest('.input-group').classList.remove('has-content');
        }
    });

    input.addEventListener('input', () => {
        if (input.value) {
            input.closest('.input-group').classList.add('has-content');
        } else {
            input.closest('.input-group').classList.remove('has-content');
        }
    });
});

// --- Cambio de formulario con efecto de giro ---
showSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    authWrapper.classList.add('flipped');
    loginContainer.classList.remove('active');
    signupContainer.classList.add('active');
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    authWrapper.classList.remove('flipped');
    signupContainer.classList.remove('active');
    loginContainer.classList.add('active');
});

// --- Login ---
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    if (!email || !password) {
        alert('Por favor, ingresa correo y contraseña.');
        return;
    }

    alert('¡Inicio de sesión exitoso! (simulado)');
    loginForm.reset();
    loginForm.querySelectorAll('.input-group').forEach(group => group.classList.remove('has-content'));
    document.getElementById('remember-me').checked = false;
});

// --- Registro ---
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const passwordInput = document.getElementById('signup-password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    passwordInput.style.borderColor = '';
    confirmPasswordInput.style.borderColor = '';

    if (!email || !password || !confirmPassword) {
        alert('Por favor, rellena todos los campos.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        passwordInput.style.borderColor = 'red';
        confirmPasswordInput.style.borderColor = 'red';
        return;
    }

    alert('¡Registro exitoso! (simulado)');
    registrationForm.reset();
    registrationForm.querySelectorAll('.input-group').forEach(group => group.classList.remove('has-content'));
    passwordInput.style.borderColor = '';
    confirmPasswordInput.style.borderColor = '';

    setTimeout(() => {
        authWrapper.classList.remove('flipped');
        signupContainer.classList.remove('active');
        loginContainer.classList.add('active');
    }, 500);
});
