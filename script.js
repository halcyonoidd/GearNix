let currentSelectedProduct = null;
let orderHistory = [];
let activeFilters = {
    badge: 'ALL',
    category: null
};

let productDetailModal, serviceModal, orderHistoryModal, orderDetailModal;


// Dollar
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}


// Bintang
function generateStarRating(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '⭐' : '☆';
    }
    return stars;
}



window.scrollToSection = function(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};


// PRODUCT DISPLAY & FILTERING
function renderProducts() {
    const container = document.getElementById('productContainer');
    if (!container) return;

    let filteredProducts = products.filter(product => {
        if (activeFilters.badge !== 'ALL' && product.badge !== activeFilters.badge) {
            return false;
        }
        
        if (activeFilters.category && product.category !== activeFilters.category) {
            return false;
        }
        
        return true;
    });

    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div class="col-12">
                <div class="text-center py-5">
                    <div style="font-size: 4rem; opacity: 0.3;">📦</div>
                    <h4 class="mt-3 text-secondary">No products found</h4>
                    <p class="text-secondary">Try adjusting your filters</p>
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredProducts.map(product => `
        <div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-up">
            <div class="product-card" onclick="showProductDetail(${product.id})">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <span class="product-badge">${product.badge}</span>
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h5 class="product-title">${product.name}</h5>
                    <div class="product-rating">${generateStarRating(product.rating)}</div>
                    <div class="product-price">${formatCurrency(product.price)}</div>
                    <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
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



// Filter by badge
window.filterBadge = function(badge) {
    activeFilters.badge = badge;
    

    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-badge') === badge) {
            btn.classList.add('active');
        }
    });
    
    renderProducts();
    updateActiveFiltersDisplay();
};



// Filter by category
window.filterCategory = function(category) {
    activeFilters.category = category;
    
    document.querySelectorAll('.btn-category').forEach(btn => {
        btn.classList.remove('active');
        if (category === null && btn.getAttribute('data-category') === 'all') {
            btn.classList.add('active');
        } else if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });
    
    renderProducts();
    updateActiveFiltersDisplay();
};



function updateActiveFiltersDisplay() {
    const display = document.getElementById('activeFiltersDisplay');
    if (!display) return;

    let filtersHTML = '';
    
    if (activeFilters.badge !== 'ALL') {
        filtersHTML += `
            <div class="filter-tag">
                ${activeFilters.badge}
                <span class="remove-filter" onclick="filterBadge('ALL')">✕</span>
            </div>
        `;
    }
    
    if (activeFilters.category) {
        filtersHTML += `
            <div class="filter-tag">
                ${activeFilters.category}
                <span class="remove-filter" onclick="filterCategory(null)">✕</span>
            </div>
        `;
    }
    
    if (activeFilters.badge !== 'ALL' || activeFilters.category) {
        filtersHTML += `
            <button class="btn-reset-all" onclick="resetAllFilters()">
                Reset All Filters
            </button>
        `;
    }
    
    display.innerHTML = filtersHTML;
}


// Reset all filters
window.resetAllFilters = function() {
    filterBadge('ALL');
    filterCategory(null);
};

function checkURLFilters() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category) {
        filterCategory(category);
    }
}



// PRODUCT DETAIL MODAL
window.showProductDetail = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentSelectedProduct = product;

    document.getElementById('productDetailTitle').textContent = product.name;
    document.getElementById('productDetailImage').src = product.image;
    document.getElementById('productDetailBadge').textContent = product.badge;
    document.getElementById('productDetailRating').innerHTML = generateStarRating(product.rating);
    document.getElementById('productDetailDescription').textContent = product.description;
    document.getElementById('productDetailCategory').textContent = product.category;
    document.getElementById('productDetailSeller').textContent = product.seller;
    document.getElementById('productDetailWarranty').textContent = product.warranty;
    document.getElementById('productDetailPrice').textContent = formatCurrency(product.price);

    const specsContainer = document.getElementById('productDetailSpecs');
    specsContainer.innerHTML = Object.entries(product.specs)
        .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
        .join('');


    productDetailModal.show();
};


// SERVICE DETAIL MODAL
window.showServiceDetail = function(serviceKey) {
    const service = serviceDetails[serviceKey];
    if (!service) return;

    document.getElementById('serviceModalTitle').textContent = service.title;
    document.getElementById('serviceModalBody').innerHTML = service.content;

    serviceModal.show();
};



// ORDER MANAGEMENT
window.placeOrder = function() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    if (!userProfile.name || !userProfile.address) {
        alert('Please complete your profile with shipping address before placing an order.');
        openProfile();
        return;
    }

    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    const order = {
        id: 'ORD-' + Date.now(),
        date: new Date().toISOString(),
        items: [...cart],
        subtotal: subtotal,
        tax: tax,
        total: total,
        paymentMethod: paymentMethod,
        shippingAddress: { ...userProfile },
        status: 'Completed'
    };

    orderHistory.unshift(order);
    saveOrderHistory();

    cart = [];
    updateCartUI();

    checkoutModal.hide();

    setTimeout(() => {
        alert(`✅ Order placed successfully!\n\nOrder ID: ${order.id}\nTotal: ${formatCurrency(total)}\n\nYou can track your order in Order History.`);
    }, 300);

    updateOrderCount();
};


window.openOrderHistory = function() {
    renderOrderHistory();
    orderHistoryModal.show();
};


function renderOrderHistory() {
    const container = document.getElementById('orderHistoryContent');
    if (!container) return;

    if (orderHistory.length === 0) {
        container.innerHTML = `
            <div class="order-history-empty">
                <div class="empty-icon">📦</div>
                <h4>No Orders Yet</h4>
                <p class="text-secondary">Start shopping to see your order history here!</p>
                <a href="produk.html" class="btn btn-neon mt-3">Browse Products</a>
            </div>
        `;
        return;
    }

    container.innerHTML = orderHistory.map(order => `
        <div class="order-card" onclick="showOrderDetail('${order.id}')">
            <div class="order-header">
                <div>
                    <div class="order-id">${order.id}</div>
                    <div class="order-date">${new Date(order.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                    })}</div>
                </div>
                <span class="order-status status-${order.status.toLowerCase()}">${order.status}</span>
            </div>
            <div class="order-items-preview">
                ${order.items.slice(0, 4).map(item => `
                    <div class="order-item-thumb">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                `).join('')}
                ${order.items.length > 4 ? `<div class="order-item-thumb">+${order.items.length - 4}</div>` : ''}
            </div>
            <div class="order-footer">
                <span class="text-secondary">${order.items.length} item(s)</span>
                <span class="order-total">${formatCurrency(order.total)}</span>
            </div>
        </div>
    `).join('');
}


// Show order detail
window.showOrderDetail = function(orderId) {
    const order = orderHistory.find(o => o.id === orderId);
    if (!order) return;

    document.getElementById('orderDetailTitle').textContent = `Order ${order.id}`;
    
    document.getElementById('orderDetailContent').innerHTML = `
        <div class="order-detail-section">
            <h6>Order Information</h6>
            <div class="detail-row">
                <span class="detail-label">Order Date:</span>
                <span class="detail-value">${new Date(order.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Status:</span>
                <span class="detail-value"><span class="order-status status-${order.status.toLowerCase()}">${order.status}</span></span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Payment Method:</span>
                <span class="detail-value">${order.paymentMethod}</span>
            </div>
        </div>

        <div class="order-detail-section">
            <h6>Shipping Address</h6>
            <p><strong>${order.shippingAddress.name}</strong></p>
            <p>${order.shippingAddress.address}</p>
            <p>${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zip}</p>
            <p>${order.shippingAddress.country}</p>
            <p>Phone: ${order.shippingAddress.phone}</p>
        </div>

        <div class="order-detail-section">
            <h6>Order Items</h6>
            ${order.items.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">${formatCurrency(item.price)} × ${item.quantity}</div>
                    </div>
                    <div class="text-end">
                        <strong>${formatCurrency(item.price * item.quantity)}</strong>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="order-detail-section">
            <h6>Order Summary</h6>
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
                    <span>Total:</span>
                    <span>${formatCurrency(order.total)}</span>
                </div>
            </div>
        </div>
    `;

    orderHistoryModal.hide();
    setTimeout(() => {
        orderDetailModal.show();
    }, 300);
};



// Reorder items
window.reorderItems = function() {
    const orderId = document.getElementById('orderDetailTitle').textContent.replace('Order ', '');
    const order = orderHistory.find(o => o.id === orderId);
    
    if (!order) return;

    order.items.forEach(item => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            cart.push({ ...item });
        }
    });

    updateCartUI();
    orderDetailModal.hide();

    alert(`✅ ${order.items.length} item(s) added to your cart!`);
};

function updateOrderCount() {
    const orderCountElement = document.getElementById('orderCount');
    if (orderCountElement) {
        orderCountElement.textContent = orderHistory.length;
    }
}


// Save order history to localStorage
function saveOrderHistory() {
    try {
        localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    } catch (e) {
        console.error("Error saving order history", e);
    }
}

function loadOrderHistory() {
    try {
        const stored = localStorage.getItem('orderHistory');
        if (stored) {
            orderHistory = JSON.parse(stored);
            updateOrderCount();
        }
    } catch (e) {
        console.error("Error loading order history", e);
        orderHistory = [];
    }
}


// Inisialisasi
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    if (document.getElementById('productDetailModal')) {
        productDetailModal = new bootstrap.Modal(document.getElementById('productDetailModal'));
        
        const addToCartBtn = document.getElementById('addToCartFromDetail');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', function() {
                if (currentSelectedProduct) {
                    addToCart(currentSelectedProduct.id);
                    productDetailModal.hide();
                }
            });
        }
    }
    
    if (document.getElementById('serviceModal')) {
        serviceModal = new bootstrap.Modal(document.getElementById('serviceModal'));
    }
    
    if (document.getElementById('orderHistoryModal')) {
        orderHistoryModal = new bootstrap.Modal(document.getElementById('orderHistoryModal'));
    }
    
    if (document.getElementById('orderDetailModal')) {
        orderDetailModal = new bootstrap.Modal(document.getElementById('orderDetailModal'));
    }

    // Initialize profile (dari profile.js)
    if (typeof initializeProfile === 'function') {
        initializeProfile();
    }

    // Initialize cart (dari cart.js)
    if (typeof initializeCart === 'function') {
        initializeCart();
    }
    loadOrderHistory();

    if (document.getElementById('productContainer')) {
        checkURLFilters();
        renderProducts();
    }

    updateOrderCount();
});