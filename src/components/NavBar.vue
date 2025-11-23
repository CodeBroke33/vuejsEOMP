<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand">
        <img 
          class="logo-img" 
          src="https://i.ibb.co/NsFC71t/RM-Logo.png" 
          alt="Razien Mackenzie Logo"
        >
      </router-link>

      <!-- Mobile Toggle Button -->
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navigation Links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <i class="bi bi-house-door"></i>
              <span>Home</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">
              <i class="bi bi-person"></i>
              <span>About</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/resume" class="nav-link">
              <i class="bi bi-briefcase"></i>
              <span>Work & Education</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/project" class="nav-link">
              <i class="bi bi-folder"></i>
              <span>Projects</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/testimonial" class="nav-link">
              <i class="bi bi-chat-quote"></i>
              <span>Reviews</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/reachme" class="nav-link contact-btn">
              <i class="bi bi-envelope"></i>
              <span>Contact</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Navbar Container */
.navbar {
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(16, 185, 129, 0.2);
  padding: 1rem 0;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.navbar:hover {
  background: rgba(15, 23, 42, 0.95);
  border-bottom-color: rgba(16, 185, 129, 0.4);
}

.container-fluid {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Logo */
.navbar-brand {
  padding: 0;
  margin: 0;
  transition: transform 0.3s ease;
}

.navbar-brand:hover {
  transform: scale(1.05);
}

.logo-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #10b981;
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
  transition: all 0.3s ease;
  object-fit: cover;
}

.logo-img:hover {
  box-shadow: 0 0 30px rgba(16, 185, 129, 0.6);
  border-color: #06b6d4;
}

/* Navigation Links */
.navbar-nav {
  gap: 0.5rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: #94a3b8 !important;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.75rem 1.25rem !important;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.nav-link i {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.nav-link:hover {
  color: #10b981 !important;
  background: rgba(16, 185, 129, 0.1);
  transform: translateY(-2px);
}

.nav-link:hover i {
  transform: scale(1.2);
}

/* Active Link */
.nav-link.router-link-active {
  color: #10b981 !important;
  background: rgba(16, 185, 129, 0.15);
  font-weight: 600;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #10b981, transparent);
}

/* Contact Button (Special Styling) */
.contact-btn {
  background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
  color: white !important;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

.contact-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
  background: linear-gradient(135deg, #059669 0%, #0891b2 100%);
}

.contact-btn.router-link-active {
  background: linear-gradient(135deg, #059669 0%, #0891b2 100%);
}

/* Mobile Toggle Button */
.navbar-toggler {
  border: 2px solid rgba(16, 185, 129, 0.3);
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  transition: all 0.3s ease;
}

.navbar-toggler:hover {
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.1);
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(16, 185, 129, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

/* Mobile Responsive */
@media (max-width: 991px) {
  .navbar-collapse {
    background: rgba(15, 23, 42, 0.98);
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid rgba(16, 185, 129, 0.2);
  }

  .navbar-nav {
    gap: 0.25rem;
  }

  .nav-link {
    padding: 1rem !important;
    justify-content: flex-start;
  }

  .nav-link.router-link-active::after {
    display: none;
  }

  .contact-btn {
    margin-top: 0.5rem;
  }

  .container-fluid {
    padding: 0 1rem;
  }
}

@media (max-width: 576px) {
  .logo-img {
    width: 50px;
    height: 50px;
  }

  .nav-link {
    font-size: 0.95rem;
  }

  .nav-link i {
    font-size: 1rem;
  }
}

/* Smooth Scroll Padding (for fixed navbar) */
:root {
  scroll-padding-top: 100px;
}
</style>