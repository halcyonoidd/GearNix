let cart = [];

const cartCountElement = document.getElementById('cartCount');
const cartItemsElement = document.getElementById('cartItems');
const checkoutTotalElement = document.getElementById('checkoutTotal');

let cartModal, checkoutModal;



// FUNGSI MENAMBAHKAN PRODUK KE KERANJANG
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



// FUNGSI MENGUBAH KUANTITAS PRODUK
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



// FUNGSI MENGHAPUS PRODUK DARI KERANJANG
window.removeFromCart = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
};



// FUNGSI UPDATE TAMPILAN KERANJANG
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
    
    renderCartItems();
}



// FUNGSI RENDER DAFTAR ITEM DI KERANJANG
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


// FUNGSI UPDATE TOTAL DI CHECKOUT
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



// FUNGSI BUKA MODAL KERANJANG
window.openCart = function() {
    updateCartUI();
    cartModal.show();
};



// FUNGSI LANJUT KE CHECKOUT
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


// FUNGSI ANIMASI PULSE PADA ICON CART
function triggerCartPulse() {
    const icon = document.querySelector('.cart-icon');
    if (icon) {
        icon.classList.add('cart-pulse');
        setTimeout(() => icon.classList.remove('cart-pulse'), 500);
    }
}


// FUNGSI NOTIFIKASI PRODUK DITAMBAHKAN
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



// FUNGSI INISIALISASI CART
function initializeCart() {
    if (document.getElementById('cartModal')) {
        cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    }
    if (document.getElementById('checkoutModal')) {
        checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    }
    
    updateCartUI();
}