// =========================================================================================
// ### 1. DATA CONSTANTS - PRODUK & LAYANAN ###
// =========================================================================================

const products = [
    // MOUSE
    { id: 1, name: "Zephyr Wireless Gaming Mouse", category: "Mouse", price: 89.99, image: "image/mouseGaming.png", rating: 5, badge: "BEST SELLER", description: "Precision wireless gaming mouse with ultra-low latency and customizable RGB lighting", specs: { dpi: "25,600 DPI", battery: "70 hours", weight: "85g", connectivity: "2.4GHz Wireless" }, seller: "GearNix Official", warranty: "2 Years" },
    { id: 2, name: "Araxys Wireless Gaming Mouse", category: "Mouse", price: 89.99, image: "image/mouseGaming2.png", rating: 5, badge: "BEST SELLER", description: "Precision wireless gaming mouse with ultra-low latency and customizable RGB lighting", specs: { dpi: "25,600 DPI", battery: "70 hours", weight: "85g", connectivity: "2.4GHz Wireless" }, seller: "GearNix Official", warranty: "2 Years" },
    { id: 3, name: "Cypher Wireless Gaming Mouse", category: "Mouse", price: 89.99, image: "image/mouseGaming3.png", rating: 5, badge: "BEST SELLER", description: "Precision wireless gaming mouse with ultra-low latency and customizable RGB lighting", specs: { dpi: "25,600 DPI", battery: "70 hours", weight: "85g", connectivity: "2.4GHz Wireless" }, seller: "GearNix Official", warranty: "2 Years" },
    { id: 4, name: "Boulevard Mouse", category: "Mouse", price: 89.99, image: "image/mouseGaming4.png", rating: 5, badge: "RECOMMENDED", description: "Precision wireless gaming mouse with ultra-low latency and customizable RGB lighting", specs: { dpi: "25,600 DPI", battery: "70 hours", weight: "85g", connectivity: "2.4GHz Wireless" }, seller: "GearNix Official", warranty: "2 Years" },
    { id: 5, name: "MSI Gaming Mouse", category: "Mouse", price: 89.99, image: "image/mouseGaming5.png", rating: 5, badge: "BEST SELLER", description: "Precision wireless gaming mouse with ultra-low latency and customizable RGB lighting", specs: { dpi: "25,600 DPI", battery: "70 hours", weight: "85g", connectivity: "2.4GHz Wireless" }, seller: "GearNix Official", warranty: "2 Years" },
    
    // KEYBOARD
    { id: 6, name: "Pulsar Phantom Keyboard", category: "Keyboard", price: 159.99, image: "image/keyboardGaming.png", rating: 4, badge: "NEW ARRIVAL", description: "Mechanical keyboard with low-profile optical switches and dynamic RGB backlighting.", specs: { switches: "Low-Profile Optical", keycaps: "Double-shot PBT", layout: "Tenkeyless (TKL)", connectivity: "Wired USB-C" }, seller: "ElitePeripherals", warranty: "1 Year" },
    { id: 7, name: "Robotic Gaming Keyboard", category: "Keyboard", price: 159.99, image: "image/keyboardGaming2.png", rating: 5, badge: "RECOMMENDED", description: "Mechanical keyboard with low-profile optical switches and dynamic RGB backlighting.", specs: { switches: "Low-Profile Optical", keycaps: "Double-shot PBT", layout: "Tenkeyless (TKL)", connectivity: "Wired USB-C" }, seller: "ElitePeripherals", warranty: "1 Year" },
    { id: 8, name: "ROG Gaming Keyboard", category: "Keyboard", price: 159.99, image: "image/keyboardGaming3.png", rating: 5, badge: "RECOMMENDED", description: "Mechanical keyboard with low-profile optical switches and dynamic RGB backlighting.", specs: { switches: "Low-Profile Optical", keycaps: "Double-shot PBT", layout: "Tenkeyless (TKL)", connectivity: "Wired USB-C" }, seller: "ElitePeripherals", warranty: "1 Year" },
    { id: 9, name: "Insyrex Gaming Keyboard", category: "Keyboard", price: 159.99, image: "image/keyboardGaming4.png", rating: 5, badge: "RECOMMENDED", description: "Mechanical keyboard with low-profile optical switches and dynamic RGB backlighting.", specs: { switches: "Low-Profile Optical", keycaps: "Double-shot PBT", layout: "Tenkeyless (TKL)", connectivity: "Wired USB-C" }, seller: "ElitePeripherals", warranty: "1 Year" },
    { id: 10, name: "Highly Gaming Keyboard", category: "Keyboard", price: 159.99, image: "image/keyboardGaming5.png", rating: 5, badge: "RECOMMENDED", description: "Mechanical keyboard with low-profile optical switches and dynamic RGB backlighting.", specs: { switches: "Low-Profile Optical", keycaps: "Double-shot PBT", layout: "Tenkeyless (TKL)", connectivity: "Wired USB-C" }, seller: "ElitePeripherals", warranty: "1 Year" },
    
    // HEADSET
    { id: 11, name: "Vibranium X Pro Headset", category: "Headset", price: 150, image: "image/headsetGaming.png", rating: 5, badge: "TOP RATED", description: "Premium gaming headset with 7.1 surround sound and noise cancellation", specs: { drivers: "50mm Neodymium", frequency: "20Hz - 20kHz", impedance: "32 Ohms", connectivity: "USB & 3.5mm" }, seller: "GearNix Official", warranty: "2 Years" },
    { id: 12, name: "Thermaltake Cronos Gaming Headset", category: "Headset", price: 150, image: "image/headsetGaming2.png", rating: 4, badge: "RECOMMENDED", description: "Large 50mm drivers deliver immersive sound with deep bass and clear highs", specs: { size: "50mm", material: "Memory Foam", thickness: "20mm", edge: "Soft Leather" }, seller: "Accessory King", warranty: "3 Months" },
    { id: 13, name: "Antryx Gaming Headset", category: "Headset", price: 150, image: "image/headsetGaming3.png", rating: 5, badge: "RECOMMENDED", description: "Premium gaming headset with 7.1 surround sound and noise cancellation", specs: { drivers: "50mm Neodymium", frequency: "20Hz - 20kHz", impedance: "32 Ohms", connectivity: "USB & 3.5mm" }, seller: "Razer Official", warranty: "2 Years" },
    { id: 14, name: "Razer Gaming Headset", category: "Headset", price: 150, image: "image/headsetGaming4.png", rating: 5, badge: "BEST SELLER", description: "Premium gaming headset with 7.1 surround sound and noise cancellation", specs: { drivers: "50mm Neodymium", frequency: "20Hz - 20kHz", impedance: "32 Ohms", connectivity: "USB & 3.5mm" }, seller: "Razer Official", warranty: "2 Years" },
    
    // CONTROLLER
    { id: 15, name: "Aether Controller Elite", category: "Controller", price: 120, image: "image/controllerGaming.png", rating: 5, badge: "PRO CHOICE", description: "Modular professional gaming controller with interchangeable thumbsticks and paddles.", specs: { buttons: "Customizable Paddles", trigger: "Hair Trigger Locks", battery: "Up to 40 hours", connectivity: "Bluetooth & USB-C" }, seller: "GearNix Official", warranty: "6 Months" },
    { id: 16, name: "Nebula Pro Controller", category: "Controller", price: 120, image: "image/controllerGaming2.png", rating: 5, badge: "RECOMMENDED", description: "Modular professional gaming controller with interchangeable thumbsticks and paddles.", specs: { buttons: "Customizable Paddles", trigger: "Hair Trigger Locks", battery: "Up to 40 hours", connectivity: "Bluetooth & USB-C" }, seller: "GearNix Official", warranty: "6 Months" },
    { id: 17, name: "Mario Bros Controller", category: "Controller", price: 120, image: "image/controllerGaming3.png", rating: 5, badge: "RECOMMENDED", description: "Modular professional gaming controller with interchangeable thumbsticks and paddles.", specs: { buttons: "Customizable Paddles", trigger: "Hair Trigger Locks", battery: "Up to 40 hours", connectivity: "Bluetooth & USB-C" }, seller: "GearNix Official", warranty: "6 Months" },
    
    // GAMING CHAIR
    { id: 18, name: "Nebula Gaming Chair", category: "Chair", price: 550, image: "image/gamingChair.png", rating: 5, badge: "BEST SELLER", description: "Ergonomic gaming chair with adjustable lumbar support and RGB lighting.", specs: { material: "Premium PU Leather", dimensions: "55 x 55 x 120 cm", weight: "25 kg", features: "Reclining, Swivel, Height Adjustable" }, seller: "GearNix Official", warranty: "2 Years" },
    { id: 19, name: "King's Gaming Chair", category: "Chair", price: 550, image: "image/gamingChair2.png", rating: 5, badge: "BEST SELLER", description: "Ergonomic gaming chair with adjustable lumbar support and RGB lighting.", specs: { material: "Premium PU Leather", dimensions: "55 x 55 x 120 cm", weight: "25 kg", features: "Reclining, Swivel, Height Adjustable" }, seller: "GearNix Official", warranty: "2 Years" },
    { id: 20, name: "Titanium Gaming Chair", category: "Chair", price: 550, image: "image/gamingChair3.png", rating: 5, badge: "BEST SELLER", description: "Ergonomic gaming chair with adjustable lumbar support and RGB lighting.", specs: { material: "Premium PU Leather", dimensions: "55 x 55 x 120 cm", weight: "25 kg", features: "Reclining, Swivel, Height Adjustable" }, seller: "GearNix Official", warranty: "2 Years" },
    
    // PC
    { id: 21, name: "Asus Gaming PC", category: "PC", price: 2000, image: "image/pcGaming.png", rating: 5, badge: "RECOMMENDED", description: "High-performance gaming PC with customizable RGB lighting.", specs: { processor: "Intel i9", ram: "32GB", storage: "1TB SSD", graphics: "NVIDIA RTX 3080" }, seller: "GearNix Official", warranty: "2 Years" },
    { id: 22, name: "Apex Gaming PC", category: "PC", price: 2000, image: "image/pcGaming2.png", rating: 5, badge: "BEST SELLER", description: "High-performance gaming PC with customizable RGB lighting.", specs: { processor: "Intel i9", ram: "32GB", storage: "1TB SSD", graphics: "NVIDIA RTX 3080" }, seller: "GearNix Official", warranty: "2 Years" },
    { id: 23, name: "Razer Gaming PC", category: "PC", price: 2000, image: "image/pcGaming3.png", rating: 5, badge: "BEST SELLER", description: "High-performance gaming PC with customizable RGB lighting.", specs: { processor: "Intel i9", ram: "32GB", storage: "1TB SSD", graphics: "NVIDIA RTX 3080" }, seller: "GearNix Official", warranty: "2 Years" },
    
    // LAPTOP
    { id: 24, name: "ASUS ROG STRIX", category: "Laptop", price: 1499.99, image: "image/laptopGaming.png", rating: 5, badge: "RECOMMENDED", description: "High-performance gaming laptop with customizable RGB lighting.", specs: { processor: "Intel i9", ram: "32GB", storage: "1TB SSD", graphics: "NVIDIA RTX 3080" }, seller: "GearNix Official", warranty: "2 Years" },
    { id: 25, name: "MSI Laptop", category: "Laptop", price: 1499.99, image: "image/laptopGaming2.png", rating: 5, badge: "RECOMMENDED", description: "High-performance gaming laptop with customizable RGB lighting.", specs: { processor: "Intel i9", ram: "32GB", storage: "1TB SSD", graphics: "NVIDIA RTX 3080" }, seller: "GearNix Official", warranty: "2 Years" },
    
    // OTHERS
    { id: 26, name: "TP-Link Archer AX6000", category: "Others", price: 150, image: "image/router(others).png", rating: 5, badge: "RECOMMENDED", description: "Ultra-fast Wi-Fi 6 router with three external antennas for maximum range and high speeds.", specs: { wireless_standard: "Wi-Fi 6 (802.11ax)", speed: "Up to 5952 Mbps", processor: "1.8GHz Quad-Core CPU", ram: "1GB", ports: "1x 2.5Gbps WAN, 8x Gigabit LAN" }, seller: "TP-Link Official Store", warranty: "3 Years" },
    { id: 27, name: "Logitech StreamCam", category: "Others", price: 149.99, image: "image/webCam(others).png", rating: 5, badge: "RECOMMENDED", description: "Full HD webcam with autofocus and dual omnidirectional microphones for professional streaming.", specs: { resolution: "1080p @ 60fps", lens: "Glass lens with auto focus", field_of_view: "78°", connectivity: "USB-C" }, seller: "TechGear Official", warranty: "1 Year" },
    { id: 28, name: "Anker 7-Port USB 3.0 Hub", category: "Others", price: 49.99, image: "image/usbHUB(others).png", rating: 4.8, badge: "RECOMMENDED", description: "High-speed USB 3.0 hub with 7 ports for fast data transfer and efficient power management.", specs: { usbPorts: "7 Ports (USB 3.0)", dataTransferSpeed: "Up to 5Gbps", powerSupply: "12V/3A External Adapter", compatibility: "Windows, macOS, Linux" }, seller: "TechGear Official", warranty: "1 Year" },
    { id: 29, name: "Blue Yeti USB Microphone (Midnight Red)", category: "Others", price: 149.99, image: "image/mic(Others).png", rating: 4, badge: "RECOMMENDED", description: "Versatile USB condenser microphone with multiple pattern modes for professional recording, streaming, and podcasting.", specs: { transducerType: "Condenser", polarPatterns: "Cardioid, Bidirectional, Omnidirectional, Stereo", sampleRate: "48 kHz", bitDepth: "16-bit", frequencyResponse: "20Hz - 20kHz", connectivity: "USB 2.0/3.0" }, seller: "AudioPro Solutions", warranty: "2 Years" }
];

const serviceDetails = {
    shipping: {
        title: "🚚 Free Shipping",
        content: `
            <div class="service-detail-content">
                <p>Enjoy completely free shipping on all orders, no minimum purchase required!</p>
                <h6>Benefits:</h6>
                <ul>
                    <li>Free delivery to your doorstep</li>
                    <li>No hidden fees or charges</li>
                    <li>Track your order in real-time</li>
                    <li>Estimated delivery: 3-7 business days</li>
                    <li>Express shipping available for urgent orders</li>
                </ul>
                <h6>Coverage Areas:</h6>
                <ul>
                    <li>All major cities in Indonesia</li>
                    <li>Remote areas with additional 2-3 days</li>
                    <li>International shipping available on request</li>
                </ul>
            </div>
        `
    },
    returns: {
        title: "🔄 Return Policy",
        content: `
            <div class="service-detail-content">
                <p>We offer a hassle-free 30-day return policy for your peace of mind.</p>
                <h6>Return Guidelines:</h6>
                <ul>
                    <li>30-day money-back guarantee</li>
                    <li>Products must be in original condition</li>
                    <li>Free return shipping label provided</li>
                    <li>Full refund within 5-7 business days</li>
                    <li>Exchange options available</li>
                </ul>
                <h6>Eligible Items:</h6>
                <ul>
                    <li>Unused products with original packaging</li>
                    <li>Defective or damaged items</li>
                    <li>Wrong items received</li>
                </ul>
                <p><strong>Note:</strong> Some items may have different return policies. Please check individual product pages for details.</p>
            </div>
        `
    },
    savings: {
        title: "💰 Save Money",
        content: `
            <div class="service-detail-content">
                <p>Maximize your savings with our exclusive deals and loyalty programs!</p>
                <h6>Ways to Save:</h6>
                <ul>
                    <li>Up to 50% off on select items</li>
                    <li>Weekly flash sales and promotions</li>
                    <li>Bundle deals - Buy more, save more</li>
                    <li>Loyalty points on every purchase</li>
                    <li>Early access to sales for members</li>
                    <li>Price match guarantee</li>
                </ul>
                <h6>Loyalty Program:</h6>
                <ul>
                    <li>Earn 1 point for every $1 spent</li>
                    <li>100 points = $10 discount voucher</li>
                    <li>Birthday special discounts</li>
                    <li>Exclusive member-only deals</li>
                </ul>
                <p><strong>Subscribe to our newsletter</strong> to receive exclusive coupon codes and be the first to know about upcoming sales!</p>
            </div>
        `
    },
    support: {
        title: "🎧 Support 24/7",
        content: `
            <div class="service-detail-content">
                <p>Our dedicated support team is available around the clock to assist you!</p>
                <h6>Support Channels:</h6>
                <ul>
                    <li>Live chat support (24/7 instant response)</li>
                    <li>Email support (response within 2 hours)</li>
                    <li>Phone hotline (toll-free number)</li>
                    <li>WhatsApp business support</li>
                    <li>Social media support on all platforms</li>
                </ul>
                <h6>We Can Help With:</h6>
                <ul>
                    <li>Product recommendations and advice</li>
                    <li>Order tracking and status updates</li>
                    <li>Technical support and troubleshooting</li>
                    <li>Returns and refund assistance</li>
                    <li>Payment and billing inquiries</li>
                    <li>Warranty claims and repairs</li>
                </ul>
                <h6>Response Times:</h6>
                <ul>
                    <li>Live Chat: Instant to 2 minutes</li>
                    <li>Email: Within 2 hours</li>
                    <li>Phone: Immediate pickup</li>
                </ul>
                <p><strong>Customer satisfaction is our priority.</strong> Our support team speaks multiple languages and is trained to resolve issues efficiently!</p>
            </div>
        `
    }
};

// =========================================================================================
// ### 2. STATE MANAGEMENT - VARIABEL GLOBAL ###
// =========================================================================================

let cart = [];
let orderHistory = [];
let userProfile = {
    name: '', email: '', phone: '', dob: '',
    address: '', city: '', state: '', zip: '', country: ''
};
let currentOrderDetail = null;
let currentCategory = null;
let currentBadge = 'ALL';

// DOM Elements
const productContainer = document.getElementById('productContainer');
const cartCountElement = document.getElementById('cartCount');
const orderCountElement = document.getElementById('orderCount');
const cartItemsElement = document.getElementById('cartItems');
const checkoutTotalElement = document.getElementById('checkoutTotal');

// Bootstrap Modals
let cartModal, checkoutModal, serviceModal, profileModal, orderHistoryModal, orderDetailModal, productDetailModal;

// =========================================================================================
// ### 3. UTILITY FUNCTIONS - HELPER UMUM ###
// =========================================================================================

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

function getRatingHtml(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += `<span class="me-1">${i < rating ? '⭐' : '☆'}</span>`;
    }
    return stars;
}

function loadState(key, defaultValue) {
    try {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : defaultValue;
    } catch (e) {
        console.error("Error loading state from localStorage", e);
        return defaultValue;
    }
}

function saveUserProfile() {
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
}

function saveOrderHistory() {
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
}

// =========================================================================================
// ### 4. CART MANAGEMENT - KERANJANG BELANJA ###
// =========================================================================================

window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (product) {
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartUI();
        triggerCartPulse();
        showCartNotification(product.name);
    }
};

window.changeQuantity = function(productId, change) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
};

window.removeFromCart = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
};

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountElement) cartCountElement.textContent = totalItems;
    renderCartItems();
}

function renderCartItems() {
    if (!cartItemsElement) return;

    if (cart.length === 0) {
        cartItemsElement.innerHTML = '<p class="text-center text-secondary">Your cart is empty.</p>';
        updateCheckoutTotal(0, 0, 0);
        return;
    }

    const cartHtml = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formatCurrency(item.price * item.quantity)}</div>
                <div class="d-flex align-items-center mt-2">
                    <button class="btn btn-sm btn-outline-secondary me-2" onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary ms-2" onclick="changeQuantity(${item.id}, 1)">+</button>
                    <button class="btn btn-sm btn-danger ms-auto" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    const totalHtml = `
        <div class="cart-total">
            <div class="cart-total-row">
                <span>Subtotal:</span>
                <span>${formatCurrency(subtotal)}</span>
            </div>
            <div class="cart-total-row">
                <span>Tax (10%):</span>
                <span>${formatCurrency(tax)}</span>
            </div>
            <div class="cart-total-final">
                <span>Total:</span>
                <span>${formatCurrency(total)}</span>
            </div>
        </div>
    `;

    cartItemsElement.innerHTML = cartHtml + totalHtml;
    updateCheckoutTotal(subtotal, tax, total);
}

function updateCheckoutTotal(subtotal, tax, total) {
    if (checkoutTotalElement) {
        checkoutTotalElement.innerHTML = `
            <div class="cart-total-row">
                <span>Subtotal:</span>
                <span>${formatCurrency(subtotal)}</span>
            </div>
            <div class="cart-total-row">
                <span>Tax (10%):</span>
                <span>${formatCurrency(tax)}</span>
            </div>
            <div class="cart-total-final">
                <span>Total to Pay:</span>
                <span>${formatCurrency(total)}</span>
            </div>
        `;
    }
}

window.openCart = function() {
    updateCartUI();
    cartModal.show();
};

window.proceedCheckout = function() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before checking out.");
        return;
    }
    cartModal.hide();
    updateShippingAddressDisplay();
    renderCartItems();
    checkoutModal.show();
};

function triggerCartPulse() {
    const icon = document.querySelector('.cart-icon');
    if (icon) {
        icon.classList.add('cart-pulse');
        setTimeout(() => icon.classList.remove('cart-pulse'), 500);
    }
}

function showCartNotification(productName) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.style.cssText = `
        position: fixed; top: 80px; right: 20px;
        background: linear-gradient(135deg, var(--neon-primary), var(--neon-secondary));
        color: var(--bg-dark); padding: 15px 25px; border-radius: 10px;
        font-weight: 600; z-index: 9999; animation: slideInRight 0.3s ease;
        box-shadow: 0 5px 20px rgba(0, 255, 136, 0.4);
    `;
    notification.textContent = `✓ ${productName} added to cart!`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// =========================================================================================
// ### 5. ORDER MANAGEMENT - SISTEM PESANAN ###
// =========================================================================================

window.placeOrder = function() {
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    
    if (!selectedPayment) {
        alert("Please select a payment method.");
        return;
    }
    
    if (!userProfile.name || !userProfile.address || !userProfile.city) {
        alert("Please complete your profile with shipping address before placing an order.");
        checkoutModal.hide();
        setTimeout(() => window.openProfile(), 300);
        return;
    }
    
    const paymentMethod = selectedPayment.value;
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    
    const order = {
        id: 'GNX-' + Date.now(),
        date: new Date().toISOString(),
        items: JSON.parse(JSON.stringify(cart)),
        paymentMethod: paymentMethod,
        subtotal: subtotal,
        tax: tax,
        total: total,
        status: 'Completed',
        shippingAddress: { ...userProfile }
    };
    
    orderHistory.unshift(order);
    saveOrderHistory();
    updateOrderCount();
    
    alert(`🎉 Order Placed Successfully!\n\nOrder ID: ${order.id}\nPayment Method: ${paymentMethod}\nTotal Items: ${cart.reduce((sum, item) => sum + item.quantity, 0)}\nTotal Amount: ${formatCurrency(total)}\n\nThank you for shopping with GearNix!`);
    
    cart = [];
    updateCartUI();
    checkoutModal.hide();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function updateOrderCount() {
    if (orderCountElement) {
        orderCountElement.textContent = orderHistory.length;
    }
}

window.openOrderHistory = function() {
    renderOrderHistory();
    orderHistoryModal.show();
};

function renderOrderHistory() {
    const content = document.getElementById('orderHistoryContent');
    
    if (!content) return;
    
    if (orderHistory.length === 0) {
        content.innerHTML = `
            <div class="order-history-empty">
                <div class="empty-icon">📦</div>
                <h4>No Orders Yet</h4>
                <p class="text-secondary">Start shopping to see your order history here!</p>
                <a href="produk.html" class="btn btn-neon mt-3">Start Shopping</a>
            </div>
        `;
        return;
    }
    
    let html = '<div class="row">';
    
    orderHistory.forEach(order => {
        const date = new Date(order.date);
        const dateStr = date.toLocaleDateString('en-US', { 
            year: 'numeric', month: 'short', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
        
        const itemsPreview = order.items.slice(0, 4).map(item => `
            <div class="order-item-thumb">
                <img src="${item.image}" alt="${item.name}">
            </div>
        `).join('');
        
        const moreItems = order.items.length > 4 ? `<div class="order-item-thumb">+${order.items.length - 4}</div>` : '';
        
        html += `
            <div class="col-12">
                <div class="order-card" onclick="viewOrderDetail('${order.id}')">
                    <div class="order-header">
                        <div>
                            <div class="order-id">${order.id}</div>
                            <div class="order-date">${dateStr}</div>
                        </div>
                        <span class="order-status status-${order.status.toLowerCase()}">${order.status}</span>
                    </div>
                    <div class="order-items-preview">
                        ${itemsPreview}
                        ${moreItems}
                    </div>
                    <div class="order-footer">
                        <div>
                            <span class="text-secondary">${order.items.reduce((sum, item) => sum + item.quantity, 0)} items</span>
                            <span class="text-secondary mx-2">•</span>
                            <span class="text-secondary">${order.paymentMethod}</span>
                        </div>
                        <div class="order-total">${formatCurrency(order.total)}</div> 
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    content.innerHTML = html;
}

window.viewOrderDetail = function(orderId) {
    const order = orderHistory.find(o => o.id === orderId);
    if (!order) return;
    
    currentOrderDetail = order;
    
    const date = new Date(order.date);
    const dateStr = date.toLocaleDateString('en-US', { 
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });
    
    document.getElementById('orderDetailTitle').textContent = `Order ${order.id}`;
    
    let itemsHtml = '';
    order.items.forEach(item => {
        itemsHtml += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${formatCurrency(item.price)} x ${item.quantity} = ${formatCurrency(item.price * item.quantity)}</div>
                </div>
            </div>
        `;
    });
    
    const content = `
        <div class="order-detail-section">
            <h6>📋 Order Information</h6>
            <div class="detail-row">
                <span class="detail-label">Order ID:</span>
                <span class="detail-value">${order.id}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Order Date:</span>
                <span class="detail-value">${dateStr}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Status:</span>
                <span class="order-status status-${order.status.toLowerCase()}">${order.status}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Payment Method:</span>
                <span class="detail-value">${order.paymentMethod}</span>
            </div>
        </div>
        
        <div class="order-detail-section">
            <h6>📦 Items (${order.items.length})</h6>
            ${itemsHtml}
        </div>
        
        <div class="order-detail-section">
            <h6>🚚 Shipping Address</h6>
            <p><strong>${order.shippingAddress.name}</strong></p>
            <p>${order.shippingAddress.address}</p>
            <p>${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zip}</p>
            <p>${order.shippingAddress.country}</p>
            <p>Phone: ${order.shippingAddress.phone || 'N/A'}</p>
        </div>
        
        <div class="order-detail-section">
            <h6>💰 Payment Summary</h6>
            <div class="cart-total">
                <div class="cart-total-row">
                    <span>Subtotal:</span>
                    <span>${formatCurrency(order.subtotal)}</span>
                </div>
                <div class="cart-total-row">
                    <span>Tax (10%):</span>
                    <span>${formatCurrency(order.tax)}</span>
                </div>
                <div class="cart-total-final">
                    <span>Total Paid:</span>
                    <span>${formatCurrency(order.total)}</span>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('orderDetailContent').innerHTML = content;
    
    orderHistoryModal.hide();
    setTimeout(() => orderDetailModal.show(), 300);
};

window.reorderItems = function() {
    if (!currentOrderDetail) return;
    
    currentOrderDetail.items.forEach(item => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        const productDetails = products.find(p => p.id === item.id);

        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else if (productDetails) {
            cart.push({ ...productDetails, quantity: item.quantity }); 
        } else {
            cart.push({ ...item });
        }
    });
    
    updateCartUI();
    orderDetailModal.hide();
    
    alert(`✓ ${currentOrderDetail.items.length} items added to cart!`);
    
    setTimeout(() => cartModal.show(), 300);
};

// =========================================================================================
// ### 6. PROFILE MANAGEMENT - MANAJEMEN PROFIL ###
// =========================================================================================

window.openProfile = function() {
    loadProfileData();
    profileModal.show();
};

window.openProfileFromCheckout = function() {
    checkoutModal.hide();
    setTimeout(() => {
        loadProfileData();
        profileModal.show();
    }, 300);
};

function loadProfileData() {
    if (document.getElementById('profileName')) {
        document.getElementById('profileName').value = userProfile.name || '';
        document.getElementById('profileEmail').value = userProfile.email || '';
        document.getElementById('profilePhone').value = userProfile.phone || '';
        document.getElementById('profileDob').value = userProfile.dob || '';
        document.getElementById('profileAddress').value = userProfile.address || '';
        document.getElementById('profileCity').value = userProfile.city || '';
        document.getElementById('profileState').value = userProfile.state || '';
        document.getElementById('profileZip').value = userProfile.zip || '';
        document.getElementById('profileCountry').value = userProfile.country || '';
    }
}

window.saveProfile = function() {
    const form = document.getElementById('profileForm');
    
    if (form && !form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    userProfile = {
        name: document.getElementById('profileName').value,
        email: document.getElementById('profileEmail').value,
        phone: document.getElementById('profilePhone').value,
        dob: document.getElementById('profileDob').value,
        address: document.getElementById('profileAddress').value,
        city: document.getElementById('profileCity').value,
        state: document.getElementById('profileState').value,
        zip: document.getElementById('profileZip').value,
        country: document.getElementById('profileCountry').value
    };
    
    saveUserProfile();
    
    alert('✓ Profile saved successfully!');
    profileModal.hide();
    
    updateShippingAddressDisplay();
};

function updateShippingAddressDisplay() {
    const display = document.getElementById('shippingAddressDisplay');
    if (!display) return;
    
    if (!userProfile.name || !userProfile.address) {
        display.innerHTML = '<p class="text-secondary">No address set. Please update your profile.</p>';
        return;
    }
    
    display.innerHTML = `
        <p><strong>${userProfile.name}</strong></p>
        <p>${userProfile.address}</p>
        <p>${userProfile.city}, ${userProfile.state} ${userProfile.zip}</p>
        <p>${userProfile.country}</p>
        <p>Phone: ${userProfile.phone || 'N/A'}</p>
    `;
}

// =========================================================================================
// ### 7. PRODUCT DISPLAY - RENDERING & FILTER PRODUK ###
// =========================================================================================

function renderProducts(category = null, badge = 'ALL') {
    if (!productContainer) return;
    
    let filteredProducts = products;

    if (category) {
        filteredProducts = filteredProducts.filter(p => p.category === category);
    }

    if (badge !== 'ALL') {
        filteredProducts = filteredProducts.filter(p => p.badge === badge);
    }

    if (filteredProducts.length === 0) {
        productContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <h4 class="text-secondary">No products found matching your filters.</h4>
                <button class="btn btn-neon mt-3" onclick="resetFilters()">Reset Filters</button>
            </div>
        `;
        return;
    }

    productContainer.innerHTML = filteredProducts.map(product => `
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${product.id % 3 * 100}">
            <div class="product-card" onclick="showProductDetail(${product.id})">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <span class="product-badge">${product.badge}</span>
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h5 class="product-title">${product.name}</h5>
                    <div class="product-rating">${getRatingHtml(product.rating)}</div>
                    <div class="product-price">${formatCurrency(product.price)}</div>
                    <button class="btn btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id});">
                        Add to Cart 🛒
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

window.showProductDetail = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('productDetailTitle').textContent = product.name;
    document.getElementById('productDetailImage').src = product.image;
    document.getElementById('productDetailImage').alt = product.name;
    document.getElementById('productDetailDescription').textContent = product.description;
    document.getElementById('productDetailPrice').textContent = `${formatCurrency(product.price)}`;
    document.getElementById('productDetailRating').innerHTML = getRatingHtml(product.rating);
    document.getElementById('productDetailBadge').textContent = product.badge;
    document.getElementById('productDetailCategory').textContent = product.category;
    document.getElementById('productDetailSeller').textContent = product.seller;
    document.getElementById('productDetailWarranty').textContent = product.warranty;

    document.getElementById('productDetailSpecs').innerHTML = Object.entries(product.specs).map(([key, value]) => `
        <li><strong>${key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')}:</strong> ${value}</li>
    `).join('');

    document.getElementById('addToCartFromDetail').onclick = () => {
        addToCart(productId);
        productDetailModal.hide();
    };

    productDetailModal.show();
};

// =========================================================================================
// ### 8. FILTER SYSTEM - SISTEM FILTER PRODUK ###
// =========================================================================================

window.filterCategory = function(category) {
    currentCategory = category === 'all' ? null : category;
    renderProducts(currentCategory, currentBadge);
    updateActiveFiltersDisplay();
    
    document.querySelectorAll('.btn-category').forEach(btn => {
        btn.classList.remove('active');
        if ((currentCategory === null && btn.getAttribute('data-category') === 'all') || 
            btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });
};

window.filterBadge = function(badge) {
    currentBadge = badge;
    
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-badge') === badge) {
            btn.classList.add('active');
        }
    });
    
    renderProducts(currentCategory, badge);
    updateActiveFiltersDisplay();
};

window.resetFilters = function() {
    currentCategory = null;
    currentBadge = 'ALL';
    
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-badge') === 'ALL') {
            btn.classList.add('active');
        }
    });
    
    document.querySelectorAll('.btn-category').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === 'all') {
            btn.classList.add('active');
        }
    });
    
    renderProducts();
    updateActiveFiltersDisplay();
};

window.removeFilter = function(filterType) {
    if (filterType === 'category') {
        currentCategory = null;
        document.querySelectorAll('.btn-category').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-category') === 'all') {
                btn.classList.add('active');
            }
        });
    } else if (filterType === 'badge') {
        currentBadge = 'ALL';
        document.querySelectorAll('.btn-filter').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-badge') === 'ALL') {
                btn.classList.add('active');
            }
        });
    }
    
    renderProducts(currentCategory, currentBadge);
    updateActiveFiltersDisplay();
};

function updateActiveFiltersDisplay() {
    const container = document.getElementById('activeFiltersDisplay');
    if (!container) return;
    
    const filters = [];
    
    if (currentCategory) {
        filters.push({
            type: 'category',
            value: currentCategory,
            label: `Category: ${currentCategory}`
        });
    }
    
    if (currentBadge !== 'ALL') {
        filters.push({
            type: 'badge',
            value: currentBadge,
            label: `Badge: ${currentBadge}`
        });
    }
    
    if (filters.length === 0) {
        container.innerHTML = '';
        return;
    }
    
    let html = '';
    
    filters.forEach(filter => {
        html += `
            <span class="filter-tag">
                ${filter.label}
                <span class="remove-filter" onclick="removeFilter('${filter.type}')">✕</span>
            </span>
        `;
    });
    
    html += `<button class="btn-reset-all" onclick="resetFilters()">🔄 Reset All Filters</button>`;
    
    container.innerHTML = html;
}

// =========================================================================================
// ### 9. UI INTERACTIONS - LAYANAN & NAVIGASI ###
// =========================================================================================

window.showServiceDetail = function(serviceType) {
    const service = serviceDetails[serviceType];
    if (!service) return;

    document.getElementById('serviceModalTitle').textContent = service.title;
    document.getElementById('serviceModalBody').innerHTML = service.content;
    serviceModal.show();
};

window.scrollToSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    const navbar = document.querySelector('.navbar');
    if (section && navbar) {
        const navbarHeight = navbar.offsetHeight;
        const sectionTop = section.offsetTop - navbarHeight - 20;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
};

// =========================================================================================
// ### 10. EVENT LISTENERS - INISIALISASI & EVENTS ###
// =========================================================================================

// Scroll Effect untuk Navbar
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(18, 18, 18, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 255, 136, 0.2)';
    } else {
        navbar.style.background = 'rgba(18, 18, 18, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 136, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Smooth Scroll untuk Nav Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const sectionId = href.substring(1);
            window.scrollToSection(sectionId);
        }
    });
});

// DOMContentLoaded - Inisialisasi Aplikasi
document.addEventListener('DOMContentLoaded', () => {
    // Load saved data from localStorage
    orderHistory = loadState('orderHistory', []);
    userProfile = loadState('userProfile', {
        name: '', email: '', phone: '', dob: '',
        address: '', city: '', state: '', zip: '', country: ''
    });

    // Initialize Bootstrap Modals
    if (document.getElementById('cartModal')) {
        cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    }
    if (document.getElementById('checkoutModal')) {
        checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    }
    if (document.getElementById('serviceModal')) {
        serviceModal = new bootstrap.Modal(document.getElementById('serviceModal'));
    }
    if (document.getElementById('profileModal')) {
        profileModal = new bootstrap.Modal(document.getElementById('profileModal'));
    }
    if (document.getElementById('orderHistoryModal')) {
        orderHistoryModal = new bootstrap.Modal(document.getElementById('orderHistoryModal'));
    }
    if (document.getElementById('orderDetailModal')) {
        orderDetailModal = new bootstrap.Modal(document.getElementById('orderDetailModal'));
    }
    if (document.getElementById('productDetailModal')) {
        productDetailModal = new bootstrap.Modal(document.getElementById('productDetailModal'));
    }

    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    // Check for category filter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam && productContainer) {
        currentCategory = categoryParam;
        document.querySelectorAll('.btn-category').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-category') === categoryParam) {
                btn.classList.add('active');
            }
        });
    }
    
    // Render initial product list if on product page
    if (productContainer) {
        renderProducts(currentCategory, currentBadge);
        updateActiveFiltersDisplay();
    }
    
    // Update UI with initial state
    updateShippingAddressDisplay();
    updateOrderCount();
    updateCartUI();
});