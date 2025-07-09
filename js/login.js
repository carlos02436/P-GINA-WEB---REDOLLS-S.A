// Toggle entre login y registro
document.getElementById('login-tab').addEventListener('click', function () {
    document.getElementById('login-content').classList.remove('hidden');
    document.getElementById('register-content').classList.add('hidden');
    document.getElementById('login-tab').classList.add('active');
    document.getElementById('register-tab').classList.remove('active');
});

document.getElementById('register-tab').addEventListener('click', function () {
    document.getElementById('login-content').classList.add('hidden');
    document.getElementById('register-content').classList.remove('hidden');
    document.getElementById('login-tab').classList.remove('active');
    document.getElementById('register-tab').classList.add('active');
});

document.getElementById('switch-to-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login-tab').click();
});

// Toggle entre persona natural y jurídica en login
document.getElementById('natural-btn').addEventListener('click', function () {
    document.getElementById('natural-btn').classList.remove('bg-gray-100');
    document.getElementById('natural-btn').classList.add('bg-white');
    document.getElementById('juridica-btn').classList.remove('bg-white');
    document.getElementById('juridica-btn').classList.add('bg-gray-100');
    // Aquí podrías cambiar campos del formulario si es necesario
});

document.getElementById('juridica-btn').addEventListener('click', function () {
    document.getElementById('juridica-btn').classList.remove('bg-gray-100');
    document.getElementById('juridica-btn').classList.add('bg-white');
    document.getElementById('natural-btn').classList.remove('bg-white');
    document.getElementById('natural-btn').classList.add('bg-gray-100');
    // Aquí podrías cambiar campos del formulario si es necesario
});

// Toggle entre persona natural y jurídica en registro
document.getElementById('reg-natural-btn').addEventListener('click', function () {
    document.getElementById('reg-natural-btn').classList.remove('bg-gray-100');
    document.getElementById('reg-natural-btn').classList.add('bg-white');
    document.getElementById('reg-juridica-btn').classList.remove('bg-white');
    document.getElementById('reg-juridica-btn').classList.add('bg-gray-100');
    document.getElementById('register-natural-form').classList.remove('hidden');
    document.getElementById('register-juridica-form').classList.add('hidden');
});

document.getElementById('reg-juridica-btn').addEventListener('click', function () {
    document.getElementById('reg-juridica-btn').classList.remove('bg-gray-100');
    document.getElementById('reg-juridica-btn').classList.add('bg-white');
    document.getElementById('reg-natural-btn').classList.remove('bg-white');
    document.getElementById('reg-natural-btn').classList.add('bg-gray-100');
    document.getElementById('register-natural-form').classList.add('hidden');
    document.getElementById('register-juridica-form').classList.remove('hidden');
});

// Manejo de envío de formularios
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Inicio de sesión procesado');
    // Aquí iría la lógica de autenticación
});

document.getElementById('register-natural-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Registro de persona natural procesado');
    // Aquí iría la lógica de registro
});

document.getElementById('register-juridica-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Registro de persona jurídica procesado');
    // Aquí iría la lógica de registro
});

// Inicialización de labels flotantes
document.querySelectorAll('.input-group input').forEach(input => {
    // Si el campo tiene contenido al cargar, mover el label
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