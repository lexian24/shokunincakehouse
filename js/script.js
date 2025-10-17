/**
 * Shokunin Cake House - Shopping Cart System
 * WhatsApp: +60 17-775 9738
 */

// WhatsApp Configuration
const WHATSAPP_NUMBER = '60177759738';

// Shopping Cart State
let cart = [];

// Load cart from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    updateCartUI();
    setupSmoothScrolling();
    setupAnimations();
});

// ========================================
// QUANTITY SELECTOR FUNCTIONS
// ========================================

function increaseQty(cakeId) {
    const input = document.getElementById(`qty-${cakeId}`);
    const currentValue = parseInt(input.value);
    if (currentValue < 10) {
        input.value = currentValue + 1;
    }
}

function decreaseQty(cakeId) {
    const input = document.getElementById(`qty-${cakeId}`);
    const currentValue = parseInt(input.value);
    if (currentValue > 1) {
        input.value = currentValue - 1;
    }
}

// ========================================
// SHOPPING CART FUNCTIONS
// ========================================

function addToCart(cakeId, cakeName, price) {
    const quantity = parseInt(document.getElementById(`qty-${cakeId}`).value);

    // Check if item already exists in cart
    const existingItem = cart.find(item => item.id === cakeId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: cakeId,
            name: cakeName,
            price: price,
            quantity: quantity
        });
    }

    // Reset quantity selector
    document.getElementById(`qty-${cakeId}`).value = 1;

    // Save and update UI
    saveCart();
    updateCartUI();

    // Show cart
    toggleCart();

    // Show success feedback
    showAddedToCartFeedback();
}

function removeFromCart(cakeId) {
    cart = cart.filter(item => item.id !== cakeId);
    saveCart();
    updateCartUI();
}

function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        saveCart();
        updateCartUI();
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartFooter = document.getElementById('cart-footer');
    const cartTotal = document.getElementById('cart-total');

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items display
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartFooter.style.display = 'none';
    } else {
        let itemsHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            itemsHTML += `
                <div class="cart-item">
                    <div class="cart-item-header">
                        <span class="cart-item-name">${item.name}</span>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
                    </div>
                    <div class="cart-item-details">
                        <span>${item.quantity} × RM ${item.price.toFixed(2)}</span>
                        <span><strong>RM ${itemTotal.toFixed(2)}</strong></span>
                    </div>
                </div>
            `;
        });

        cartItems.innerHTML = itemsHTML;
        cartTotal.textContent = `RM ${total.toFixed(2)}`;
        cartFooter.style.display = 'block';
    }
}

function toggleCart() {
    const cartPanel = document.getElementById('cart-panel');
    const cartOverlay = document.getElementById('cart-overlay');

    cartPanel.classList.toggle('active');
    cartOverlay.classList.toggle('active');

    // Prevent body scroll when cart is open
    if (cartPanel.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function showAddedToCartFeedback() {
    const cartButton = document.querySelector('.cart-button');
    cartButton.style.transform = 'scale(1.1)';
    setTimeout(() => {
        cartButton.style.transform = '';
    }, 200);
}

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================

function saveCart() {
    localStorage.setItem('shokunin_cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('shokunin_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// ========================================
// WHATSAPP CHECKOUT
// ========================================

function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Build order message
    let message = '*🍰 Shokunin Cake House Order*\n\n';
    message += '*Order Details:*\n';
    message += '━━━━━━━━━━━━━━━\n';

    let total = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `\n${index + 1}. *${item.name}*\n`;
        message += `   Quantity: ${item.quantity}\n`;
        message += `   Price: RM ${item.price.toFixed(2)} each\n`;
        message += `   Subtotal: RM ${itemTotal.toFixed(2)}\n`;
    });

    message += '\n━━━━━━━━━━━━━━━\n';
    message += `*Total: RM ${total.toFixed(2)}*\n\n`;
    message += 'I would like to place this order. Please confirm availability and delivery details. Thank you! 😊';

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');
}

// Legacy function for old buttons (kept for compatibility)
function orderViaWhatsApp(cakeName) {
    const message = `Hi Shokunin Cake House! I'm interested in ordering a ${cakeName}. Could you please provide more details about pricing and availability?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// ========================================
// SMOOTH SCROLLING & ANIMATIONS
// ========================================

function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    // Get navbar height for offset (with small padding)
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const offset = -10; // Negative to scroll down less, closer to section

                    // Calculate position
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - offset;

                    // Smooth scroll to position
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const cakeCards = document.querySelectorAll('.cake-card');
    cakeCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });
}

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

document.addEventListener('keydown', function(e) {
    // ESC key closes cart
    if (e.key === 'Escape') {
        const cartPanel = document.getElementById('cart-panel');
        if (cartPanel.classList.contains('active')) {
            toggleCart();
        }
    }
});

console.log('🍰 Shokunin Cake House - Shopping Cart System Loaded');
console.log('📱 WhatsApp: +60 17-775 9738');
