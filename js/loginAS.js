// loginPN.js

document.addEventListener("DOMContentLoaded", () => {
    const loginTab = document.getElementById("login-tab");
    const registerTab = document.getElementById("register-tab");
    const loginContent = document.getElementById("login-content");
    const registerContent = document.getElementById("register-content");

    // Cambiar entre pestañas
    loginTab.addEventListener("click", () => {
        loginTab.classList.add("active");
        registerTab.classList.remove("active");

        loginContent.classList.remove("hidden");
        registerContent.classList.add("hidden");
    });

    registerTab.addEventListener("click", () => {
        registerTab.classList.add("active");
        loginTab.classList.remove("active");

        registerContent.classList.remove("hidden");
        loginContent.classList.add("hidden");
    });

    // Mostrar año actual en el footer
    const currentYearSpan = document.getElementById("currentYear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Funcionalidad de formularios (solo validación básica en consola)
    const loginForm = document.getElementById("login-empresa-form");
    const registerForm = document.getElementById("register-natural-form");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // Aquí puedes agregar lógica real de autenticación con backend
        console.log("Inicio de sesión de aspirante enviado");
    });

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // Aquí puedes agregar lógica de registro con backend
        console.log("Registro de aspirante enviado");
    });
});
