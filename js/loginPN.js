// Alternar entre pestañas
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginContent = document.getElementById('login-content');
const registerContent = document.getElementById('register-content');

loginTab.addEventListener('click', () => {
    loginContent.classList.remove('hidden');
    registerContent.classList.add('hidden');
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
});

registerTab.addEventListener('click', () => {
    registerContent.classList.remove('hidden');
    loginContent.classList.add('hidden');
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
});

// Inputs estilo flotante
const inputs = document.querySelectorAll('.input-group input');
inputs.forEach(input => {
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '0.5rem';
    input.style.padding = '0.75rem 1rem';
    input.style.width = '100%';
    input.style.boxSizing = 'border-box';
    input.style.marginTop = '0.25rem';
    input.style.marginBottom = '0.5rem';

    if (input.value) {
        input.nextElementSibling.style.top = '0';
        input.nextElementSibling.style.fontSize = '12px';
        input.nextElementSibling.style.color = '#4f46e5';
    }

    input.addEventListener('focus', function () {
        this.nextElementSibling.style.top = '0';
        this.nextElementSibling.style.fontSize = '12px';
        this.nextElementSibling.style.color = '#4f46e5';
    });

    input.addEventListener('blur', function () {
        if (!this.value) {
            this.nextElementSibling.style.top = '50%';
            this.nextElementSibling.style.fontSize = 'inherit';
            this.nextElementSibling.style.color = '#9ca3af';
        }
    });
});

// Envío simulado de formularios
const loginForm = document.getElementById('login-natural-form');
const registerForm = document.getElementById('register-natural-form');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Inicio de sesión como Persona Natural');
});

registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Registro de Persona Natural procesado');
});
