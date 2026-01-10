// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeCircle = document.getElementById('themeCircle');
const html = document.documentElement;

// Check for saved theme
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
themeCircle.textContent = currentTheme === 'dark' ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeCircle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
});

// Mobile Navigation
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-center a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll to Top Button
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scroll offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Simple particle effect
const particlesContainer = document.getElementById('particles-js');
if (particlesContainer) {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'var(--primary)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5;
        particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        particlesContainer.appendChild(particle);
    }
}

// Number animation for stats
const animateNumbers = () => {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + '+';
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + '+';
            }
        }, 30);
    });
};

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stats-section')) {
                animateNumbers();
                observer.unobserve(entry.target);
            }
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    observer.observe(statsSection);
}

// Modal Functions for Project Popup
function openPopup() {
    const modal = document.getElementById("designModal");
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

function closePopup() {
    const modal = document.getElementById("designModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById("designModal");
    if (event.target == modal) {
        closePopup();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});
