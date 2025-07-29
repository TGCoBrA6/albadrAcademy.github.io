// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;
const scrollThreshold = 50; // Minimum scroll amount before showing/hiding header

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // At the top of the page
    if (currentScroll <= 0) {
        header.classList.remove('scroll-down');
        header.classList.remove('scroll-up');
        return;
    }
    
    // Scrolling down and past threshold
    if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    }
    // Scrolling up
    else if (currentScroll < lastScroll) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const overlay = document.querySelector('.menu-overlay');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking overlay
overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Close menu when clicking a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}); 