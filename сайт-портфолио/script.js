
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: section.offsetTop - 10,
                behavior: 'smooth'
            });
        });
    });
});