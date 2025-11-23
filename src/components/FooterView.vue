<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Copyright -->
      <div class="copyright">
        <p class="copyright-text">
          © {{ currentYear }} <span class="name">Razien Mackenzie</span>
        </p>
        <p class="tagline">UAT/QA Automation Engineer & Software Developer</p>
      </div>

      <!-- Social Links -->
      <div class="social-links">
        <a 
          href="https://github.com/CodeBroke33" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
          class="social-link"
        >
          <i class="bi bi-github"></i>
        </a>
        <a 
          href="https://www.linkedin.com/in/razien-mackenzie" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="social-link"
        >
          <i class="bi bi-linkedin"></i>
        </a>
        <a 
          href="mailto:razIenmackenzie@gmail.com"
          aria-label="Email"
          class="social-link"
        >
          <i class="bi bi-envelope-fill"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

.footer {
  position: relative;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(16, 185, 129, 0.2);
  padding: 2rem 0;
  margin-top: auto;
  font-family: 'Inter', sans-serif;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.copyright {
  flex: 1;
}

.copyright-text {
  color: #94a3b8;
  margin: 0 0 0.25rem 0;
  font-size: 0.95rem;
}

.name {
  background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
}

.tagline {
  color: #64748b;
  margin: 0;
  font-size: 0.85rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: #94a3b8;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(16, 185, 129, 0.1);
  border-color: #10b981;
  color: #10b981;
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .copyright {
    order: 2;
  }

  .social-links {
    order: 1;
  }
}
</style>