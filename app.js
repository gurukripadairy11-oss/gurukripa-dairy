/* ==========================================================================
   GURU KRIPA DAIRY - MULTI-PAGE E-COMMERCE & B2B COMMERCIAL ENGINE
   ========================================================================== */

// Unified Products Database (13 Premium Offerings, 11 Milk Products)
const PRODUCTS = {
  'cow-milk': {
    id: 'cow-milk',
    name: 'Pure Cow Milk',
    category: 'Milk',
    price: 75,
    unit: '1 Litre Bottle',
    img: 'images/cow_milk.jpg',
    tag: 'Fresh Daily',
    specs: {
      purity: '99.8%',
      fat: '4.2%',
      protein: '3.4g',
      moisture: '88.0%',
      shelflife: '72 Hours (Chilled)',
      source: 'Pasture-fed Cows',
      certs: 'FSSAI Certified, 100% Organic'
    },
    b2b: {
      wastageReduction: 0.12,         // 12% reduction in kitchen waste
      customerRetentionBoost: 0.08,  // 8% customer retention boost
      premiumSurcharge: 10,          // ₹10 extra per Litre
      dishPremium: 15,               // Cafe can charge ₹15 premium per portion
      conversionRate: 0.85           // Yields 85 portions per 10 Liters
    }
  },
  'buffalo-milk': {
    id: 'buffalo-milk',
    name: 'Rich Buffalo Milk',
    category: 'Milk',
    price: 85,
    unit: '1 Litre Bottle',
    img: 'images/buffalo_milk.png',
    tag: 'High Fat Content',
    specs: {
      purity: '99.9%',
      fat: '7.8%',
      protein: '3.8g',
      moisture: '83.0%',
      shelflife: '72 Hours (Chilled)',
      source: 'Local Murrah Buffaloes',
      certs: 'FSSAI Certified, Preservative Free'
    },
    b2b: {
      wastageReduction: 0.16,
      customerRetentionBoost: 0.12,
      premiumSurcharge: 12,
      dishPremium: 20,
      conversionRate: 0.90
    }
  },
  'a2-milk': {
    id: 'a2-milk',
    name: 'A2 Gir Cow Milk',
    category: 'Milk',
    price: 120,
    unit: '1 Litre Bottle',
    img: 'images/a2_milk.png',
    tag: 'Premium Organic',
    specs: {
      purity: '100%',
      fat: '4.5%',
      protein: '3.6g',
      moisture: '87.5%',
      shelflife: '48 Hours (Chilled)',
      source: 'Vedic-grazed Gir Cows',
      certs: 'FSSAI Certified, NPOP Organic'
    },
    b2b: {
      wastageReduction: 0.10,
      customerRetentionBoost: 0.15,
      premiumSurcharge: 25,
      dishPremium: 30,
      conversionRate: 0.85
    }
  },
  'skimmed-milk': {
    id: 'skimmed-milk',
    name: 'Diet Skimmed Milk',
    category: 'Milk',
    price: 65,
    unit: '1 Litre Bottle',
    img: 'images/skimmed_milk.png',
    tag: '99% Fat Free',
    specs: {
      purity: '99.5%',
      fat: '0.1%',
      protein: '3.5g',
      moisture: '90.2%',
      shelflife: '72 Hours (Chilled)',
      source: 'Cream-separated Cow Milk',
      certs: 'FSSAI Certified, Zero Trans Fat'
    },
    b2b: {
      wastageReduction: 0.08,
      customerRetentionBoost: 0.06,
      premiumSurcharge: 8,
      dishPremium: 10,
      conversionRate: 0.80
    }
  },
  'toned-milk': {
    id: 'toned-milk',
    name: 'Pasteurized Toned Milk',
    category: 'Milk',
    price: 60,
    unit: '1 Litre Packet',
    img: 'images/toned_milk.png',
    tag: 'Balanced Nutrition',
    specs: {
      purity: '99.6%',
      fat: '3.0%',
      protein: '3.2g',
      moisture: '89.0%',
      shelflife: '48 Hours (Chilled)',
      source: 'Pasteurized Dairy Blend',
      certs: 'FSSAI Certified, Fortified Vit A/D'
    },
    b2b: {
      wastageReduction: 0.06,
      customerRetentionBoost: 0.04,
      premiumSurcharge: 5,
      dishPremium: 8,
      conversionRate: 0.82
    }
  },
  'double-toned-milk': {
    id: 'double-toned-milk',
    name: 'Double Toned Milk',
    category: 'Milk',
    price: 55,
    unit: '1 Litre Packet',
    img: 'images/double_toned_milk.png',
    tag: 'Low Calorie',
    specs: {
      purity: '99.5%',
      fat: '1.5%',
      protein: '3.3g',
      moisture: '90.0%',
      shelflife: '48 Hours (Chilled)',
      source: 'Double Cream-separated Blend',
      certs: 'FSSAI Certified, Light Diet'
    },
    b2b: {
      wastageReduction: 0.05,
      customerRetentionBoost: 0.04,
      premiumSurcharge: 4,
      dishPremium: 6,
      conversionRate: 0.80
    }
  },
  'lactose-free-milk': {
    id: 'lactose-free-milk',
    name: 'Lactose-Free Milk',
    category: 'Milk',
    price: 95,
    unit: '1 Litre Carton',
    img: 'images/lactose_free_milk.png',
    tag: 'Easy Digestion',
    specs: {
      purity: '99.8%',
      fat: '3.5%',
      protein: '3.4g',
      moisture: '88.2%',
      shelflife: '90 Days (UHT Tetra)',
      source: 'Enzyme-treated Cow Milk',
      certs: 'FSSAI Certified, Lactase Pre-treated'
    },
    b2b: {
      wastageReduction: 0.10,
      customerRetentionBoost: 0.14,
      premiumSurcharge: 15,
      dishPremium: 25,
      conversionRate: 0.85
    }
  },
  'kesar-milk': {
    id: 'kesar-milk',
    name: 'Kesar Elaichi Milk',
    category: 'Milk',
    price: 50,
    unit: '200ml Bottle',
    img: 'images/flavored_milk.png',
    tag: 'Spiced Sweetened',
    specs: {
      purity: '99.0%',
      fat: '4.5%',
      protein: '3.2g',
      moisture: '78.0%',
      shelflife: '180 Days (Sterilized)',
      source: 'Double Toned Saffron Infusion',
      certs: 'FSSAI Certified, Real Saffron/Cardamom'
    },
    b2b: {
      wastageReduction: 0.05,
      customerRetentionBoost: 0.18,
      premiumSurcharge: 8,
      dishPremium: 15,
      conversionRate: 0.95
    }
  },
  'golden-milk': {
    id: 'golden-milk',
    name: 'Turmeric Immunity Milk',
    category: 'Milk',
    price: 55,
    unit: '200ml Bottle',
    img: 'images/golden_milk.png',
    tag: 'Immunity Booster',
    specs: {
      purity: '99.2%',
      fat: '3.8%',
      protein: '3.3g',
      moisture: '79.5%',
      shelflife: '90 Days (Sterilized)',
      source: 'Curcumin-rich Turmeric Blend',
      certs: 'FSSAI Certified, Ayurvedic Recipe'
    },
    b2b: {
      wastageReduction: 0.04,
      customerRetentionBoost: 0.12,
      premiumSurcharge: 10,
      dishPremium: 18,
      conversionRate: 0.90
    }
  },
  'condensed-milk': {
    id: 'condensed-milk',
    name: 'Sweet Condensed Milk',
    category: 'Milk',
    price: 180,
    unit: '400g Can',
    img: 'images/condensed_milk.png',
    tag: 'Dessert Essential',
    specs: {
      purity: '99.9%',
      fat: '9.0%',
      protein: '8.1g',
      moisture: '26.0%',
      shelflife: '12 Months (Canned)',
      source: 'Evaporated Cow Milk & Sugar',
      certs: 'FSSAI Certified, Thickened Cream'
    },
    b2b: {
      wastageReduction: 0.20,
      customerRetentionBoost: 0.10,
      premiumSurcharge: 30,
      dishPremium: 20,
      conversionRate: 0.92
    }
  },
  'buttermilk-chaas': {
    id: 'buttermilk-chaas',
    name: 'Spiced Buttermilk (Chaas)',
    category: 'Milk',
    price: 35,
    unit: '500ml Packet',
    img: 'images/buttermilk.png',
    tag: 'Refreshing Drink',
    specs: {
      purity: '99.7%',
      fat: '1.2%',
      protein: '1.8g',
      moisture: '94.0%',
      shelflife: '5 Days (Chilled)',
      source: 'Churned Curd Dilution',
      certs: 'FSSAI Certified, Spiced & Salted'
    },
    b2b: {
      wastageReduction: 0.08,
      customerRetentionBoost: 0.15,
      premiumSurcharge: 3,
      dishPremium: 10,
      conversionRate: 0.95
    }
  },
  'fresh-cream': {
    id: 'fresh-cream',
    name: 'Fresh Malai Cream',
    category: 'Milk',
    price: 150,
    unit: '500g Tub',
    img: 'images/fresh_cream.png',
    tag: 'Thick Rich Cream',
    specs: {
      purity: '99.8%',
      fat: '25.0%',
      protein: '2.8g',
      moisture: '68.0%',
      shelflife: '10 Days (Chilled)',
      source: 'Centrifugal Milk Separation',
      certs: 'FSSAI Certified, Pure Milk Fat'
    },
    b2b: {
      wastageReduction: 0.15,
      customerRetentionBoost: 0.12,
      premiumSurcharge: 20,
      dishPremium: 15,
      conversionRate: 0.88
    }
  },
  'desi-ghee': {
    id: 'desi-ghee',
    name: 'Pure Desi Ghee',
    category: 'Ghee',
    price: 680,
    unit: '1 kg Jar',
    img: 'images/desi_ghee.jpg',
    tag: 'Best Seller',
    specs: {
      purity: '99.9%',
      fat: '99.6%',
      protein: '0.1g',
      moisture: '0.3%',
      shelflife: '12 Months (Room Temp)',
      source: 'Slow-cooked Cow Fat',
      certs: 'Agmark Grade A, FSSAI Certified'
    },
    b2b: {
      wastageReduction: 0.18,
      customerRetentionBoost: 0.15,
      premiumSurcharge: 80,
      dishPremium: 40,
      conversionRate: 0.95
    }
  },
  'fresh-paneer': {
    id: 'fresh-paneer',
    name: 'Fresh Malai Paneer',
    category: 'Paneer',
    price: 320,
    unit: '1 kg Block',
    img: 'images/fresh_paneer.jpg',
    tag: '100% Soft',
    specs: {
      purity: '99.5%',
      fat: '24.5%',
      protein: '18.2g',
      moisture: '52.0%',
      shelflife: '7 Days (Chilled)',
      source: 'Fresh Whole Milk Coagulation',
      certs: 'FSSAI Certified, Preservative Free'
    },
    b2b: {
      wastageReduction: 0.15,
      customerRetentionBoost: 0.10,
      premiumSurcharge: 40,
      dishPremium: 25,
      conversionRate: 0.90
    }
  }
};

// Global App State
let state = {
  cart: [],
  compareList: [],
  activeFilters: {
    search: '',
    category: 'all',
    maxPrice: 1000,
    minPurity: 90,
    minFat: 0.1
  },
  activeSort: 'featured',
  activeCalculatorProductId: null,
  chartInstance: null
};

// ==========================================
// INITIALIZATION & LIFECYCLE HOOKS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // Load persisted states
  loadStateFromStorage();
  
  // Initialize navigation-wide events
  initCommonEvents();
  
  // Router check based on page name
  const path = window.location.pathname.toLowerCase();
  
  if (path.includes('shop.html')) {
    initShopPage();
  } else if (path.includes('product-details.html')) {
    initDetailsPage();
  } else if (path.includes('cart.html')) {
    initCartPage();
  } else if (path.includes('dashboard.html')) {
    initDashboardPage();
  } else if (path.includes('contact.html')) {
    initContactPage();
  } else {
    // Default to Home page
    initHomePage();
  }
  
  // Update cart badge/indicators
  updateCartUI();
});

// Load state from local and session storage
function loadStateFromStorage() {
  const savedCart = localStorage.getItem('guru_kripa_cart');
  if (savedCart) {
    try { state.cart = JSON.parse(savedCart); } catch (e) { state.cart = []; }
  }
  
  const savedCompare = sessionStorage.getItem('guru_kripa_compare');
  if (savedCompare) {
    try { state.compareList = JSON.parse(savedCompare); } catch (e) { state.compareList = []; }
  }

  const savedFilters = localStorage.getItem('guru_kripa_filters');
  if (savedFilters && window.location.pathname.includes('shop.html')) {
    try {
      const parsed = JSON.parse(savedFilters);
      state.activeFilters = { ...state.activeFilters, ...parsed };
      
      // Update filter UI elements to match loaded state
      const searchEl = document.getElementById('product-search');
      const priceEl = document.getElementById('filter-price');
      const purityEl = document.getElementById('filter-purity');
      const fatEl = document.getElementById('filter-fat');

      if (searchEl) searchEl.value = state.activeFilters.search;
      if (priceEl) priceEl.value = state.activeFilters.maxPrice;
      if (purityEl) purityEl.value = state.activeFilters.minPurity;
      if (fatEl) fatEl.value = state.activeFilters.minFat;
    } catch (e) {
      console.warn('Could not restore filter preferences.');
    }
  }
}

// State Persisters
function saveCartToStorage() {
  localStorage.setItem('guru_kripa_cart', JSON.stringify(state.cart));
}
function saveCompareToStorage() {
  sessionStorage.setItem('guru_kripa_compare', JSON.stringify(state.compareList));
}
function saveFiltersToStorage() {
  localStorage.setItem('guru_kripa_filters', JSON.stringify(state.activeFilters));
}

// Common Shared Layout events
function initCommonEvents() {
  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) {
      if (window.scrollY > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
  });

  // Cart Drawer open/close binding
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartOverlay = document.getElementById('cart-overlay');

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
}

function openCart() {
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Global Cart Actions
function addToCart(productId, quantity = 1) {
  const qty = parseInt(quantity) || 1;
  const existingItem = state.cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    state.cart.push({ id: productId, quantity: qty });
  }
  saveCartToStorage();
  updateCartUI();
  
  // If we are on the cart.html page, reload the cart page UI too
  if (window.location.pathname.toLowerCase().includes('cart.html')) {
    renderCartPageItems();
  } else {
    openCart();
  }
}

function removeItem(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  saveCartToStorage();
  updateCartUI();
  if (window.location.pathname.toLowerCase().includes('cart.html')) {
    renderCartPageItems();
  }
}

function changeQuantity(productId, change) {
  const item = state.cart.find(item => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeItem(productId);
    } else {
      saveCartToStorage();
      updateCartUI();
      if (window.location.pathname.toLowerCase().includes('cart.html')) {
        renderCartPageItems();
      }
    }
  }
}

// Expose functions globally for HTML events
window.addToCart = addToCart;
window.removeItem = removeItem;
window.changeQuantity = changeQuantity;
window.closeCart = closeCart;

// Synchronize mini-drawer and header count
function updateCartUI() {
  const cartBadge = document.getElementById('cart-badge');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartDeliveryEl = document.getElementById('cart-delivery');
  const cartTotalEl = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('checkout-btn');

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartBadge) {
    cartBadge.textContent = totalCount;
    cartBadge.style.display = totalCount > 0 ? 'flex' : 'none';
  }

  if (!cartItemsContainer) return;
  cartItemsContainer.innerHTML = '';

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-message">
        <svg class="empty-cart-svg" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p>Your cart is empty.</p>
        <p style="font-size: 0.85rem; margin-top: 4px;">Explore our products and add them to your cart.</p>
      </div>
    `;
    if (checkoutBtn) checkoutBtn.disabled = true;
    if (cartSubtotalEl) cartSubtotalEl.textContent = '₹0.00';
    if (cartDeliveryEl) cartDeliveryEl.textContent = '₹0.00';
    if (cartTotalEl) cartTotalEl.textContent = '₹0.00';
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;
  let subtotal = 0;

  state.cart.forEach(item => {
    const product = PRODUCTS[item.id];
    if (!product) return;

    const itemTotal = product.price * item.quantity;
    subtotal += itemTotal;

    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <img src="${product.img}" alt="${product.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-name">${product.name}</h4>
        <div class="cart-item-price">₹${product.price} × ${item.quantity} = ₹${itemTotal}</div>
        <div class="cart-item-controls">
          <button class="quantity-btn" onclick="changeQuantity('${item.id}', -1)">-</button>
          <span class="cart-item-qty">${item.quantity}</span>
          <button class="quantity-btn" onclick="changeQuantity('${item.id}', 1)">+</button>
        </div>
      </div>
      <button class="btn-remove-item" onclick="removeItem('${item.id}')">Remove</button>
    `;
    cartItemsContainer.appendChild(itemEl);
  });

  const deliveryCharge = subtotal > 500 ? 0 : 40;
  const total = subtotal + deliveryCharge;

  if (cartSubtotalEl) cartSubtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
  if (cartDeliveryEl) {
    cartDeliveryEl.textContent = deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge.toFixed(2)}`;
    cartDeliveryEl.style.color = deliveryCharge === 0 ? '#27ae60' : '';
    cartDeliveryEl.style.fontWeight = deliveryCharge === 0 ? '700' : '';
  }
  if (cartTotalEl) cartTotalEl.textContent = `₹${total.toFixed(2)}`;
}


// ==========================================
// 1. HOME LANDING PAGE LOGIC
// ==========================================

function initHomePage() {
  const featuredContainer = document.getElementById('featured-grid-home');
  if (!featuredContainer) return;
  
  featuredContainer.innerHTML = '';
  // Load 3 main featured items: cow-milk, desi-ghee, fresh-paneer
  const featuredIds = ['cow-milk', 'desi-ghee', 'fresh-paneer'];
  
  featuredIds.forEach(id => {
    const product = PRODUCTS[id];
    if (!product) return;
    
    const card = document.createElement('article');
    card.className = 'product-card-modern';
    card.innerHTML = `
      <div class="product-img-wrapper-modern">
        <span class="tag-modern">${product.tag}</span>
        <img src="${product.img}" alt="${product.name}" class="product-img-modern">
        <div class="product-specs-pills">
          <span class="spec-pill">Purity: ${product.specs.purity}</span>
          <span class="spec-pill">Fat: ${product.specs.fat}</span>
        </div>
      </div>
      <div class="product-info-modern">
        <span class="category-modern">${product.category}</span>
        <h3 class="name-modern">${product.name}</h3>
        <p class="desc-modern">${product.specs.source} sourced daily. ${product.certs.split(',')[0]}. Certified pure.</p>
        
        <a href="product-details.html?id=${product.id}" class="btn-card-analytics" style="text-decoration: none;">
          <svg class="analytics-icon" viewBox="0 0 24 24">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
          <span>Calculate Business ROI</span>
        </a>
        
        <div class="meta-modern">
          <div class="price-modern">
            <span class="price-val-modern">₹${product.price}</span>
            <span class="price-unit-modern">per ${product.unit}</span>
          </div>
          
          <div class="card-actions-right">
            <button class="btn btn-primary btn-sm" onclick="addToCart('${product.id}')" style="border-radius: var(--radius-sm);">Order Now</button>
          </div>
        </div>
      </div>
    `;
    featuredContainer.appendChild(card);
  });
}


// ==========================================
// 2. SHOP PAGE LOGIC (CATALOG & FILTERING)
// ==========================================

function initShopPage() {
  // Bind controls
  const searchInput = document.getElementById('product-search');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const sortSelect = document.getElementById('product-sort');
  const filterPrice = document.getElementById('filter-price');
  const filterPurity = document.getElementById('filter-purity');
  const filterFat = document.getElementById('filter-fat');
  const filterResetBtn = document.getElementById('filter-reset-btn');
  const filterToggleBtn = document.getElementById('filter-toggle-btn');
  const filterPanel = document.getElementById('advanced-filter-panel');
  const triggerCompareBtn = document.getElementById('trigger-compare-btn');
  const clearCompareBtn = document.getElementById('clear-compare-btn');
  
  const closeRoiModalBtn = document.getElementById('close-roi-modal-btn');
  const closeRoiModalX = document.getElementById('close-roi-modal-x');
  const closeCompareModalBtn = document.getElementById('close-compare-modal-btn');
  const closeCompareModalX = document.getElementById('close-compare-modal-x');

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.activeFilters.search = e.target.value.trim();
      if (searchClearBtn) {
        searchClearBtn.style.display = state.activeFilters.search.length > 0 ? 'block' : 'none';
      }
      saveFiltersToStorage();
      renderShopGrid();
    });
  }

  // Clear search
  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      state.activeFilters.search = '';
      searchClearBtn.style.display = 'none';
      saveFiltersToStorage();
      renderShopGrid();
    });
  }

  // Category tabs
  const categoryTabs = document.querySelectorAll('.category-tab');
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeFilters.category = tab.getAttribute('data-category');
      saveFiltersToStorage();
      renderShopGrid();
    });
  });

  // Toggle filter panel
  if (filterToggleBtn && filterPanel) {
    filterToggleBtn.addEventListener('click', () => {
      const isHidden = filterPanel.style.display === 'none';
      filterPanel.style.display = isHidden ? 'block' : 'none';
      filterToggleBtn.classList.toggle('active', isHidden);
    });
  }

  // Range inputs
  if (filterPrice) {
    filterPrice.addEventListener('input', (e) => {
      state.activeFilters.maxPrice = parseFloat(e.target.value);
      document.getElementById('price-max-val').textContent = `₹${state.activeFilters.maxPrice}`;
      saveFiltersToStorage();
      renderShopGrid();
    });
  }
  if (filterPurity) {
    filterPurity.addEventListener('input', (e) => {
      state.activeFilters.minPurity = parseFloat(e.target.value);
      document.getElementById('purity-val').textContent = `${state.activeFilters.minPurity}%`;
      saveFiltersToStorage();
      renderShopGrid();
    });
  }
  if (filterFat) {
    filterFat.addEventListener('input', (e) => {
      state.activeFilters.minFat = parseFloat(e.target.value);
      document.getElementById('fat-val').textContent = `${state.activeFilters.minFat}%`;
      saveFiltersToStorage();
      renderShopGrid();
    });
  }

  // Reset Filters
  if (filterResetBtn) {
    filterResetBtn.addEventListener('click', () => {
      state.activeFilters = {
        search: '',
        category: 'all',
        maxPrice: 1000,
        minPurity: 90,
        minFat: 0.1
      };
      if (searchInput) searchInput.value = '';
      if (searchClearBtn) searchClearBtn.style.display = 'none';
      categoryTabs.forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-category') === 'all');
      });
      if (filterPrice) {
        filterPrice.value = 1000;
        document.getElementById('price-max-val').textContent = '₹1000';
      }
      if (filterPurity) {
        filterPurity.value = 90;
        document.getElementById('purity-val').textContent = '90%';
      }
      if (filterFat) {
        filterFat.value = 0.1;
        document.getElementById('fat-val').textContent = '0.1%';
      }
      saveFiltersToStorage();
      renderShopGrid();
    });
  }

  // Sorting
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.activeSort = e.target.value;
      renderShopGrid();
    });
  }

  // Comparison buttons
  if (triggerCompareBtn) triggerCompareBtn.addEventListener('click', openComparisonModal);
  if (clearCompareBtn) {
    clearCompareBtn.addEventListener('click', () => {
      state.compareList = [];
      saveCompareToStorage();
      updateComparisonBar();
      document.querySelectorAll('.compare-checkbox').forEach(chk => chk.checked = false);
    });
  }

  // Modal close buttons
  if (closeRoiModalBtn) closeRoiModalBtn.addEventListener('click', closeRoiModal);
  if (closeRoiModalX) closeRoiModalX.addEventListener('click', closeRoiModal);
  if (closeCompareModalBtn) closeCompareModalBtn.addEventListener('click', closeCompareModal);
  if (closeCompareModalX) closeCompareModalX.addEventListener('click', closeCompareModal);

  // ROI Calculator bindings
  const calcVolSlider = document.getElementById('calc-volume');
  const calcVolNum = document.getElementById('calc-volume-num');
  const calcWasteSlider = document.getElementById('calc-wastage');
  const calcWasteNum = document.getElementById('calc-wastage-num');
  const calcBizSelect = document.getElementById('calc-business-type');

  if (calcVolSlider && calcVolNum) {
    calcVolSlider.addEventListener('input', (e) => {
      calcVolNum.value = e.target.value;
      updateROICalculations();
    });
    calcVolNum.addEventListener('input', (e) => {
      let val = parseInt(e.target.value) || 10;
      if (val > 5000) val = 5000;
      if (val < 10) val = 10;
      calcVolSlider.value = val;
      updateROICalculations();
    });
  }
  if (calcWasteSlider && calcWasteNum) {
    calcWasteSlider.addEventListener('input', (e) => {
      calcWasteNum.value = e.target.value;
      updateROICalculations();
    });
    calcWasteNum.addEventListener('input', (e) => {
      let val = parseInt(e.target.value) || 1;
      if (val > 30) val = 30;
      if (val < 1) val = 1;
      calcWasteSlider.value = val;
      updateROICalculations();
    });
  }
  if (calcBizSelect) calcBizSelect.addEventListener('change', updateROICalculations);

  // Modal Add to Cart
  const roiAddCartBtn = document.getElementById('roi-add-cart-btn');
  if (roiAddCartBtn) {
    roiAddCartBtn.addEventListener('click', () => {
      if (state.activeCalculatorProductId) {
        addToCart(state.activeCalculatorProductId);
        closeRoiModal();
      }
    });
  }

  // Modal PDF Report generator
  const roiReportBtn = document.getElementById('roi-report-btn');
  if (roiReportBtn) {
    roiReportBtn.addEventListener('click', generateCommercialReport);
  }

  // Initial grid render
  renderShopGrid();
}

function renderShopGrid() {
  const grid = document.getElementById('products-grid-modern');
  if (!grid) return;
  grid.innerHTML = '';

  let filtered = Object.values(PRODUCTS).filter(product => {
    // Category match
    if (state.activeFilters.category !== 'all' && product.category !== state.activeFilters.category) return false;
    // Price match
    if (product.price > state.activeFilters.maxPrice) return false;
    // Purity match
    if (parseFloat(product.specs.purity) < state.activeFilters.minPurity) return false;
    // Fat match
    if (parseFloat(product.specs.fat) < state.activeFilters.minFat) return false;
    
    // Fuzzy search
    const searchStr = `${product.name} ${product.category} ${product.tag} ${product.specs.source}`;
    if (!fuzzyMatch(searchStr, state.activeFilters.search)) return false;

    return true;
  });

  // Sorting
  filtered.sort((a, b) => {
    switch (state.activeSort) {
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      case 'purity-desc': return parseFloat(b.specs.purity) - parseFloat(a.specs.purity);
      case 'protein-desc': return parseFloat(b.specs.protein) - parseFloat(a.specs.protein);
      case 'featured':
      default: return a.id.localeCompare(b.id);
    }
  });

  // Render cards
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: span 3; text-align: center; padding: 60px 0; color: #8fa5b5;">
        <svg viewBox="0 0 24 24" style="width: 64px; height: 64px; fill: none; stroke: currentColor; stroke-width: 1.5; margin-bottom: 16px;">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        <h4 style="font-size: 1.2rem; color: #ffffff; margin-bottom: 8px;">No Offerings Found</h4>
        <p style="font-size: 0.9rem;">Try broadening your filters or clearing search query.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(product => {
    const isCompared = state.compareList.includes(product.id);
    const card = document.createElement('article');
    card.className = 'product-card-modern';
    card.setAttribute('data-id', product.id);
    card.innerHTML = `
      <div class="product-img-wrapper-modern">
        <span class="tag-modern">${product.tag}</span>
        <img src="${product.img}" alt="${product.name}" class="product-img-modern">
        <div class="product-specs-pills">
          <span class="spec-pill">Purity: ${product.specs.purity}</span>
          <span class="spec-pill">Fat: ${product.specs.fat}</span>
        </div>
      </div>
      <div class="product-info-modern">
        <span class="category-modern">${product.category}</span>
        <h3 class="name-modern">${product.name}</h3>
        <p class="desc-modern">${product.specs.source}. ${product.certs.split(',')[0]}.</p>
        
        <button class="btn-card-analytics" onclick="openRoiModal('${product.id}')">
          <svg class="analytics-icon" viewBox="0 0 24 24">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
          <span>Analyze Commercial ROI</span>
        </button>
        
        <div class="meta-modern">
          <div class="price-modern">
            <span class="price-val-modern">₹${product.price}</span>
            <span class="price-unit-modern">per ${product.unit.replace('1 ', '')}</span>
          </div>
          
          <div class="card-actions-right">
            <label class="compare-checkbox-label">
              <input type="checkbox" class="compare-checkbox" data-id="${product.id}" ${isCompared ? 'checked' : ''}>
              <span class="custom-checkmark"></span>
              <span>Compare</span>
            </label>
            
            <button class="btn-add-cart" onclick="addToCart('${product.id}')" aria-label="Add to cart">
              <svg class="btn-add-cart-svg" viewBox="0 0 24 24" style="width:16px; height:16px; fill:none; stroke:currentColor; stroke-width:3;">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
    
    apply3DTiltEffect(card);

    const checkbox = card.querySelector('.compare-checkbox');
    if (checkbox) {
      checkbox.addEventListener('change', (e) => {
        handleCompareSelection(product.id, e.target.checked);
      });
    }

    grid.appendChild(card);
  });
  
  updateComparisonBar();
}


// ==========================================
// 5. PRODUCT DETAILS PAGE LOGIC
// ==========================================

function initDetailsPage() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id') || 'cow-milk';
  state.activeCalculatorProductId = productId;
  
  const product = PRODUCTS[productId];
  if (!product) {
    window.location.href = 'shop.html';
    return;
  }

  const detailsGrid = document.getElementById('details-grid-target');
  if (!detailsGrid) return;

  detailsGrid.innerHTML = `
    <!-- Left: Image Showcase -->
    <div class="details-img-showcase" id="details-tilt-card">
      <span class="details-badge">${product.tag}</span>
      <img src="${product.img}" alt="${product.name}" class="details-img">
    </div>
    
    <!-- Right: Technical Details & Ordering -->
    <div class="details-info">
      <span class="details-category">${product.category}</span>
      <h1 class="details-title">${product.name}</h1>
      <p class="details-desc">Our premium ${product.name.toLowerCase()} is directly sourced from ${product.specs.source.toLowerCase()}. Filtered, pasteurized, and packed daily under strict quality testing. Free of any chemical preservatives or artificial elements.</p>
      
      <div class="details-price-row">
        <span class="details-price">₹${product.price}</span>
        <span class="details-unit">per ${product.unit}</span>
      </div>
      
      <!-- Order Action Panel -->
      <div class="details-actions-row">
        <div class="qty-input-group">
          <button class="qty-input-btn" id="qty-minus-btn">-</button>
          <input type="text" class="qty-input-val" id="qty-value-el" value="1">
          <button class="qty-input-btn" id="qty-plus-btn">+</button>
        </div>
        
        <button class="btn btn-primary" id="details-add-cart-btn" style="border-radius: var(--radius-round); padding: 14px 36px;">
          Add to Order Cart
        </button>
      </div>

      <!-- Technical specifications block -->
      <div class="details-specs-card">
        <h4 class="details-specs-title">Technical Specifications</h4>
        <table class="roi-specs-table" style="font-size: 0.9rem;">
          <tbody>
            <tr>
              <td>Purity Rating</td>
              <td>${product.specs.purity} Pure</td>
            </tr>
            <tr>
              <td>Fat Level</td>
              <td>${product.specs.fat} Content</td>
            </tr>
            <tr>
              <td>Protein Content</td>
              <td>${product.specs.protein} (per 100g)</td>
            </tr>
            <tr>
              <td>Moisture Index</td>
              <td>${product.specs.moisture}</td>
            </tr>
            <tr>
              <td>Storage Shelf Life</td>
              <td>${product.specs.shelflife}</td>
            </tr>
            <tr>
              <td>Certifications</td>
              <td>${product.specs.certs}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;

  // Bind 3D card tilt
  const tiltCard = document.getElementById('details-tilt-card');
  if (tiltCard) apply3DTiltEffect(tiltCard);

  // Bind local quantity selectors
  const qtyMinus = document.getElementById('qty-minus-btn');
  const qtyPlus = document.getElementById('qty-plus-btn');
  const qtyInput = document.getElementById('qty-value-el');
  const addBtn = document.getElementById('details-add-cart-btn');

  if (qtyMinus && qtyPlus && qtyInput) {
    qtyMinus.addEventListener('click', () => {
      let v = parseInt(qtyInput.value) || 1;
      if (v > 1) qtyInput.value = v - 1;
    });
    qtyPlus.addEventListener('click', () => {
      let v = parseInt(qtyInput.value) || 1;
      qtyInput.value = v + 1;
    });
  }

  if (addBtn && qtyInput) {
    addBtn.addEventListener('click', () => {
      const q = parseInt(qtyInput.value) || 1;
      addToCart(productId, q);
    });
  }

  // Load calculator defaults for details page
  const calcVolSlider = document.getElementById('calc-volume');
  const calcVolNum = document.getElementById('calc-volume-num');
  const calcWasteSlider = document.getElementById('calc-wastage');
  const calcWasteNum = document.getElementById('calc-wastage-num');
  const calcBizSelect = document.getElementById('calc-business-type');

  if (calcVolSlider && calcVolNum && calcWasteSlider && calcWasteNum) {
    const isLiters = product.category === 'Milk';
    document.getElementById('calc-volume-unit').textContent = isLiters ? 'Liters' : 'kg';
    
    if (isLiters) {
      calcVolSlider.min = 50;
      calcVolSlider.max = 5000;
      calcVolSlider.value = 500;
      calcVolNum.value = 500;
    } else {
      calcVolSlider.min = 10;
      calcVolSlider.max = 2000;
      calcVolSlider.value = 150;
      calcVolNum.value = 150;
    }

    if (calcBizSelect) {
      calcBizSelect.innerHTML = '';
      if (product.category === 'Milk') {
        calcBizSelect.innerHTML = `
          <option value="restaurant" selected>Cafe & Restaurant (Premium Sourcing)</option>
          <option value="bakery">Sweet Shop & Bakery (High Fat Demand)</option>
          <option value="household">Premium Household (Daily Nutrition)</option>
        `;
      } else if (product.category === 'Ghee') {
        calcBizSelect.innerHTML = `
          <option value="bakery" selected>Sweet Shop & Traditional Sweets (High Aroma Yield)</option>
          <option value="restaurant">Luxury Dine-in Restaurant (Premium Biryanis/Mughlai)</option>
          <option value="household">Wellness & Gourmet Kitchen (100% Organic Fat)</option>
        `;
      } else {
        calcBizSelect.innerHTML = `
          <option value="restaurant" selected>Premium Fast Food & Catering (Soft Cohesion)</option>
          <option value="bakery">Quick Service Restaurant (Zero Crumble Cooking)</option>
          <option value="household">Health Club & Gourmet Household (Pure Milk Protein)</option>
        `;
      }
    }

    calcVolSlider.addEventListener('input', (e) => {
      calcVolNum.value = e.target.value;
      updateROICalculations();
    });
    calcVolNum.addEventListener('input', (e) => {
      let val = parseInt(e.target.value) || 10;
      calcVolSlider.value = val;
      updateROICalculations();
    });
    
    calcWasteSlider.addEventListener('input', (e) => {
      calcWasteNum.value = e.target.value;
      updateROICalculations();
    });
    calcWasteNum.addEventListener('input', (e) => {
      let val = parseInt(e.target.value) || 1;
      calcWasteSlider.value = val;
      updateROICalculations();
    });

    if (calcBizSelect) calcBizSelect.addEventListener('change', updateROICalculations);

    const reportBtn = document.getElementById('details-report-btn');
    if (reportBtn) reportBtn.addEventListener('click', generateCommercialReport);

    updateROICalculations();
  }

  // Load related items
  renderRelatedProducts(productId);
}

function renderRelatedProducts(currentId) {
  const container = document.getElementById('related-grid-target');
  if (!container) return;
  container.innerHTML = '';

  const related = Object.values(PRODUCTS)
    .filter(p => p.id !== currentId && p.category === 'Milk')
    .slice(0, 3);

  related.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card-modern';
    card.innerHTML = `
      <div class="product-img-wrapper-modern">
        <span class="tag-modern">${product.tag}</span>
        <img src="${product.img}" alt="${product.name}" class="product-img-modern">
      </div>
      <div class="product-info-modern">
        <span class="category-modern">${product.category}</span>
        <h3 class="name-modern" style="font-size:1.1rem;">${product.name}</h3>
        <p class="desc-modern" style="font-size:0.8rem; margin-bottom:12px;">${product.specs.source}.</p>
        
        <div class="meta-modern" style="padding-top:12px;">
          <div class="price-modern">
            <span class="price-val-modern" style="font-size:1.15rem;">₹${product.price}</span>
            <span class="price-unit-modern">per ${product.unit.replace('1 ', '')}</span>
          </div>
          <a href="product-details.html?id=${product.id}" class="btn btn-secondary btn-sm" style="border-radius: var(--radius-sm); padding:6px 12px; font-size:0.75rem;">View</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}


// ==========================================
// 6. CART PAGE LOGIC (REVIEW & BILLING)
// ==========================================

function initCartPage() {
  renderCartPageItems();
  
  const checkoutForm = document.getElementById('cart-checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      processCartOrder();
    });
  }
}

function renderCartPageItems() {
  const container = document.getElementById('cart-items-table-body');
  const emptyEl = document.getElementById('cart-page-empty-msg');
  const tableEl = document.getElementById('cart-page-table-wrapper');
  
  const subtotalValEl = document.getElementById('cart-page-subtotal');
  const deliveryValEl = document.getElementById('cart-page-delivery');
  const totalValEl = document.getElementById('cart-page-total');
  
  const checkoutFormBtn = document.getElementById('cart-checkout-submit-btn');

  if (!container) return;
  container.innerHTML = '';

  if (state.cart.length === 0) {
    if (emptyEl) emptyEl.style.display = 'block';
    if (tableEl) tableEl.style.display = 'none';
    if (subtotalValEl) subtotalValEl.textContent = '₹0.00';
    if (deliveryValEl) deliveryValEl.textContent = '₹0.00';
    if (totalValEl) totalValEl.textContent = '₹0.00';
    if (checkoutFormBtn) checkoutFormBtn.disabled = true;
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  if (tableEl) tableEl.style.display = 'block';
  if (checkoutFormBtn) checkoutFormBtn.disabled = false;

  let subtotal = 0;

  state.cart.forEach(item => {
    const product = PRODUCTS[item.id];
    if (!product) return;

    const itemTotal = product.price * item.quantity;
    subtotal += itemTotal;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td style="padding:16px 12px; display:flex; align-items:center; gap:16px;">
        <img src="${product.img}" alt="${product.name}" style="width:60px; height:60px; object-fit:cover; border-radius:8px; border:1px solid rgba(255,255,255,0.06);">
        <div>
          <h4 style="font-weight:700; color:#ffffff; font-size:0.95rem;">${product.name}</h4>
          <span style="font-size:0.75rem; color:#8fa5b5;">${product.category} | ${product.unit}</span>
        </div>
      </td>
      <td style="padding:16px 12px; font-weight:600;">₹${product.price}</td>
      <td style="padding:16px 12px;">
        <div class="qty-input-group" style="padding:2px;">
          <button class="qty-input-btn" style="width:24px; height:24px; font-size:0.9rem;" onclick="changeQuantity('${item.id}', -1)">-</button>
          <span style="width:30px; text-align:center; font-weight:700; font-size:0.9rem;">${item.quantity}</span>
          <button class="qty-input-btn" style="width:24px; height:24px; font-size:0.9rem;" onclick="changeQuantity('${item.id}', 1)">+</button>
        </div>
      </td>
      <td style="padding:16px 12px; font-weight:700; color:var(--color-secondary);">₹${itemTotal}</td>
      <td style="padding:16px 12px; text-align:right;">
        <button onclick="removeItem('${item.id}')" style="background:transparent; border:none; color:#e74c3c; font-weight:600; cursor:pointer; font-size:0.8rem;">Remove</button>
      </td>
    `;
    container.appendChild(row);
  });

  const deliveryCharge = subtotal > 500 ? 0 : 40;
  const total = subtotal + deliveryCharge;

  if (subtotalValEl) subtotalValEl.textContent = `₹${subtotal.toFixed(2)}`;
  if (deliveryValEl) {
    deliveryValEl.textContent = deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge.toFixed(2)}`;
    deliveryValEl.style.color = deliveryCharge === 0 ? '#27ae60' : '';
  }
  if (totalValEl) totalValEl.textContent = `₹${total.toFixed(2)}`;
}

function processCartOrder() {
  const card = document.getElementById('cart-summary-checkout-card');
  if (!card) return;

  const orderNumber = 'GK-' + Math.floor(100000 + Math.random() * 900000);
  const nameInput = document.getElementById('cust-name');
  const customerName = nameInput ? nameInput.value : 'Customer';

  card.innerHTML = `
    <div style="text-align:center; padding: 40px 0;">
      <div style="width:70px; height:70px; border-radius:50%; background:rgba(39,174,96,0.1); color:#27ae60; display:flex; align-items:center; justify-content:center; margin:0 auto 24px;">
        <svg viewBox="0 0 24 24" style="width:36px; height:36px; fill:none; stroke:currentColor; stroke-width:3;">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <h3 style="color:#ffffff; font-size:1.6rem; font-weight:800; margin-bottom:12px;">Order Placed!</h3>
      <p style="color:#8fa5b5; font-size:0.95rem; margin-bottom:24px; line-height:1.5;">Thank you, <strong>${customerName}</strong>. Your pure dairy supplies order has been verified and registered.</p>
      <div style="background:rgba(5, 19, 27, 0.4); border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:20px; margin-bottom:30px; text-align:left;">
        <p style="font-size:0.9rem; color:#ffffff; margin-bottom:8px;">Order ID: <strong>${orderNumber}</strong></p>
        <p style="font-size:0.9rem; color:#ffffff; margin-bottom:8px;">Payment Method: <strong>Cash on Delivery</strong></p>
        <p style="font-size:0.82rem; color:#8fa5b5; line-height:1.4; margin-top:8px;">We will contact you via phone shortly to coordinate delivery dispatch.</p>
      </div>
      <a href="shop.html" class="btn btn-primary" style="width:100%; border-radius:var(--radius-round); text-decoration:none;">Back to Catalog</a>
    </div>
  `;

  // Clear cart state
  state.cart = [];
  saveCartToStorage();
  updateCartUI();
}


// ==========================================
// 7. B2B CONSOLIDATED DASHBOARD PORTAL
// ==========================================

function initDashboardPage() {
  const tableBody = document.getElementById('dashboard-calc-tbody');
  if (!tableBody) return;

  tableBody.innerHTML = '';
  
  Object.values(PRODUCTS).forEach(prod => {
    const isLiters = prod.category === 'Milk';
    const dVol = isLiters ? 500 : 150;
    const dWastage = 15;

    const row = document.createElement('div');
    row.className = 'calc-table-row';
    row.setAttribute('data-id', prod.id);
    row.innerHTML = `
      <div style="display:flex; align-items:center; gap:16px;">
        <img src="${prod.img}" alt="${prod.name}" style="width:50px; height:50px; object-fit:cover; border-radius:8px; border:1px solid rgba(255,255,255,0.06);">
        <div>
          <h4 style="font-weight:700; color:#ffffff; font-size:0.9rem;">${prod.name}</h4>
          <span style="font-size:0.75rem; color:#8fa5b5;">₹${prod.price} / ${prod.unit.replace('1 ', '')}</span>
        </div>
      </div>
      
      <!-- Input Volume -->
      <div>
        <div style="display:flex; align-items:center; gap:6px;">
          <input type="number" class="calc-num-input db-input-vol" value="${dVol}" min="0" style="width:70px; padding:6px; font-size:0.8rem;">
          <span style="font-size:0.75rem; color:#8fa5b5;">${isLiters ? 'L' : 'kg'}</span>
        </div>
      </div>
      
      <!-- Input Wastage -->
      <div>
        <div style="display:flex; align-items:center; gap:6px;">
          <input type="number" class="calc-num-input db-input-waste" value="${dWastage}" min="0" max="100" style="width:50px; padding:6px; font-size:0.8rem;">
          <span style="font-size:0.75rem; color:#8fa5b5;">%</span>
        </div>
      </div>
      
      <!-- Output savings -->
      <div class="db-output-savings" style="font-weight:700; color:#27ae60; font-size:0.95rem;">
        ₹0
      </div>
    `;

    row.querySelector('.db-input-vol').addEventListener('input', updateConsolidatedDashboard);
    row.querySelector('.db-input-waste').addEventListener('input', updateConsolidatedDashboard);

    tableBody.appendChild(row);
  });

  const dbBizType = document.getElementById('db-business-type');
  if (dbBizType) dbBizType.addEventListener('change', updateConsolidatedDashboard);

  const reportContainer = document.getElementById('print-report-container');
  if (reportContainer) {
    const exitBtn = reportContainer.querySelector('.print-actions button:last-child');
    if (exitBtn) {
      exitBtn.addEventListener('click', () => { reportContainer.style.display = 'none'; });
    }
  }

  const generateFullReportBtn = document.getElementById('db-generate-report-btn');
  if (generateFullReportBtn) {
    generateFullReportBtn.addEventListener('click', generateFullConsolidatedReport);
  }

  updateConsolidatedDashboard();
}

function updateConsolidatedDashboard() {
  const rows = document.querySelectorAll('.calc-table-row[data-id]');
  const bizType = document.getElementById('db-business-type').value;

  let totalMonthlyInvestment = 0;
  let totalMonthlySurcharge = 0;
  let totalMonthlySavings = 0;

  rows.forEach(row => {
    const id = row.getAttribute('data-id');
    const prod = PRODUCTS[id];
    if (!prod) return;

    const volume = parseFloat(row.querySelector('.db-input-vol').value) || 0;
    const wastage = parseFloat(row.querySelector('.db-input-waste').value) || 0;

    const monthlyInvestment = volume * prod.price;
    const monthlySurcharge = volume * prod.b2b.premiumSurcharge;

    const wastageSavings = volume * prod.price * (wastage / 100) * prod.b2b.wastageReduction;
    
    let qualityRevenue = 0;
    if (bizType === 'restaurant' || bizType === 'bakery') {
      qualityRevenue = volume * prod.b2b.dishPremium * prod.b2b.conversionRate;
    } else {
      qualityRevenue = volume * 5;
    }

    const netSavings = (wastageSavings + qualityRevenue) - monthlySurcharge;

    const outputSavingsEl = row.querySelector('.db-output-savings');
    if (outputSavingsEl) {
      outputSavingsEl.textContent = `₹${netSavings.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
      outputSavingsEl.style.color = netSavings >= 0 ? '#27ae60' : '#e74c3c';
    }

    totalMonthlyInvestment += monthlyInvestment;
    totalMonthlySurcharge += monthlySurcharge;
    totalMonthlySavings += netSavings;
  });

  document.getElementById('db-metric-investment').textContent = `₹${totalMonthlyInvestment.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
  document.getElementById('db-metric-savings').textContent = `₹${totalMonthlySavings.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
  
  const roiEl = document.getElementById('db-metric-roi');
  const net3YearROI = totalMonthlySurcharge > 0 ? ((totalMonthlySavings * 36) / (totalMonthlySurcharge * 36) * 100) : 0;
  roiEl.textContent = `${totalMonthlySavings >= 0 ? '+' : ''}${net3YearROI.toFixed(0)}%`;
  roiEl.style.color = totalMonthlySavings >= 0 ? '#27ae60' : '#e74c3c';

  renderConsolidatedChart(totalMonthlySurcharge, totalMonthlySavings);
}

function renderConsolidatedChart(monthlyCostPremium, monthlyNetBenefit) {
  const ctx = document.getElementById('dbConsolidatedChart');
  if (!ctx) return;

  if (state.chartInstance) {
    state.chartInstance.destroy();
  }

  const labels = ['Immediate', 'Year 1 Complete', 'Year 2 Complete', 'Year 3 Complete'];
  const costPremiumData = [0, monthlyCostPremium * 12, monthlyCostPremium * 24, monthlyCostPremium * 36];
  const netBenefitData = [0, monthlyNetBenefit * 12, monthlyNetBenefit * 24, monthlyNetBenefit * 36];

  state.chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Consolidated Surcharge Cost (₹)',
          data: costPremiumData,
          borderColor: '#ebdcc5',
          backgroundColor: 'rgba(235, 220, 197, 0.05)',
          borderWidth: 2,
          borderDash: [5, 5],
          pointBackgroundColor: '#ebdcc5',
          tension: 0.1
        },
        {
          label: 'Net Projected Savings (₹)',
          data: netBenefitData,
          borderColor: '#c99b32',
          backgroundColor: 'rgba(201, 155, 50, 0.1)',
          fill: true,
          borderWidth: 3,
          pointBackgroundColor: '#ebdcc5',
          tension: 0.2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: { color: '#8fa5b5', font: { family: 'Plus Jakarta Sans', size: 10, weight: 'bold' } }
        }
      },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#8fa5b5', font: { size: 9 } } },
        y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#8fa5b5', font: { size: 9 }, callback: (v) => '₹' + v.toLocaleString() } }
      }
    }
  });
}

function generateFullConsolidatedReport() {
  const rows = document.querySelectorAll('.calc-table-row[data-id]');
  const bizType = document.getElementById('db-business-type').value;

  let totalMonthlyInvestment = 0;
  let totalMonthlySurcharge = 0;
  let totalMonthlyWastageSavings = 0;
  let totalMonthlyQualityRevenue = 0;
  let totalMonthlySavings = 0;

  let specsHTML = `
    <table class="print-table">
      <thead>
        <tr>
          <th>Dairy Product</th>
          <th>Sourcing Volume</th>
          <th>Wastage (%)</th>
          <th>Purity</th>
          <th>Fat Level</th>
          <th>Protein</th>
          <th>Shelf Life</th>
        </tr>
      </thead>
      <tbody>
  `;

  rows.forEach(row => {
    const id = row.getAttribute('data-id');
    const prod = PRODUCTS[id];
    if (!prod) return;

    const volume = parseFloat(row.querySelector('.db-input-vol').value) || 0;
    const wastage = parseFloat(row.querySelector('.db-input-waste').value) || 0;
    if (volume <= 0) return;

    const monthlyInvestment = volume * prod.price;
    const monthlySurcharge = volume * prod.b2b.premiumSurcharge;

    const wastageSavings = volume * prod.price * (wastage / 100) * prod.b2b.wastageReduction;
    
    let qualityRevenue = 0;
    if (bizType === 'restaurant' || bizType === 'bakery') {
      qualityRevenue = volume * prod.b2b.dishPremium * prod.b2b.conversionRate;
    } else {
      qualityRevenue = volume * 5;
    }

    const netSavings = (wastageSavings + qualityRevenue) - monthlySurcharge;

    totalMonthlyInvestment += monthlyInvestment;
    totalMonthlySurcharge += monthlySurcharge;
    totalMonthlyWastageSavings += wastageSavings;
    totalMonthlyQualityRevenue += qualityRevenue;
    totalMonthlySavings += netSavings;

    const unitLabel = prod.category === 'Milk' ? 'Liters' : 'kg';

    specsHTML += `
      <tr>
        <td><strong>${prod.name}</strong></td>
        <td>${volume.toLocaleString()} ${unitLabel}</td>
        <td>${wastage}%</td>
        <td>${prod.specs.purity}</td>
        <td>${prod.specs.fat}</td>
        <td>${prod.specs.protein}</td>
        <td>${prod.specs.shelflife}</td>
      </tr>
    `;
  });

  specsHTML += `</tbody></table>`;

  const net3YearROI = totalMonthlySurcharge > 0 ? ((totalMonthlySavings * 36) / (totalMonthlySurcharge * 36) * 100) : 0;
  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: '2-digit', month: 'long', year: 'numeric'
  });

  let bizName = '';
  if (bizType === 'restaurant') bizName = 'Cafe & Restaurant';
  else if (bizType === 'bakery') bizName = 'Sweet Shop & Bakery';
  else bizName = 'Premium Household';

  document.getElementById('print-report-date').textContent = `Date generated: ${currentDate}`;
  document.getElementById('print-specs-container').innerHTML = specsHTML;

  document.getElementById('print-metrics-tbody').innerHTML = `
    <tr>
      <td>Business Profile</td>
      <td><strong>${bizName}</strong></td>
      <td>Optimized parameters matched to B2B models.</td>
    </tr>
    <tr>
      <td>Consolidated Sourcing Investment</td>
      <td><strong>₹${totalMonthlyInvestment.toLocaleString('en-IN', { maximumFractionDigits: 0 })} / month</strong></td>
      <td>Sourcing cost using Guru Kripa direct premium supplies.</td>
    </tr>
    <tr>
      <td>Estimated 3-Year Surcharge Premium</td>
      <td><strong>₹${(totalMonthlySurcharge * 36).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</strong></td>
      <td>Extra cost over low-grade local alternative sourcing.</td>
    </tr>
  `;

  document.getElementById('print-forecast-tbody').innerHTML = `
    <tr>
      <td><strong>Year 1</strong></td>
      <td>₹${(totalMonthlySurcharge * 12).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</td>
      <td>₹${(totalMonthlyWastageSavings * 12).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</td>
      <td>₹${(totalMonthlyQualityRevenue * 12).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</td>
      <td><strong style="color: #0b4c68;">₹${(totalMonthlySavings * 12).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</strong></td>
    </tr>
    <tr>
      <td><strong>Year 2</strong></td>
      <td>₹${(totalMonthlySurcharge * 24).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</td>
      <td>₹${(totalMonthlyWastageSavings * 24).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</td>
      <td>₹${(totalMonthlyQualityRevenue * 24).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</td>
      <td><strong style="color: #0b4c68;">₹${(totalMonthlySavings * 24).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</strong></td>
    </tr>
    <tr>
      <td><strong>Year 3</strong></td>
      <td>₹${(totalMonthlySurcharge * 36).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</td>
      <td>₹${(totalMonthlyWastageSavings * 36).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</td>
      <td>₹${(totalMonthlyQualityRevenue * 36).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</td>
      <td><strong style="color: #27ae60; font-size: 1.05rem;">₹${(totalMonthlySavings * 36).toLocaleString('en-IN', { maximumFractionDigits: 0 })} (ROI: +${net3YearROI.toFixed(0)}%)</strong></td>
    </tr>
  `;

  const reportContainer = document.getElementById('print-report-container');
  if (reportContainer) {
    reportContainer.style.display = 'flex';
    setTimeout(() => { window.print(); }, 500);
  }
}


// ==========================================
// 8. CONTACT PAGE FAQ ACCORDION LOGIC
// ==========================================

function initContactPage() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  const contactForm = document.getElementById('contact-enquiry-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const phone = document.getElementById('contact-phone').value;
      const subject = document.getElementById('contact-subject').value;
      const message = document.getElementById('contact-message').value;
      
      // Save locally to localStorage as backup
      const enquiries = JSON.parse(localStorage.getItem('contact_enquiries') || '[]');
      enquiries.push({ name, email, phone, subject, message, date: new Date().toLocaleString() });
      localStorage.setItem('contact_enquiries', JSON.stringify(enquiries));

      // Web3Forms Access Key (Sends submission details directly to your Gmail!)
      const WEB3FORMS_ACCESS_KEY = '652914f4-1329-4bd5-8b16-2e71d6c5320c'; 

      // Google Sheet Apps Script URL (Paste your Apps Script Web Webhook URL here!)
      const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbxflkxetImBtgFU2Qt8OB_fy1Zr0I9AQj5RWCs0eQlXghgv8qkuqM2epqkF90cWKa5_VQ/exec'; 

      // Google Sheet Sharing View Link (Paste the link to view your spreadsheet!)
      const GOOGLE_SHEET_VIEW_LINK = 'https://docs.google.com/spreadsheets/d/1Ygt0cBkBU3jS-7F_WyXzL53FOH9SuxpECtQJxUX0gMI/edit?usp=sharing'; 

      // 1. Submit to Google Sheet Database (if URL is set)
      if (GOOGLE_SHEET_URL) {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('message', message);

        fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          body: formData
        }).catch(err => console.error('Google Sheet database backup failed:', err));
      }

      // 2. Submit to Web3Forms Email Alert
      if (WEB3FORMS_ACCESS_KEY) {
        try {
          // Append details in the email message body
          let emailBody = `Customer Contact details:\n- Name: ${name}\n- Phone: ${phone}\n- Email: ${email}\n- Subject: ${subject}\n\nMessage:\n${message}`;
          if (GOOGLE_SHEET_VIEW_LINK) {
            emailBody += `\n\n-----------------------------------\n📊 VIEW ALL RESPONSES (DATABASE EXCEL):\n${GOOGLE_SHEET_VIEW_LINK}`;
          }

          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              access_key: WEB3FORMS_ACCESS_KEY,
              name: name,
              email: email,
              subject: `[Guru Kripa Inquiry] - ${subject}`,
              message: emailBody,
              from_name: 'Guru Kripa Dairy Website'
            })
          });

          const result = await response.json();
          if (result.success) {
            alert('Thank you! Your inquiry has been submitted. You will receive an email confirmation shortly.');
          } else {
            alert('Submission failed. Saved locally in backup.');
          }
        } catch (err) {
          console.error('Email notification post failed:', err);
          alert('Saved locally. Connection to email server failed.');
        }
      } else {
        alert(`Inquiry submitted successfully!\n\nName: ${name}\nEmail: ${email}\n\nNote: Sourcing data is saved in browser LocalStorage. Provide your Gmail to the AI assistant to enable instant email notifications!`);
      }
      
      contactForm.reset();
    });
  }
}
