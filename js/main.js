document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .product-card, .news-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});