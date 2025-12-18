// Menu Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let icon = document.querySelector('#menu-icon i');

menuIcon.onclick = () => {
    navbar.classList.toggle('active'); // Toggle navbar visibility

    // Change the icon from bars to 'x' and vice versa
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-x');
    } else {
        icon.classList.remove('fa-x');
        icon.classList.add('fa-bars');
    }
};

// Scroll Behavior - Active Navigation Link on Scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Activate the corresponding nav link for the section in view
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky Header on Scroll
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close the navbar and switch back to 'fa-bars' on scroll
    icon.classList.remove('fa-x');
    icon.classList.add('fa-bars');
    navbar.classList.remove('active');
};

// Scroll Reveal Animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Reveal elements on scroll
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// Typed.js Animation for Text
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Web Designer'], // Rotating text
    typeSpeed: 70,
    backSpeed: 70, 
    backDelay: 1000,
    loop: true
});

