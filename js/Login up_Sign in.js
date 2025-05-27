const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registration-form');
const loginContainer = document.querySelector('.login-container');
const signupContainer = document.querySelector('.signup-container');
const showSignupLink = document.getElementById('show-signup');
const showLoginLink = document.getElementById('show-login');
const authWrapper = document.querySelector('.auth-wrapper');
const body = document.body;

// --- Input Label Handling ---
const allInputs = document.querySelectorAll('.input-group input');

allInputs.forEach(input => {
    // Check initial state (e.g., for autofill)
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


// --- Form Submission Handling ---
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    if (!email || !password) {
        alert('Por favor, ingresa correo y contraseña.');
        return;
    }

    console.log('Login attempt:');
    console.log('Email:', email);
    // NEVER log passwords in production!
    console.log('Remember Me:', rememberMe);

    // Simulate login success
    alert('¡Inicio de sesión exitoso! (simulado)');
    loginForm.reset();
    loginForm.querySelectorAll('.input-group').forEach(group => group.classList.remove('has-content'));
    // Ensure checkbox is also reset visually if needed (though form.reset() should handle it)
    document.getElementById('remember-me').checked = false;
});


registrationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const passwordInput = document.getElementById('signup-password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    // Reset previous error styles
    passwordInput.style.borderColor = '';
    confirmPasswordInput.style.borderColor = '';

    // Simple validation
    let isValid = true;
    if (!email || !password || !confirmPassword) {
        alert('Por favor, rellena todos los campos.');
        isValid = false;
    } else if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        passwordInput.style.borderColor = 'red'; // Use border color for errors
        confirmPasswordInput.style.borderColor = 'red';
        isValid = false;
    }

    if (!isValid) {
        return; // Stop submission if validation fails
    }

    // Here you would typically send the data to a server
    console.log('Registration submitted!');
    console.log('Email:', email);
    // NEVER log passwords in production!
    // console.log('Password:', password);

    alert('¡Registro exitoso! (simulado)');

    // Reset form and clear 'has-content' classes
    registrationForm.reset();
    registrationForm.querySelectorAll('.input-group').forEach(group => group.classList.remove('has-content'));
    // Also reset any error styling
    passwordInput.style.borderColor = '';
    confirmPasswordInput.style.borderColor = '';

    // Optionally switch back to login after successful registration
    setTimeout(() => {
        signupContainer.classList.remove('active');
        loginContainer.classList.add('active');
    }, 500); // Delay slightly
});

// --- Parallax Mouse Effect ---
body.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25; // Divide for less drastic effect
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    authWrapper.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Reset transform when mouse leaves the window to prevent abrupt snap
body.addEventListener('mouseleave', () => {
    authWrapper.style.transform = `rotateY(0deg) rotateX(0deg)`;
     authWrapper.style.transition = 'transform 0.5s ease-out'; /* Smooth return */
});
// Add transition back when mouse enters (might be needed if mouseleave removes it)
body.addEventListener('mouseenter', () => {
    authWrapper.style.transition = 'transform 0.1s linear'; /* Faster response to mouse move */
});