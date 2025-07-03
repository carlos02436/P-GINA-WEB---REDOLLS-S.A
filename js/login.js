document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const googleBtn = document.querySelector('.google-btn');
    const facebookBtn = document.querySelector('.facebook-btn');
    const flipCard = document.querySelector('.flip-card');
    const goToRegisterBtn = document.getElementById('go-to-register');
    const goToLoginBtn = document.getElementById('go-to-login');

    const showDemoAlert = (message) => {
        alert(`${message} (Esto es solo una demostración)`);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            console.log('Intento de inicio de sesión con:');
            console.log('Email:', email);
            console.log('Password:', password);
            if(email && password) {
                showDemoAlert('Inicio de sesión exitoso');
            } else {
                showDemoAlert('Por favor, ingresa email y contraseña');
            }
        });
    }

    if(registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const service = document.getElementById('register-service').value;

            console.log('Intento de registro con:');
            console.log('Nombre:', name);
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Servicio:', service);

            if(name && email && password && service) {
                 showDemoAlert('Registro exitoso');
                 flipCard.classList.remove('is-flipped');
            } else {
                showDemoAlert('Por favor, completa todos los campos para registrarte');
            }
        });
    }

    if (googleBtn) {
        googleBtn.addEventListener('click', () => {
            console.log('Botón "Acceder con Google" presionado.');
            showDemoAlert('Iniciando sesión con Google...');
        });
    }

    if (facebookBtn) {
        facebookBtn.addEventListener('click', () => {
            console.log('Botón "Acceder con Facebook" presionado.');
            showDemoAlert('Iniciando sesión con Facebook...');
        });
    }

    if(goToRegisterBtn) {
        goToRegisterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            flipCard.classList.add('is-flipped');
        });
    }

    if(goToLoginBtn) {
        goToLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            flipCard.classList.remove('is-flipped');
        });
    }
});