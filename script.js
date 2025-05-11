// Add smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to cards when they come into view
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.venue-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Create magical particles
function createParticles() {
    const header = document.querySelector('header');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'magical-particles';
    header.insertBefore(particlesContainer, header.firstChild);

    // Create particles
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 1px and 8px for more variety
        const size = Math.random() * 7 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random delay and duration for more natural movement
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 2 + 2}s`;
        
        // Random opacity for more depth
        particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
}); 