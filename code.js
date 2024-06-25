// JavaScript code to add interactivity
document.addEventListener('DOMContentLoaded', () => {
    const goTopButton = document.getElementById('goTopBtn');

    // Smooth scroll to top when button is clicked
    goTopButton.addEventListener('click', () => {
        // Scroll to top smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
