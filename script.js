document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const navLinks = document.querySelectorAll('nav a');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('感谢你的留言！我会尽快回复你！😊');
        contactForm.reset();
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
