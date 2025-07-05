document.addEventListener('DOMContentLoaded', function () {
    // Alternar navegación móvil
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('nav-open');
            const isNavOpen = mainNav.classList.contains('nav-open');
            navToggle.setAttribute('aria-expanded', isNavOpen);
            if (isNavOpen) {
                navToggle.setAttribute('aria-label', 'Cerrar menú de navegación');
            } else {
                navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
            }
        });
    }

    // Desplazamiento suave para enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .hero-buttons a[href^="#"], .footer-links a[href^="#"], .join-card a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Para enlaces ficticios como #login-register, no prevenir el comportamiento por defecto ni desplazar
                if (targetId === "#login-register") {
                    // Potencialmente abrir un modal aquí en el futuro, por ahora, no hacer nada o alertar
                    // alert("Login/Registro no implementado aún.");
                    return; // Salir sin desplazar para este enlace específico
                }
                // Cerrar navegación móvil si está abierta
                if (mainNav && mainNav.classList.contains('nav-open')) {
                    mainNav.classList.remove('nav-open');
                    navToggle.setAttribute('aria-expanded', 'false');
                    navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
                }

                // scrollIntoView es más suave que el cálculo manual para casos básicos
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Establecer el año actual en el pie de página
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Animaciones simples de desplazamiento para tarjetas (opcional, para un efecto "atractivo")
    const cards = document.querySelectorAll('.card');
    const observerOptions = {
        root: null, // ventana gráfica
        rootMargin: '0px',
        threshold: 0.1 // 10% del elemento visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Dejar de observar una vez animado
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        // Estado inicial para la animación
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });

    // Efecto parallax para la sección hero
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        window.addEventListener('scroll', function () {
            const scrollPosition = window.pageYOffset;
            // Ajusta el factor 0.4 para cambiar la velocidad/intensidad del efecto parallax
            // Asegúrate de que en el CSS la propiedad 'background-attachment' no esté en 'fixed' para que funcione correctamente en algunos navegadores
            // La parte '50%' ayuda a mantener la imagen centrada inicialmente si tu CSS tenía 'background-position: center'
            // Si tu CSS es `background-position: center center;` entonces:
            // heroSection.style.backgroundPosition = `center ${50 + scrollPosition * 0.1}%`; // Más lento, sutil
            // O para un desplazamiento basado en píxeles desde el centro original:
            heroSection.style.backgroundPositionY = (scrollPosition * 0.4) + 'px';
        });
    }
});

// Pasar comentarios
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let index = 0;
let intervalo;

// Función para mostrar un slide específico
function mostrarSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
}

// Función para pasar al siguiente slide
function siguienteSlide() {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
}

// Función para volver al anterior slide
function anteriorSlide() {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide(index);
}

// Iniciar reproducción automática
function iniciarAutoplay() {
    intervalo = setInterval(siguienteSlide, 5000); // Cambia cada 5 segundos
}

// Detener reproducción automática (por si quieres reiniciar al hacer clic)
function detenerAutoplay() {
    clearInterval(intervalo);
}

// Eventos de los botones manuales
prevBtn.addEventListener('click', () => {
    anteriorSlide();
    reiniciarAutoplay();
});

nextBtn.addEventListener('click', () => {
    siguienteSlide();
    reiniciarAutoplay();
});

// Reinicia la reproducción automática cuando se interactúa
function reiniciarAutoplay() {
    detenerAutoplay();
    iniciarAutoplay();
}

// Inicialización
mostrarSlide(index);
iniciarAutoplay();

// Modales Servicios
document.addEventListener('DOMContentLoaded', () => {
    const openButtons = document.querySelectorAll('[data-modal-target]');
    const closeButtons = document.querySelectorAll('[data-close-button]');
    const modals = document.querySelectorAll('.modal');

    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);

            if (modal) {
                // Mostrar el modal
                modal.style.display = 'block';
                modal.style.position = 'fixed';
                modal.style.left = '0';
                modal.style.top = '0';
                modal.style.width = '100%';
                modal.style.height = '100%';
                modal.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                modal.style.zIndex = '999';

                // Centrar el contenido
                const modalContent = modal.querySelector('.modal-content');
                if (modalContent) {
                    modalContent.style.position = 'absolute';
                    modalContent.style.top = '35%';
                    modalContent.style.left = '50%';
                    modalContent.style.transform = 'translate(-50%, -50%)';
                }
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) modal.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});

// Modales Vacantes
document.addEventListener("DOMContentLoaded", () => {
    const openButtons = document.querySelectorAll('.btn-card');
    const closeButtons = document.querySelectorAll('.close');

    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                // Mostrar modal
                modal.style.display = 'block';

                // Centramos el contenido manualmente
                const modalContent = modal.querySelector('.modal-content');
                modal.style.display = 'block';
                modal.style.position = 'fixed';
                modal.style.left = '0';
                modal.style.top = '0';
                modal.style.width = '100%';
                modal.style.height = '100%';
                modal.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                modal.style.zIndex = '999';

                modalContent.style.position = 'absolute';
                modalContent.style.top = '35%';
                modalContent.style.left = '50%';
                modalContent.style.transform = 'translate(-50%, -50%)';
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-close');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Cerrar al hacer clic fuera del contenido
    window.addEventListener('click', (e) => {
        document.querySelectorAll('.modal').forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});

