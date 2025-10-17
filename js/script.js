/**
 * Shokunin Cake House - JavaScript Functions
 * Main functionality for WhatsApp integration and site interactions
 */

// WhatsApp Configuration
// IMPORTANT: Replace this with your actual WhatsApp number (include country code, no + or spaces)
// Example: For +60 12-345 6789 (Malaysia), use: 60123456789
// Demo number - REPLACE WITH YOUR REAL NUMBER!
const WHATSAPP_NUMBER = '60123456789';

/**
 * Opens WhatsApp with a pre-filled message for cake order
 * @param {string} cakeName - The name of the cake to order
 */
function orderViaWhatsApp(cakeName) {
    // Create the message
    const message = `Hi Shokunin Cake House! I'm interested in ordering a ${cakeName}. Could you please provide more details about pricing and availability?`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in a new window/tab
    window.open(whatsappURL, '_blank');
}

/**
 * Smooth scroll to section (fallback for older browsers)
 */
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation clicks
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only handle internal links (starting with #)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add fade-in animation for cake cards when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';

                // Trigger animation
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cake cards
    const cakeCards = document.querySelectorAll('.cake-card');
    cakeCards.forEach(card => observer.observe(card));

    // Handle image loading errors (show placeholder)
    const cakeImages = document.querySAll('img[src*="cake"]');
    cakeImages.forEach(img => {
        img.addEventListener('error', function() {
            // Set a placeholder background color and text
            this.style.display = 'none';
            const parent = this.parentElement;
            parent.style.backgroundColor = '#e0e0e0';
            parent.style.display = 'flex';
            parent.style.alignItems = 'center';
            parent.style.justifyContent = 'center';
            parent.innerHTML = '<div style="text-align: center; color: #999;"><p>📷</p><p style="font-size: 0.9rem;">Image Coming Soon</p></div>';
        });
    });
});

/**
 * Mobile menu toggle (if needed in future)
 */
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Expose functions to global scope for HTML onclick handlers
window.orderViaWhatsApp = orderViaWhatsApp;
window.toggleMobileMenu = toggleMobileMenu;
