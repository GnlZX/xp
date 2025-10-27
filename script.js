// ===================================
// LOADING SCREEN
// ===================================

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 2000);
});

// ===================================
// PARTICLES.JS CONFIGURATION
// ===================================

if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#00ff88', '#00d4ff', '#ff0066']
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00ff88',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.5
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

// ===================================
// NAVIGATION
// ===================================

const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger icon
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active')
        ? 'rotate(45deg) translateY(8px)'
        : 'none';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active')
        ? 'rotate(-45deg) translateY(-8px)'
        : 'none';
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - navbar.offsetHeight;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// HERO STATS COUNTER
// ===================================

const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 100;
    const duration = 2000;
    const stepTime = duration / 100;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, stepTime);
};

// Trigger counter animation when hero is visible
const heroSection = document.querySelector('.hero');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(heroSection);

// ===================================
// SCHEDULE TABS
// ===================================

const tabButtons = document.querySelectorAll('.tab-btn');
const scheduleDays = document.querySelectorAll('.schedule-day');

// Populate schedule for all days
const scheduleData = {
    lunes: [
        { time: '11:00', title: '🚪 Apertura', desc: 'Bienvenida y acreditación de participantes' },
        { time: '12:00', title: '👗 Zona Cosplays', desc: 'Exhibición y registro de cosplays' },
        { time: '12:30', title: '🍔 Pausa Comida', desc: 'Menús de McDonald\'s y zona chill' },
        { time: '17:00', title: '🎮 Valorant Comp.', desc: 'Competición principal del día' },
        { time: '18:00', title: '🏆 Torneos Secundarios', desc: 'Competiciones alternativas' },
        { time: '18:30-20:00', title: '⚡ Actividad Especial', desc: 'Sorpresas y eventos únicos' },
        { time: '20:00-21:00', title: '🍕 Cena', desc: 'Cena y zona de relax' },
        { time: '22:00', title: '🎵 Concierto', desc: 'Música en vivo para cerrar el día' }
    ],
    martes: [
        { time: '11:00', title: '🚪 Apertura', desc: 'Bienvenida y acreditación de participantes' },
        { time: '12:00', title: '👗 Zona Cosplays', desc: 'Exhibición y registro de cosplays' },
        { time: '12:30', title: '🍔 Pausa Comida', desc: 'Menús de McDonald\'s y zona chill' },
        { time: '17:00', title: '🎮 LoL Comp.', desc: 'League of Legends - Competición principal' },
        { time: '18:00', title: '🏆 Torneos Secundarios', desc: 'Competiciones alternativas' },
        { time: '18:30-20:00', title: '⚡ Actividad Especial', desc: 'Sorpresas y eventos únicos' },
        { time: '20:00-21:00', title: '🍕 Cena', desc: 'Cena y zona de relax' },
        { time: '22:00', title: '🎵 Concierto', desc: 'Música en vivo para cerrar el día' }
    ],
    miercoles: [
        { time: '11:00', title: '🚪 Apertura', desc: 'Bienvenida y acreditación de participantes' },
        { time: '12:00', title: '🎯 Actividad especial', desc: 'Evento sorpresa del día' },
        { time: '12:30', title: '🍔 Pausa Comida', desc: 'Menús de McDonald\'s y zona chill' },
        { time: '17:00', title: '🚗 Rocket League Comp.', desc: 'Fútbol con coches - Competición principal' },
        { time: '18:00', title: '🏆 Torneos Secundarios', desc: 'Competiciones alternativas' },
        { time: '18:30-20:00', title: '⚡ Actividad Especial', desc: 'Sorpresas y eventos únicos' },
        { time: '20:00-21:00', title: '🍕 Cena', desc: 'Cena y zona de relax' },
        { time: '22:00', title: '🎵 Concierto', desc: 'Música en vivo para cerrar el día' }
    ],
    jueves: [
        { time: '11:00', title: '🚪 Apertura', desc: 'Bienvenida y acreditación de participantes' },
        { time: '12:00', title: '👗 Zona Cosplays', desc: 'Exhibición y registro de cosplays' },
        { time: '12:30', title: '🍔 Pausa Comida', desc: 'Menús de McDonald\'s y zona chill' },
        { time: '17:00', title: '🎯 Rainbow 6 Comp.', desc: 'Competición táctica principal' },
        { time: '18:00', title: '🏆 Torneos Secundarios', desc: 'Competiciones alternativas' },
        { time: '18:30-20:00', title: '⚡ Actividad Especial', desc: 'Sorpresas y eventos únicos' },
        { time: '20:00-21:00', title: '🍕 Cena', desc: 'Cena y zona de relax' },
        { time: '22:00', title: '🎵 Concierto', desc: 'Música en vivo para cerrar el día' }
    ],
    viernes: [
        { time: '11:00', title: '🚪 Apertura', desc: 'Bienvenida y acreditación de participantes' },
        { time: '12:00', title: '🎯 Activida especial', desc: 'Evento sorpresa del día' },
        { time: '12:30', title: '🍔 Pausa Comida', desc: 'Menús de McDonald\'s y zona chill' },
        { time: '17:00', title: '💥 CS:GO Comp.', desc: 'Counter-Strike - Competición principal' },
        { time: '18:00', title: '🏆 Torneos Secundarios', desc: 'Competiciones alternativas' },
        { time: '18:30-20:00', title: '⚡ Actividad Especial', desc: 'Sorpresas y eventos únicos' },
        { time: '20:00-21:00', title: '🍕 Cena', desc: 'Cena y zona de relax' },
        { time: '22:00', title: '🎵 Concierto', desc: 'Música en vivo para cerrar el día' }
    ],
    sabado: [
        { time: '11:00', title: '🚪 Apertura', desc: 'Bienvenida y acreditación de participantes' },
        { time: '12:00', title: '🎯 Actividad especial', desc: 'Evento sorpresa del día' },
        { time: '12:30', title: '🍔 Pausa Comida', desc: 'Menús de McDonald\'s y zona chill' },
        { time: '17:00', title: '⚡ Marvel Rivals Comp.', desc: 'Superhéroes en combate - Competición principal' },
        { time: '18:00', title: '🏆 Torneos Secundarios', desc: 'Competiciones alternativas' },
        { time: '18:30-20:00', title: '⚡ Actividad Especial', desc: 'Sorpresas y eventos únicos' },
        { time: '20:00-21:00', title: '🍕 Cena', desc: 'Cena y zona de relax' },
        { time: '22:00', title: '🎵 Concierto', desc: 'Música en vivo para cerrar el día' }
    ],
    domingo: [
        { time: '11:00', title: '🚪 Apertura', desc: 'Bienvenida y acreditación de participantes' },
        { time: '12:00', title: '👗 Zona Cosplays', desc: 'Exhibición final y premios de cosplay' },
        { time: '12:30', title: '🍔 Pausa Comida', desc: 'Menús de McDonald\'s y zona chill' },
        { time: '17:00', title: '❓ Sorpresa', desc: 'Evento especial final del evento' },
        { time: '18:00', title: '🏆 Torneos Secundarios', desc: 'Competiciones de despedida' },
        { time: '18:30-20:00', title: '⚡ Actividad Especial', desc: 'Sorpresas y eventos únicos' },
        { time: '20:00', title: '🎉 Actividad Especial', desc: 'Ceremonia de clausura' },
        { time: '21:00', title: '❓ Sorpresa', desc: 'Boss Final - Desafío secreto' },
        { time: '22:00', title: '🎵 Concierto Final', desc: 'Cierre épico del evento' }
    ]
};

// Function to create timeline items
function createTimeline(day) {
    const schedule = scheduleData[day];
    if (!schedule) return '';

    return schedule.map((item, index) => `
        <div class="timeline-item" data-aos="fade-left" data-aos-delay="${index * 50}">
            <div class="timeline-time">${item.time}</div>
            <div class="timeline-content">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
            </div>
        </div>
    `).join('');
}

// Initialize all schedule days
scheduleDays.forEach(day => {
    const dayName = day.id;
    const timeline = day.querySelector('.timeline');
    if (timeline && scheduleData[dayName]) {
        timeline.innerHTML = createTimeline(dayName);
    }
});

// Tab switching functionality
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetDay = button.getAttribute('data-day');

        // Remove active class from all buttons and days
        tabButtons.forEach(btn => btn.classList.remove('active'));
        scheduleDays.forEach(day => day.classList.remove('active'));

        // Add active class to clicked button and corresponding day
        button.classList.add('active');
        document.getElementById(targetDay).classList.add('active');

        // Re-trigger AOS animations for the new timeline
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    });
});

// ===================================
// SCROLL ANIMATIONS (AOS Alternative)
// ===================================

const createObserverForAnimations = () => {
    const animatedElements = document.querySelectorAll('[data-aos]');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });
};

// Initialize scroll animations
createObserverForAnimations();

// ===================================
// BACK TO TOP BUTTON
// ===================================

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// FORM HANDLING
// ===================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Show success message (in a real app, you would send this to a server)
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto. 🎮');

        // Reset form
        contactForm.reset();
    });
}

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        alert(`¡Gracias por suscribirte! Te enviaremos las novedades a ${email} 🚀`);
        newsletterForm.reset();
    });
}

// ===================================
// TICKET PURCHASE BUTTONS
// ===================================

const ticketButtons = document.querySelectorAll('.btn-ticket');

ticketButtons.forEach(button => {
    button.addEventListener('click', () => {
        const ticketType = button.closest('.ticket-card').querySelector('h3').textContent;
        alert(`¡Procesando compra de ${ticketType}! 🎟️\n\nEn una versión completa, esto te llevaría a la pasarela de pago.`);
    });
});

// ===================================
// EASTER EGG: KONAMI CODE
// ===================================

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    // Add rainbow effect to the entire page
    document.body.style.animation = 'rainbow 2s linear infinite';

    // Create confetti effect
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }

    // Show message
    const message = document.createElement('div');
    message.textContent = '🎮 ¡Código Konami Activado! ¡Eres un verdadero gamer! 🏆';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #00ff88 0%, #00d4ff 100%);
        padding: 2rem 3rem;
        border-radius: 20px;
        font-size: 1.5rem;
        font-weight: bold;
        color: #0a0e27;
        z-index: 10000;
        box-shadow: 0 0 50px rgba(0, 255, 136, 0.8);
        animation: pulse 1s ease-in-out infinite;
    `;
    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
        document.body.style.animation = '';
    }, 3000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.textContent = ['🎮', '🕹️', '👾', '🎯', '⚡', '🏆'][Math.floor(Math.random() * 6)];
    confetti.style.cssText = `
        position: fixed;
        top: -50px;
        left: ${Math.random() * 100}vw;
        font-size: 2rem;
        z-index: 9999;
        pointer-events: none;
        animation: fall ${2 + Math.random() * 3}s linear;
    `;
    document.body.appendChild(confetti);

    confetti.addEventListener('animationend', () => {
        confetti.remove();
    });
}

// Add CSS for confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }

    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ===================================
// PASSWORD COPY FUNCTIONALITY
// ===================================

const passwordCode = document.querySelector('.password-code');

if (passwordCode) {
    passwordCode.style.cursor = 'pointer';
    passwordCode.title = 'Click para copiar';

    passwordCode.addEventListener('click', () => {
        const text = passwordCode.textContent;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = passwordCode.textContent;
            passwordCode.textContent = '✓ Copiado!';
            passwordCode.style.color = '#00ff88';

            setTimeout(() => {
                passwordCode.textContent = originalText;
                passwordCode.style.color = '';
            }, 2000);
        });
    });
}

// ===================================
// SMOOTH REVEAL ON SCROLL
// ===================================

const revealElements = () => {
    const elements = document.querySelectorAll('.about-card, .feature-item, .competition-card, .product-card, .ticket-card');

    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
};

// Initialize reveal
window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// ===================================
// DYNAMIC YEAR IN FOOTER
// ===================================

const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText) {
    footerText.innerHTML = footerText.innerHTML.replace('2025', currentYear);
}

// ===================================
// PRELOAD IMAGES
// ===================================

const preloadImages = () => {
    const images = [
        // Add any image URLs here that need to be preloaded
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
};

preloadImages();

// ===================================
// CONSOLE EASTER EGG
// ===================================

console.log('%c🎮 LAN XP - 127.0.0.1 🎮', 'color: #00ff88; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #00ff88;');
console.log('%c¡Bienvenido al código fuente!', 'color: #00d4ff; font-size: 16px;');
console.log('%cSi estás viendo esto, eres un verdadero hacker. 👨‍💻', 'color: #ff0066; font-size: 14px;');
console.log('%cPrueba el Código Konami: ↑ ↑ ↓ ↓ ← → ← → B A', 'color: #00ff88; font-size: 12px; font-style: italic;');

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Debounce function for scroll events
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Optimize scroll listeners
const optimizedScrollHandler = debounce(() => {
    revealElements();
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);

// ===================================
// INIT
// ===================================

console.log('%c✓ Todos los scripts cargados correctamente', 'color: #00ff88; font-weight: bold;');
