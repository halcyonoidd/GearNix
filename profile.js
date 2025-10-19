let userProfile = {
    name: '', 
    email: '', 
    phone: '', 
    dob: '',
    address: '', 
    city: '', 
    state: '', 
    zip: '', 
    country: ''
};


let profileModal;


// FUNGSI OPEN PROFILE MODAL
window.openProfile = function() {
    loadProfileData();
    profileModal.show();
};


// FUNGSI OPEN PROFILE DARI CHECKOUT
window.openProfileFromCheckout = function() {
    checkoutModal.hide();
    
    setTimeout(() => {
        loadProfileData();
        profileModal.show();
    }, 300);
};


// FUNGSI LOAD PROFILE DATA KE FORM
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


// FUNGSI SAVE PROFILE
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


// FUNGSI UPDATE SHIPPING ADDRESS DISPLAY
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


// FUNGSI SAVE USER PROFILE KE LOCALSTORAGE
function saveUserProfile() {
    try {
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
    } catch (e) {
        console.error("Error saving user profile", e);
    }
}


// FUNGSI LOAD USER PROFILE DARI LOCALSTORAGE
function loadUserProfile() {
    try {
        const stored = localStorage.getItem('userProfile');
        if (stored) {
            userProfile = JSON.parse(stored);
        }
    } catch (e) {
        console.error("Error loading user profile", e);
        userProfile = {
            name: '', email: '', phone: '', dob: '',
            address: '', city: '', state: '', zip: '', country: ''
        };
    }
}


// FUNGSI INISIALISASI PROFILE
function initializeProfile() {
    loadUserProfile();
    
    if (document.getElementById('profileModal')) {
        profileModal = new bootstrap.Modal(document.getElementById('profileModal'));
    }
    
    updateShippingAddressDisplay();
}