document.addEventListener('DOMContentLoaded', () => {
    // Page transition animation
    const content = document.querySelector('main');
    content.style.opacity = 0;
    content.style.transform = 'translateY(20px)';
    content.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    
    setTimeout(() => {
        content.style.opacity = 1;
        content.style.transform = 'translateY(0)';
    }, 100);

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const triggerBottom = window.innerHeight / 5 * 4;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load

    // Add hover effect to navigation items
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.1) rotate(5deg)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1) rotate(0)';
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('fa-bars');
        menuToggle.classList.toggle('fa-times');
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.add('fa-bars');
            menuToggle.classList.remove('fa-times');
        });
    });
});