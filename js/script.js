document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
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

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .hero-buttons a[href^="#"], .footer-links a[href^="#"], .join-card a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // For dummy links like #login-register, don't prevent default or scroll
                if (targetId === "#login-register") {
                    // Potentially open a modal here in the future, for now, do nothing or alert
                    // alert("Login/Registro no implementado aún.");
                    return; // Exit without scrolling for this specific link
                }
                // Close mobile nav if open
                if (mainNav && mainNav.classList.contains('nav-open')) {
                    mainNav.classList.remove('nav-open');
                    navToggle.setAttribute('aria-expanded', 'false');
                    navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
                }
                
                // scrollIntoView is smoother than manual calculation for basic cases
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' 
                });
            }
        });
    });

    // Set current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Simple scroll animations for cards (optional, for "engaging" feel)
    const cards = document.querySelectorAll('.card');
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of item visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        // Initial state for animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });

    // Parallax effect for hero section
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            // Adjust the 0.4 factor to change the parallax speed/intensity
            // Ensure background-attachment is not 'fixed' in CSS for this to work as expected on some browsers
            // The '50%' part helps keep it centered initially if your CSS background-position was 'center'
            // If your CSS is `background-position: center center;` then:
            // heroSection.style.backgroundPosition = `center ${50 + scrollPosition * 0.1}%`; // Slower, subtle
            // Or for pixel-based shift from original center:
            heroSection.style.backgroundPositionY = (scrollPosition * 0.4) + 'px';
        });
    }
});

// diseño responsive para cualquier dispositivo
document.addEventListener('DOMContentLoaded', function () {
    const isMobile = window.innerWidth <= 768; // puedes ajustar este valor

    if (isMobile) {
        // Aumentar el tamaño del logo
        const logo = document.getElementById('logo-img');
        if (logo) {
            logo.style.width = '80px'; // tamaño más grande
            logo.style.height = 'auto';
        }

        // Reducir el input de búsqueda
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.style.width = '100px';
            searchInput.style.fontSize = '12px';
            searchInput.style.padding = '5px';
        }

        // Reducir el botón de búsqueda
        const searchButton = document.querySelector('.search-form button');
        if (searchButton) {
            searchButton.style.fontSize = '12px';
            searchButton.style.padding = '5px 10px';
        }
    }
});

