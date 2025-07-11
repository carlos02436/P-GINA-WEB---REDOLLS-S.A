// --- Alternancia entre Login y Registro ---
document.getElementById('login-tab').addEventListener('click', function () {
    document.getElementById('login-content').classList.remove('hidden');
    document.getElementById('register-content').classList.add('hidden');
    this.classList.add('active');
    document.getElementById('register-tab').classList.remove('active');
});

document.getElementById('register-tab').addEventListener('click', function () {
    document.getElementById('register-content').classList.remove('hidden');
    document.getElementById('login-content').classList.add('hidden');
    this.classList.add('active');
    document.getElementById('login-tab').classList.remove('active');
});


// --- Registro: Mostrar el formulario adecuado ---
function activarBoton(activo, inactivos) {
    activo.classList.remove('bg-gray-100');
    activo.classList.add('bg-white');
    inactivos.forEach(id => {
        const btn = document.getElementById(id);
        btn.classList.remove('bg-white');
        btn.classList.add('bg-gray-100');
    });
}

function mostrarFormulario(idMostrar, idsOcultar) {
    document.getElementById(idMostrar).classList.remove('hidden');
    idsOcultar.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
}

document.getElementById('reg-natural-btn').addEventListener('click', function () {
    activarBoton(this, ['reg-aspirante-btn', 'reg-juridica-btn']);
    mostrarFormulario('register-natural-form', ['register-aspirante-form', 'register-juridica-form']);
});

document.getElementById('reg-aspirante-btn').addEventListener('click', function () {
    activarBoton(this, ['reg-natural-btn', 'reg-juridica-btn']);
    mostrarFormulario('register-aspirante-form', ['register-natural-form', 'register-juridica-form']);
});

document.getElementById('reg-juridica-btn').addEventListener('click', function () {
    activarBoton(this, ['reg-natural-btn', 'reg-aspirante-btn']);
    mostrarFormulario('register-juridica-form', ['register-natural-form', 'register-aspirante-form']);
});


// --- Estilos para Inputs: Borde, Espaciado, Estilo Flotante ---
document.querySelectorAll('.input-group input').forEach(input => {
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


// --- Estilo para botones sociales: Google y Facebook ---
function estilizarBotonRedSocial(boton, colorTexto, colorBorde, colorFondoHover) {
    boton.style.display = 'flex';
    boton.style.alignItems = 'center';
    boton.style.justifyContent = 'center';
    boton.style.width = '100%';
    boton.style.padding = '0.5rem 1rem';
    boton.style.marginTop = '0.5rem';
    boton.style.border = `1px solid ${colorBorde}`;
    boton.style.borderRadius = '0.5rem';
    boton.style.backgroundColor = '#ffffff';
    boton.style.color = colorTexto;
    boton.style.fontSize = '0.95rem';
    boton.style.fontWeight = '500';
    boton.style.cursor = 'pointer';
    boton.style.transition = 'background-color 0.3s, border-color 0.3s';

    boton.addEventListener('mouseover', () => {
        boton.style.backgroundColor = colorFondoHover;
    });

    boton.addEventListener('mouseout', () => {
        boton.style.backgroundColor = '#ffffff';
    });
}

document.querySelectorAll('button').forEach(boton => {
    if (boton.textContent.includes('Google')) {
        estilizarBotonRedSocial(boton, '#d93025', '#d1d5db', '#fef2f2');
    } else if (boton.textContent.includes('Facebook')) {
        estilizarBotonRedSocial(boton, '#1877f2', '#d1d5db', '#eff6ff');
    }
});

// --- Envío de formularios (simulado) ---
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Inicio de sesión procesado');
});

document.getElementById('register-natural-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Registro de persona natural procesado');
});

document.getElementById('register-aspirante-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Registro de aspirante procesado');
});

document.getElementById('register-juridica-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Registro de empresa procesado');
});
