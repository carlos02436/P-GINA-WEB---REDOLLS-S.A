const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registration-form');
const loginContainer = document.querySelector('.login-container');
const signupContainer = document.querySelector('.signup-container');
const showSignupLink = document.getElementById('show-signup');
const showLoginLink = document.getElementById('show-login');
const authWrapper = document.querySelector('.auth-wrapper');
const body = document.body;

// --- Input Label Handling ---
const allInputs = document.querySelectorAll('.input-group input, .input-group select, .input-group textarea');

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

// --- Form Switching ---
showSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginContainer.classList.remove('active');
    signupContainer.classList.add('active');
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupContainer.classList.remove('active');
    loginContainer.classList.add('active');
});

// --- Login Submission ---
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
        alert('Por favor, ingresa correo y contraseña.');
        return;
    }

    console.log('Login: ', { email });
    alert('¡Inicio de sesión exitoso! (simulado)');
    loginForm.reset();
    loginForm.querySelectorAll('.input-group').forEach(group => group.classList.remove('has-content'));
});

// --- Registro de empresa (vacante o servicio) ---
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const empresa = document.getElementById('nombre-empresa').value;
    const tipoEntidad = document.getElementById('tipo-entidad').value;
    const tipoRegistro = document.getElementById('tipo-registro').value;
    const descripcion = document.getElementById('descripcion-registro').value;

    let isValid = true;

    if (!email || !password || !confirmPassword || !empresa || !tipoEntidad || !tipoRegistro || !descripcion) {
        alert('Por favor, completa todos los campos obligatorios.');
        isValid = false;
    } else if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        document.getElementById('signup-password').style.borderColor = 'red';
        document.getElementById('confirm-password').style.borderColor = 'red';
        isValid = false;
    }

    if (!isValid) return;

    // Simulación de registro
    console.log('Registro:');
    console.log({
        email,
        empresa,
        tipoEntidad,
        tipoRegistro,
        descripcion
    });

    alert('¡Registro exitoso! (simulado)');
    registrationForm.reset();
    registrationForm.querySelectorAll('.input-group').forEach(group => group.classList.remove('has-content'));
    document.getElementById('signup-password').style.borderColor = '';
    document.getElementById('confirm-password').style.borderColor = '';

    setTimeout(() => {
        signupContainer.classList.remove('active');
        loginContainer.classList.add('active');
    }, 500);
});

// --- Parallax Effect ---
body.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    authWrapper.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

body.addEventListener('mouseleave', () => {
    authWrapper.style.transform = `rotateY(0deg) rotateX(0deg)`;
    authWrapper.style.transition = 'transform 0.5s ease-out';
});

body.addEventListener('mouseenter', () => {
    authWrapper.style.transition = 'transform 0.1s linear';
});
