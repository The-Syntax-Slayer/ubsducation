document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation class to features on scroll
    const features = document.querySelectorAll('.feature');
    const animateFeatures = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        features.forEach(feature => {
            const featureTop = feature.getBoundingClientRect().top;

            if (featureTop < triggerBottom) {
                feature.classList.add('animate');
            } else {
                feature.classList.remove('animate');
            }
        });
    };

    window.addEventListener('scroll', animateFeatures);
});