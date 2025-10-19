const products = [
    // === MOUSE GAMING ===
    { 
        id: 1, 
        name: "Zephyr Wireless Gaming Mouse", 
        category: "Mouse", 
        price: 89.99, 
        image: "image/mouseGaming.png", 
        rating: 5, 
        badge: "BEST SELLER", 
        description: "Precision wireless gaming mouse with ultra-low latency and customizable RGB lighting", 
        specs: { 
            dpi: "25,600 DPI", 
            battery: "70 hours", 
            weight: "85g", 
            connectivity: "2.4GHz Wireless" 
        }, 
        seller: "GearNix Official", 
        warranty: "2 Years" 
    },
    { 
        id: 2, 
        name: "Araxys Wireless Gaming Mouse", 
        category: "Mouse", 
        price: 89.99, 
        image: "image/mouseGaming2.png", 
        rating: 5, 
        badge: "BEST SELLER", 
        description: "Precision wireless gaming mouse with ultra-low latency and customizable RGB lighting", 
        specs: { 
            dpi: "25,600 DPI", 
            battery: "70 hours", 
            weight: "85g", 
            connectivity: "2.4GHz Wireless" 
        }, 
        seller: "GearNix Official", 
        warranty: "2 Years" 
    },
    { 
        id: 3, 
        name: "Cypher Wireless Gaming Mouse", 
        category: "Mouse", 
        price: 89.99, 
        image: "image/mouseGaming3.png", 
        rating: 5, 
        badge: "BEST SELLER", 
        description: "Precision wireless gaming mouse with ultra-low latency and customizable RGB lighting", 
        specs: { 
            dpi: "25,600 DPI", 
            battery: "70 hours", 
            weight: "85g", 
            connectivity: "2.4GHz Wireless" 
        }, 
        seller: "GearNix Official", 
        warranty: "2 Years" 
    },
    { 
        id: 4, 
        name: "Boulevard Mouse", 
        category: "Mouse", 
        price: 89.99, 
        image: "image/mouseGaming4.png", 
        rating: 5, 
        badge: "RECOMMENDED", 
        description: "Precision wireless gaming mouse with ultra-low latency and customizable RGB lighting", 
        specs: { 
            dpi: "25,600 DPI", 
            battery: "70 hours", 
            weight: "85g", 
            connectivity: "2.4GHz Wireless" 
        }, 
        seller: "GearNix Official", 
        warranty: "2 Years" 
    },
    { 
        id: 5, 
        name: "MSI Gaming Mouse", 
        category: "Mouse", 
        price: 89.99, 
        image: "image/mouseGaming5.png", 
        rating: 5, 
        badge: "BEST SELLER", 
        description: "Precision wireless gaming mouse with ultra-low latency and customizable RGB lighting", 
        specs: { 
            dpi: "25,600 DPI", 
            battery: "70 hours", 
            weight: "85g", 
            connectivity: "2.4GHz Wireless" 
        }, 
        seller: "GearNix Official", 
        warranty: "2 Years" 
    },
    
    // === KEYBOARD GAMING ===
    { 
        id: 6, 
        name: "Pulsar Phantom Keyboard", 
        category: "Keyboard", 
        price: 159.99, 
        image: "image/keyboardGaming.png", 
        rating: 4, 
        badge: "NEW ARRIVAL", 
        description: "Mechanical keyboard with low-profile optical switches and dynamic RGB backlighting.", 
        specs: { 
            switches: "Low-Profile Optical", 
            keycaps: "Double-shot PBT", 
            layout: "Tenkeyless (TKL)", 
            connectivity: "Wired USB-C" 
        }, 
        seller: "ElitePeripherals", 
        warranty: "1 Year" 
    },
    { 
        id: 7, 
        name: "Robotic Gaming Keyboard", 
        category: "Keyboard", 
        price: 159.99, 
        image: "image/keyboardGaming2.png", 
        rating: 5, 
        badge: "RECOMMENDED", 
        description: "Mechanical keyboard with low-profile optical switches and dynamic RGB backlighting.", 
        specs: { 
            switches: "Low-Profile Optical", 
            keycaps: "Double-shot PBT", 
            layout: "Tenkeyless (TKL)", 
            connectivity: "Wired USB-C" 
        }, 
        seller: "ElitePeripherals", 
        warranty: "1 Year" 
    },
    { 
        id: 8, 
        name: "ROG Gaming Keyboard", 
        category: "Keyboard", 
        price: 159.99, 
        image: "image/keyboardGaming3.png", 
        rating: 5, 
        badge: "RECOMMENDED", 
        description: "Mechanical keyboard with low-profile optical switches and dynamic RGB backlighting.", 
        specs: { 
            switches: "Low-Profile Optical", 
            keycaps: "Double-shot PBT", 
            layout: "Tenkeyless (TKL)", 
            connectivity: "Wired USB-C" 
        }, 
        seller: "ElitePeripherals", 
        warranty: "1 Year" 
    },
    { 
        id: 9, 
        name: "Insyrex Gaming Keyboard", 
        category: "Keyboard", 
        price: 159.99, 
        image: "image/keyboardGaming4.png", 
        rating: 5, 
        badge: "RECOMMENDED", 
        description: "Mechanical keyboard with low-profile optical switches and dynamic RGB backlighting.", 
        specs: { 
            switches: "Low-Profile Optical", 
            keycaps: "Double-shot PBT", 
            layout: "Tenkeyless (TKL)", 
            connectivity: "Wired USB-C" 
        }, 
        seller: "ElitePeripherals", 
        warranty: "1 Year" 
    },
    { 
        id: 10, 
        name: "Highly Gaming Keyboard", 
        category: "Keyboard", 
        price: 159.99, 
        image: "image/keyboardGaming5.png", 
        rating: 5, 
        badge: "RECOMMENDED", 
        description: "Mechanical keyboard with low-profile optical switches and dynamic RGB backlighting.", 
        specs: { 
            switches: "Low-Profile Optical", 
            keycaps: "Double-shot PBT", 
            layout: "Tenkeyless (TKL)", 
            connectivity: "Wired USB-C" 
        }, 
        seller: "ElitePeripherals", 
        warranty: "1 Year" 
    },
    
    // === HEADSET GAMING ===
    { 
        id: 11, 
        name: "Vibranium X Pro Headset", 
        category: "Headset", 
        price: 150, 
        image: "image/headsetGaming.png", 
        rating: 5, 
        badge: "TOP RATED", 
        description: "Premium gaming headset with 7.1 surround sound and noise cancellation", 
        specs: { 
            drivers: "50mm Neodymium", 
            frequency: "20Hz - 20kHz", 
            impedance: "32 Ohms", 
            connectivity: "USB & 3.5mm" 
        }, 
        seller: "GearNix Official", 
        warranty: "2 Years" 
    },
    { 
        id: 12, 
        name: "Thermaltake Cronos Gaming Headset", 
        category: "Headset", 
        price: 150, 
        image: "image/headsetGaming2.png", 
        rating: 4, 
        badge: "RECOMMENDED", 
        description: "Large 50mm drivers deliver immersive sound with deep bass and clear highs", 
        specs: { 
            size: "50mm", 
            material: "Memory Foam", 
            thickness: "20mm", 
            edge: "Soft Leather" 
        }, 
        seller: "Accessory King", 
        warranty: "3 Months" 
    },
    { 
        id: 13, 
        name: "Antryx Gaming Headset", 
        category: "Headset", 
        price: 150, 
        image: "image/headsetGaming3.png", 
        rating: 5, 
        badge: "RECOMMENDED", 
        description: "Premium gaming headset with 7.1 surround sound and noise cancellation", 
        specs: { 
            drivers: "50mm Neodymium", 
            frequency: "20Hz - 20kHz", 
            impedance: "32 Ohms", 
            connectivity: "USB & 3.5mm" 
        }, 
        seller: "Razer Official", 
        warranty: "2 Years" 
    },
    { 
        id: 14, 
        name: "Razer Gaming Headset", 
        category: "Headset", 
        price: 150, 
        image: "image/headsetGaming4.png", 
        rating: 5, 
        badge: "BEST SELLER", 
        description: "Premium gaming headset with 7.1 surround sound and noise cancellation", 
        specs: { 
            drivers: "50mm Neodymium", 
            frequency: "20Hz - 20kHz", 
            impedance: "32 Ohms", 
            connectivity: "USB & 3.5mm" 
        }, 
        seller: "Razer Official", 
        warranty: "2 Years" 
    },
    
    // === CONTROLLER GAMING ===
    { 
        id: 15, 
        name: "Aether Controller Elite", 
        category: "Controller", 
        price: 120, 
        image: "image/controllerGaming.png", 
        rating: 5, 
        badge: "PRO CHOICE", 
        description: "Modular professional gaming controller with interchangeable thumbsticks and paddles.", 
        specs: { 
            buttons: "Customizable Paddles", 
            trigger: "Hair Trigger Locks", 
            battery: "Up to 40 hours", 
            connectivity: "Bluetooth & USB-C" 
        }, 
        seller: "GearNix Official", 
        warranty: "6 Months" 
    },
    { 
        id: 16, 
        name: "Nebula Pro Controller", 
        category: "Controller", 
        price: 120, 
        image: "image/controllerGaming2.png", 
        rating: 5, 
        badge: "RECOMMENDED", 
        description: "Modular professional gaming controller with interchangeable thumbsticks and paddles.", 
        specs: { 
            buttons: "Customizable Paddles", 
            trigger: "Hair Trigger Locks", 
            battery: "Up to 40 hours", 
            connectivity: "Bluetooth & USB-C" 
        }, 
        seller: "GearNix Official", 
        warranty: "6 Months" 
    },
    { 
        id: 17, 
        name: "Mario Bros Controller", 
        category: "Controller", 
        price: 120, 
        image: "image/controllerGaming3.png", 
        rating: 5, 
        badge: "RECOMMENDED", 
        description: "Modular professional gaming controller with interchangeable thumbsticks and paddles.", 
        specs: { 
            buttons: "Customizable Paddles", 
            trigger: "Hair Trigger Locks", 
            battery: "Up to 40 hours", 
            connectivity: "Bluetooth & USB-C" 
        }, 
        seller: "GearNix Official", 
        warranty: "6 Months" 
    },
    
    // === GAMING CHAIR ===
    { 
        id: 18, 
        name: "Nebula Gaming Chair", 
        category: "Chair", 
        price: 550, 
        image: "image/gamingChair.png", 
        rating: 5, 
        badge: "BEST SELLER", 
        description: "Ergonomic gaming chair with adjustable lumbar support and RGB lighting.", 
        specs: { 
            material: "Premium PU Leather", 
            dimensions: "55 x 55 x 120 cm", 
            weight: "25 kg", 
            features: "Reclining, Swivel, Height Adjustable" 
        }, 
        seller: "GearNix Official", 
        warranty: "2 Years" 
    },
    { 
        id: 19, 
        name: "King's Gaming Chair", 
        category: "Chair", 
        price: 550, 
        image: "image/gamingChair2.png", 
        rating: 5, 
        badge: "BEST SELLER", 
        description: "Ergonomic gaming chair with adjustable lumbar support and RGB lighting.", 
        specs: { 
            material: "Premium PU Leather", 
            dimensions: "55 x 55 x 120 cm", 
            weight: "25 kg", 
            features: "Reclining, Swivel, Height Adjustable" 
        }, 
        seller: "GearNix Official", 
        warranty: "2 Years" 
    },
    { 
        id: 20, 
        name: "Titanium Gaming Chair", 
        category: "Chair", 
        price: 550, 
        image: "image/gamingChair3.png", 
        rating: 5, 
        badge: "BEST SELLER", 
        description: "Ergonomic gaming chair with adjustable lumbar support and RGB lighting.", 
        specs: { 
            material: "Premium PU Leather", 
            dimensions: "55 x 55 x 120 cm", 
            weight: "25 kg", 
            features: "Reclining, Swivel, Height Adjustable" 
        }, 
        seller: "GearNix Official", 
        warranty: "2 Years" 
    },
    
    // === GAMING PC ===
    { 
        id: 21, 
        name: "Asus Gaming PC", 
        category: "PC", 
        price: 2000, 
        image: "image/pcGaming.png", 
        rating: 5, 
        badge: "RECOMMENDED", 
        description: "High-performance gaming PC with customizable RGB lighting.", 
        specs: { 
            processor: "Intel i9", 
            ram: "32GB", 
            storage: "1TB SSD", 
            graphics: "NVIDIA RTX 3080" 
        }, 
        seller: "GearNix Official", 
        warranty: "2 Years" 
    },
    { 
        id: 22, 
        name: "Apex Gaming PC", 
        category: "PC", 
        price: 2000, 
        image: "image/pcGaming2.png", 
        rating: 5, 
        badge: "BEST SELLER", 
        description: "High-performance gaming PC with customizable RGB lighting.", 
        specs: { 
            processor: "Intel i9", 
            ram: "32GB", 
            storage: "1TB SSD", 
            graphics: "NVIDIA RTX 3080" 
        }, 
        seller: "GearNix Official", 
        warranty: "2 Years" 
    },
    { 
        id: 23, 
        name: "Razer Gaming PC", 
        category: "PC", 
        price: 2000, 
        image: "image/pcGaming3.png", 
        rating: 5, 
        badge: "BEST SELLER", 
        description: "High-performance gaming PC with customizable RGB lighting.", 
        specs: { 
            processor: "Intel i9", 
            ram: "32GB", 
            storage: "1TB SSD", 
            graphics: "NVIDIA RTX 3080" 
        }, 
        seller: "GearNix Official", 
        warranty: "2 Years" 
    },
    
    // === GAMING LAPTOP ===
    { 
        id: 24, 
        name: "ASUS ROG STRIX", 
        category: "Laptop", 
        price: 1499.99, 
        image: "image/laptopGaming.png", 
        rating: 5, 
        badge: "RECOMMENDED", 
        description: "High-performance gaming laptop with customizable RGB lighting.", 
        specs: { 
            processor: "Intel i9", 
            ram: "32GB", 
            storage: "1TB SSD", 
            graphics: "NVIDIA RTX 3080" 
        }, 
        seller: "GearNix Official", 
        warranty: "2 Years" 
    },
    { 
        id: 25, 
        name: "MSI Laptop", 
        category: "Laptop", 
        price: 1499.99, 
        image: "image/laptopGaming2.png", 
        rating: 5, 
        badge: "RECOMMENDED", 
        description: "High-performance gaming laptop with customizable RGB lighting.", 
        specs: { 
            processor: "Intel i9", 
            ram: "32GB", 
            storage: "1TB SSD", 
            graphics: "NVIDIA RTX 3080" 
        }, 
        seller: "GearNix Official", 
        warranty: "2 Years" 
    },
    
    // === OTHERS (Accessories) ===
    { 
        id: 26, 
        name: "TP-Link Archer AX6000", 
        category: "Others", 
        price: 150, 
        image: "image/router(others).png", 
        rating: 5, 
        badge: "RECOMMENDED", 
        description: "Ultra-fast Wi-Fi 6 router with three external antennas for maximum range and high speeds.", 
        specs: { 
            wireless_standard: "Wi-Fi 6 (802.11ax)", 
            speed: "Up to 5952 Mbps", 
            processor: "1.8GHz Quad-Core CPU", 
            ram: "1GB", 
            ports: "1x 2.5Gbps WAN, 8x Gigabit LAN" 
        }, 
        seller: "TP-Link Official Store", 
        warranty: "3 Years" 
    },
    { 
        id: 27, 
        name: "Logitech StreamCam", 
        category: "Others", 
        price: 149.99, 
        image: "image/webCam(others).png", 
        rating: 5, 
        badge: "RECOMMENDED", 
        description: "Full HD webcam with autofocus and dual omnidirectional microphones for professional streaming.", 
        specs: { 
            resolution: "1080p @ 60fps", 
            lens: "Glass lens with auto focus", 
            field_of_view: "78°", 
            connectivity: "USB-C" 
        }, 
        seller: "TechGear Official", 
        warranty: "1 Year" 
    },
    { 
        id: 28, 
        name: "Anker 7-Port USB 3.0 Hub", 
        category: "Others", 
        price: 49.99, 
        image: "image/usbHUB(others).png", 
        rating: 4.8, 
        badge: "RECOMMENDED", 
        description: "High-speed USB 3.0 hub with 7 ports for fast data transfer and efficient power management.", 
        specs: { 
            usbPorts: "7 Ports (USB 3.0)", 
            dataTransferSpeed: "Up to 5Gbps", 
            powerSupply: "12V/3A External Adapter", 
            compatibility: "Windows, macOS, Linux" 
        }, 
        seller: "TechGear Official", 
        warranty: "1 Year" 
    },
    { 
        id: 29, 
        name: "Blue Yeti USB Microphone (Midnight Red)", 
        category: "Others", 
        price: 149.99, 
        image: "image/mic(Others).png", 
        rating: 4, 
        badge: "RECOMMENDED", 
        description: "Versatile USB condenser microphone with multiple pattern modes for professional recording, streaming, and podcasting.", 
        specs: { 
            transducerType: "Condenser", 
            polarPatterns: "Cardioid, Bidirectional, Omnidirectional, Stereo", 
            sampleRate: "48 kHz", 
            bitDepth: "16-bit", 
            frequencyResponse: "20Hz - 20kHz", 
            connectivity: "USB 2.0/3.0" 
        }, 
        seller: "AudioPro Solutions", 
        warranty: "2 Years" 
    }
];



// DATA LAYANAN 
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