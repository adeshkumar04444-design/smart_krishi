// Application Data
const appData = {
  hero_slides: [
    {
      title: "AI-Driven Forecasting",
      description: "Utilize advanced AI to predict market needs and weather patterns, helping you make informed decisions and maximize your yield."
    },
    {
      title: "Real-Time Monitoring", 
      description: "Keep track of your farm's conditions with real-time data and remote system control, ensuring optimal growth and productivity."
    },
    {
      title: "Community Marketplace",
      description: "Connect directly with consumers and other farmers through our marketplace, promoting sustainable practices and profitable exchanges."
    }
  ],
  products: [
    {
      name: "Kubota Tractor L3408 4WD",
      price: "₹1100",
      location: "Lodhi State, Delhi",
      contact: "8528787919",
      seller: "Kishan",
      category: "vehicles",
      date: "21 Aug 2024"
    },
    {
      name: "Electric Lawn Mower",
      price: "₹400", 
      location: "Gurugram, Haryana",
      contact: "9254247576",
      seller: "Vaibhav",
      category: "tools",
      date: "21 Aug 2024"
    },
    {
      name: "Hedge Shears",
      price: "₹80",
      location: "Chambal River Front, Kota, Rajasthan", 
      contact: "9254247578",
      seller: "Phool Devi",
      category: "tools",
      date: "21 Aug 2024"
    },
    {
      name: "Rototiller",
      price: "₹100",
      location: "Jodhpur, Rajasthan",
      contact: "9215000316", 
      seller: "Nirmala",
      category: "tools",
      date: "21 Aug 2024"
    },
    {
      name: "Seed Drills",
      price: "₹3000",
      location: "Ludhiana, Punjab",
      contact: "9215000317",
      seller: "Aniket", 
      category: "tools",
      date: "21 Aug 2024"
    },
    {
      name: "Sonalika Compact Tractor",
      price: "₹500",
      location: "Patiala, Punjab",
      contact: "9817571305",
      seller: "Sarabjit",
      category: "vehicles",
      date: "21 Aug 2024"
    },
    {
      name: "Sprayer",
      price: "₹100", 
      location: "Hisar, Haryana",
      contact: "9717178305",
      seller: "Vaibhav",
      category: "tools",
      date: "21 Aug 2024"
    },
    {
      name: "Combine Harvester",
      price: "₹7000",
      location: "Jabalpur, Madhya Pradesh",
      contact: "7894561237",
      seller: "Mohanlal",
      category: "vehicles", 
      date: "21 Aug 2024"
    }
  ],
  blogs: [
    {
      title: "Eco Friendly Irrigation",
      author: "Shreya",
      date: "Aug 17, 2024",
      excerpt: "The two main types of more sustainable irrigation systems in use today are drip and sprinkler irrigation. The decision of which of the two types to use depends on various factors including crop type, soil conditions, and water availability."
    },
    {
      title: "Use weather forecast effectively",
      author: "Avinesh", 
      date: "Aug 17, 2024",
      excerpt: "Prepare for extreme weather events. Severe weather can damage crops and seeds, but farmers can prepare for these events by using weather forecasts. Minimize losses by planning ahead and taking preventive measures."
    },
    {
      title: "Turning Flower Waste into Profit: How an Entrepreneur Earns Rs 4,00,000 Per Month Using Solar Dryers",
      author: "Duke Su",
      date: "Aug 20, 2024",
      excerpt: "A Blossoming Vision: Shivraj Naishad's tale began in an innovative approach to flower waste management before eventually ending prosperously. Farmers in his region, unable to process flower waste effectively, found a sustainable solution."
    },
    {
      title: "Crop Rotation Farming",
      author: "Gaurav",
      date: "Aug 17, 2024", 
      excerpt: "Crop rotation is a sustainable farming practice that involves growing different types of crops in the same area across different seasons. This technique helps maintain soil health, reduce pest problems, and improve overall farm productivity."
    },
    {
      title: "Risk Management: Preventing Yield Loss and Increasing Farm Productivity with Farm Management Software",
      author: "Amit",
      date: "Aug 17, 2024",
      excerpt: "The main goal of every farmer is productive crop production. This includes achieving optimal yield, as well as quality and nutritious crops. Modern farm management software helps farmers make data-driven decisions to minimize risks."
    },
    {
      title: "Organic Farming and Effective Pest Control Strategies",
      author: "Vaishali",
      date: "Aug 18, 2024",
      excerpt: "Introduction: Organic farming is gaining popularity as a sustainable alternative to conventional farming. By avoiding synthetic pesticides and fertilizers, organic farmers rely on natural methods to control pests and maintain soil health."
    }
  ]
};

// DOM Elements
let currentSlide = 0;
let slideInterval;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  setupCarousel();
  setupProductFilters();
  populateProducts();
  populateBlogs();
  setupForms();
  setupAuthForms();
  setupCounters();
  setupMobileMenu();
}

// Navigation Setup
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      
      // Update active nav link
      navLinks.forEach(nl => nl.classList.remove('active'));
      this.classList.add('active');
      
      // Show target page
      pages.forEach(page => page.classList.remove('active'));
      const targetPage = document.getElementById(targetId);
      if (targetPage) {
        targetPage.classList.add('active');
        targetPage.classList.add('fade-in');
        
        // Trigger counter animation if on home page
        if (targetId === 'home') {
          setTimeout(() => animateCounters(), 500);
        }
      }
      
      // Close mobile menu if open
      const navMenu = document.getElementById('nav-menu');
      const navToggle = document.getElementById('nav-toggle');
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
}

// Carousel Setup
function setupCarousel() {
  const slides = document.getElementById('carousel-slides');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const indicators = document.querySelectorAll('.indicator');
  
  // Auto-advance slides
  function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 5000);
  }
  
  function stopSlideInterval() {
    clearInterval(slideInterval);
  }
  
  function updateSlide() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentSlide);
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % appData.hero_slides.length;
    updateSlide();
  }
  
  function prevSlide() {
    currentSlide = currentSlide === 0 ? appData.hero_slides.length - 1 : currentSlide - 1;
    updateSlide();
  }
  
  // Event listeners
  nextBtn.addEventListener('click', () => {
    stopSlideInterval();
    nextSlide();
    startSlideInterval();
  });
  
  prevBtn.addEventListener('click', () => {
    stopSlideInterval();
    prevSlide();
    startSlideInterval();
  });
  
  // Indicator clicks
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      stopSlideInterval();
      currentSlide = index;
      updateSlide();
      startSlideInterval();
    });
  });
  
  // Pause on hover
  const carousel = document.querySelector('.hero-carousel');
  carousel.addEventListener('mouseenter', stopSlideInterval);
  carousel.addEventListener('mouseleave', startSlideInterval);
  
  // Start carousel
  startSlideInterval();
}

// Product Filters
function setupProductFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Update active filter
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      filterProducts(filter);
    });
  });
}

function filterProducts(category) {
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'block';
      card.classList.add('fade-in');
    } else {
      card.style.display = 'none';
    }
  });
}

// Populate Products
function populateProducts() {
  const productsGrid = document.getElementById('products-grid');
  
  appData.products.forEach(product => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
  });
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.setAttribute('data-category', product.category);
  
  card.innerHTML = `
    <div class="product-header">
      <h3 class="product-name">${product.name}</h3>
      <div class="product-price">${product.price}</div>
    </div>
    <div class="product-details">
      <div class="product-detail">
        <strong>Location:</strong> <span>${product.location}</span>
      </div>
      <div class="product-detail">
        <strong>Contact:</strong> <span>${product.contact}</span>
      </div>
      <div class="product-detail">
        <strong>Seller:</strong> <span>${product.seller}</span>
      </div>
      <div class="product-detail">
        <strong>Posted:</strong> <span>${product.date}</span>
      </div>
    </div>
    <div class="product-actions">
      <button class="btn btn--primary btn--sm">Contact Seller</button>
      <button class="btn btn--secondary btn--sm">Add to Wishlist</button>
    </div>
  `;
  
  return card;
}

// Populate Blogs
function populateBlogs() {
  const blogsGrid = document.getElementById('blogs-grid');
  
  appData.blogs.forEach(blog => {
    const blogCard = createBlogCard(blog);
    blogsGrid.appendChild(blogCard);
  });
}

function createBlogCard(blog) {
  const card = document.createElement('div');
  card.className = 'blog-card';
  
  card.innerHTML = `
    <div class="blog-meta">
      <span>By ${blog.author}</span>
      <span>${blog.date}</span>
    </div>
    <h3 class="blog-title">${blog.title}</h3>
    <p class="blog-excerpt">${blog.excerpt}</p>
    <a href="#" class="blog-read-more">Read More →</a>
  `;
  
  return card;
}

// Animated Counters
function setupCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  counters.forEach(counter => {
    observer.observe(counter);
  });
}

function animateCounter(counter) {
  const target = parseInt(counter.getAttribute('data-target'));
  const increment = target / 100;
  let current = 0;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      counter.textContent = target.toLocaleString() + '+';
      clearInterval(timer);
    } else {
      counter.textContent = Math.floor(current).toLocaleString();
    }
  }, 20);
}

function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    if (!counter.classList.contains('animated')) {
      counter.classList.add('animated');
      animateCounter(counter);
    }
  });
}

// Form Handling
function setupForms() {
  const soilHealthForm = document.getElementById('soil-health-form');
  
  if (soilHealthForm) {
    soilHealthForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const selectedTests = [];
      
      // Get selected tests
      document.querySelectorAll('input[name="soil-tests"]:checked').forEach(test => {
        selectedTests.push(test.value);
      });
      
      // Simple validation
      if (selectedTests.length === 0) {
        alert('Please select at least one soil test.');
        return;
      }
      
      if (!formData.get('soil-type')) {
        alert('Please select a soil type.');
        return;
      }
      
      if (!formData.get('test-center')) {
        alert('Please select a testing center.');
        return;
      }
      
      if (!formData.get('location') || !formData.get('contact')) {
        alert('Please fill in location and contact details.');
        return;
      }
      
      // Show success message
      alert('Soil health test booked successfully! We will contact you soon.');
      this.reset();
    });
  }
  
  // File upload handling
  const fileUpload = document.getElementById('file-upload');
  const fileInput = document.getElementById('soil-photos');
  
  if (fileUpload && fileInput) {
    fileUpload.addEventListener('click', () => {
      fileInput.click();
    });
    
    fileUpload.addEventListener('dragover', (e) => {
      e.preventDefault();
      fileUpload.style.borderColor = 'var(--color-primary-green)';
      fileUpload.style.backgroundColor = 'var(--agriculture-bg)';
    });
    
    fileUpload.addEventListener('dragleave', (e) => {
      e.preventDefault();
      fileUpload.style.borderColor = 'var(--color-border)';
      fileUpload.style.backgroundColor = 'transparent';
    });
    
    fileUpload.addEventListener('drop', (e) => {
      e.preventDefault();
      fileUpload.style.borderColor = 'var(--color-border)';
      fileUpload.style.backgroundColor = 'transparent';
      
      const files = e.dataTransfer.files;
      fileInput.files = files;
      updateFileUploadText(files);
    });
    
    fileInput.addEventListener('change', function() {
      updateFileUploadText(this.files);
    });
  }
}

function updateFileUploadText(files) {
  const uploadContent = document.querySelector('.upload-content p');
  if (files.length > 0) {
    uploadContent.textContent = `${files.length} file(s) selected`;
  } else {
    uploadContent.textContent = 'Click to upload or drag and drop';
  }
}

// Auth Forms
function setupAuthForms() {
  const showSignup = document.getElementById('show-signup');
  const showLogin = document.getElementById('show-login');
  const loginContainer = document.getElementById('login-form-container');
  const signupContainer = document.getElementById('signup-form-container');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  
  if (showSignup) {
    showSignup.addEventListener('click', (e) => {
      e.preventDefault();
      loginContainer.classList.add('hidden');
      signupContainer.classList.remove('hidden');
    });
  }
  
  if (showLogin) {
    showLogin.addEventListener('click', (e) => {
      e.preventDefault();
      signupContainer.classList.add('hidden');
      loginContainer.classList.remove('hidden');
    });
  }
  
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      
      if (!email || !password) {
        alert('Please fill in all fields.');
        return;
      }
      
      alert('Login successful! Welcome back to Krishi Mitra.');
      loginForm.reset();
    });
  }
  
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(signupForm);
      const requiredFields = ['name', 'email', 'password', 'location', 'aadhaar'];
      
      for (let field of requiredFields) {
        if (!formData.get(field)) {
          alert(`Please fill in the ${field} field.`);
          return;
        }
      }
      
      if (!formData.get('user-type')) {
        alert('Please select whether you are registering as a Consumer or Farmer.');
        return;
      }
      
      alert('Account created successfully! Welcome to Krishi Mitra community.');
      signupForm.reset();
    });
  }
}

// Mobile Menu
function setupMobileMenu() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }
  
  // Close menu when clicking on links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });
}

// Additional Interactive Features
document.addEventListener('click', function(e) {
  // Handle product card interactions
  if (e.target.textContent === 'Contact Seller') {
    e.preventDefault();
    alert('Contact functionality would be implemented here. This would typically open a contact form or messaging system.');
  }
  
  if (e.target.textContent === 'Add to Wishlist') {
    e.preventDefault();
    alert('Product added to wishlist!');
    e.target.textContent = 'Added ✓';
    e.target.disabled = true;
  }
  
  // Handle blog read more clicks
  if (e.target.classList.contains('blog-read-more')) {
    e.preventDefault();
    alert('This would open the full blog post. In a real application, this would navigate to the detailed blog page.');
  }
  
  // Handle CTA buttons in hero section
  if (e.target.textContent === 'Get Started' || e.target.textContent === 'Learn More' || e.target.textContent === 'Join Now') {
    e.preventDefault();
    alert('This would navigate to the relevant section or registration page.');
  }
  
  // Handle "List Your Equipment for Rent" button
  if (e.target.textContent === 'List Your Equipment for Rent') {
    e.preventDefault();
    alert('This would open a form to list equipment for rent. Users would need to be logged in first.');
  }
});

// Smooth scrolling for better UX
function smoothScrollTo(element) {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Initialize counters on page load for home page
window.addEventListener('load', () => {
  const homePage = document.getElementById('home');
  if (homePage && homePage.classList.contains('active')) {
    setTimeout(() => animateCounters(), 1000);
  }
});

// Form validation helpers
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
}

// Enhanced form validation
document.addEventListener('input', function(e) {
  if (e.target.type === 'email') {
    const email = e.target.value;
    if (email && !validateEmail(email)) {
      e.target.setCustomValidity('Please enter a valid email address');
    } else {
      e.target.setCustomValidity('');
    }
  }
  
  if (e.target.type === 'tel') {
    const phone = e.target.value;
    if (phone && !validatePhone(phone)) {
      e.target.setCustomValidity('Please enter a valid 10-digit phone number');
    } else {
      e.target.setCustomValidity('');
    }
  }
});

// Add loading states for form submissions
function showLoading(button) {
  const originalText = button.textContent;
  button.textContent = 'Processing...';
  button.disabled = true;
  
  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
  }, 2000);
}