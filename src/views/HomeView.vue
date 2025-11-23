<template>
  <main class="hero-section">
    <!-- Animated Background Elements -->
    <div class="background-animation">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <!-- Left Content -->
        <div class="hero-text">
          <!-- Badge -->
          <div class="status-badge">
            <span class="status-dot"></span>
            <span class="status-text">Available for opportunities</span>
          </div>

          <!-- Main Heading with Typewriter Effect -->
          <h1 class="hero-title">
            <span class="greeting">Hi, I'm</span>
            <span class="name-highlight">Razien Mackenzie</span>
          </h1>

          <!-- Animated Job Titles -->
          <div class="job-titles">
            <h2 class="job-title">
              <span class="job-prefix">UAT, QA Automation Engineer & Software Developer</span>
            </h2>
            <h2 class="job-title secondary">
              <span class="job-prefix"></span>
              <span class="job-suffix"></span>
            </h2>
          </div>

          <!-- Description -->
          <p class="hero-description">
            Specialized in <span class="highlight">fintech testing</span> and 
            <span class="highlight">automation</span>. I bridge the gap between operations 
            and software development, building robust test frameworks with Playwright and 
            crafting seamless digital experiences.
          </p>

          <!-- Stats -->
          <div class="stats-container">
            <div class="stat-item">
              <div class="stat-number">2+</div>
              <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-number">12+</div>
              <div class="stat-label">Technologies</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-number">100%</div>
              <div class="stat-label">Dedication</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="cta-buttons">
            <button class="btn-primary" @click="viewCV">
              <span>Download CV</span>
              <i class="bi bi-download"></i>
            </button>
            <router-link to="/projects" class="btn-secondary">
              <span>View Projects</span>
              <i class="bi bi-arrow-right"></i>
            </router-link>
          </div>

          <!-- Social Links -->
          <div class="social-links">
            <a href="https://github.com/CodeBroke33" target="_blank" class="social-icon">
              <i class="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/razien-mackenzie" target="_blank" class="social-icon">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="mailto:razienmackenzie@gmail.com" class="social-icon">
              <i class="bi bi-envelope-at"></i>
            </a>
          </div>
        </div>

        <!-- Right Content - Profile Image -->
        <div class="hero-image-container">
          <div class="image-wrapper">
            <!-- Floating Tech Icons -->
            <div class="floating-icon icon-1">
              <i class="bi bi-code-slash"></i>
            </div>
            <div class="floating-icon icon-2">
              <i class="bi bi-bug"></i>
            </div>
            <div class="floating-icon icon-3">
              <i class="bi bi-cpu"></i>
            </div>
            <div class="floating-icon icon-4">
              <i class="bi bi-gear"></i>
            </div>
            
            <!-- Profile Image -->
            <div class="profile-image-frame">
              <img
                class="profile-image"
                src="https://i.ibb.co/Z2rv961/DSC-03021.jpg"
                alt="Razien Mackenzie - QA Automation Engineer"
              />
              <div class="image-glow"></div>
            </div>
          </div>

          <!-- Tech Stack Pills -->
          <div class="tech-stack">
            <span class="tech-pill">Playwright</span>
            <span class="tech-pill">TypeScript</span>
            <span class="tech-pill">React</span>
            <span class="tech-pill">Node.js</span>
            <span class="tech-pill">Vue.js</span>
            <span class="tech-pill">MySQL</span>
            <span class="tech-pill">And much more...</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <!-- <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <span class="scroll-text">Scroll to explore</span>
    </div> -->
  </main>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    viewCV() {
      window.open(
        'https://drive.google.com/file/d/19653loiqCVZa0jCfbBtd8ZU8D99fBCJa/view?usp=sharing',
        '_blank'
      );
    }
  },
  mounted() {
    // Add animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    });

    document.querySelectorAll('.hero-text > *').forEach((el) => {
      observer.observe(el);
    });
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* Main Hero Section */
.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  position: relative;
  overflow: hidden;
  padding: 8rem 2rem 4rem;
  display: flex;
  align-items: center;
  font-family: 'Inter', sans-serif;
}

/* Animated Background */
.background-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(45deg, #10b981, #06b6d4);
  top: -200px;
  left: -200px;
  animation-delay: 0s;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: linear-gradient(45deg, #8b5cf6, #ec4899);
  bottom: -250px;
  right: -250px;
  animation-delay: 7s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #06b6d4, #3b82f6);
  top: 50%;
  right: 10%;
  animation-delay: 14s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(50px, -50px) scale(1.1); }
  50% { transform: translate(-30px, 30px) scale(0.9); }
  75% { transform: translate(30px, 50px) scale(1.05); }
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Hero Content */
.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* Left Side - Text Content */
.hero-text {
  animation: slideInLeft 0.8s ease-out;
}

.hero-text > * {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.hero-text > *:nth-child(1) { animation-delay: 0.1s; }
.hero-text > *:nth-child(2) { animation-delay: 0.2s; }
.hero-text > *:nth-child(3) { animation-delay: 0.3s; }
.hero-text > *:nth-child(4) { animation-delay: 0.4s; }
.hero-text > *:nth-child(5) { animation-delay: 0.5s; }
.hero-text > *:nth-child(6) { animation-delay: 0.6s; }
.hero-text > *:nth-child(7) { animation-delay: 0.7s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Status Badge */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 50px;
  margin-bottom: 2rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

.status-text {
  color: #10b981;
  font-size: 0.875rem;
  font-weight: 500;
}

/* Main Title */
.hero-title {
  margin-bottom: 1.5rem;
}

.greeting {
  display: block;
  color: #94a3b8;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.name-highlight {
  display: block;
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin-bottom: 1rem;
}

/* Job Titles */
.job-titles {
  margin-bottom: 1.5rem;
}

.job-title {
  color: #cbd5e1;
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
}

.job-title.secondary {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.job-prefix {
  color: #94a3b8;
}

.job-suffix {
  color: #cbd5e1;
}

/* Description */
.hero-description {
  color: #94a3b8;
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 600px;
}

.highlight {
  color: #10b981;
  font-weight: 600;
}

/* Stats Container */
.stats-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1.5rem 0;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #10b981;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(148, 163, 184, 0.2);
}

/* CTA Buttons */
.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
}

.btn-secondary {
  background: rgba(148, 163, 184, 0.1);
  color: #cbd5e1;
  border: 1px solid rgba(148, 163, 184, 0.2);
}

.btn-secondary:hover {
  background: rgba(148, 163, 184, 0.15);
  border-color: rgba(148, 163, 184, 0.3);
  transform: translateY(-2px);
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(148, 163, 184, 0.1);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 0.75rem;
  color: #94a3b8;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon:hover {
  background: rgba(16, 185, 129, 0.1);
  border-color: #10b981;
  color: #10b981;
  transform: translateY(-3px);
}

/* Right Side - Image */
.hero-image-container {
  position: relative;
  animation: slideInRight 0.8s ease-out;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Floating Icons */
.floating-icon {
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 1.5rem;
  animation: floatIcon 3s ease-in-out infinite;
  backdrop-filter: blur(10px);
}

.icon-1 {
  top: 10%;
  left: -5%;
  animation-delay: 0s;
}

.icon-2 {
  top: 20%;
  right: -5%;
  animation-delay: 0.5s;
}

.icon-3 {
  bottom: 30%;
  left: -8%;
  animation-delay: 1s;
}

.icon-4 {
  bottom: 15%;
  right: -8%;
  animation-delay: 1.5s;
}

@keyframes floatIcon {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

/* Profile Image Frame */
.profile-image-frame {
  position: relative;
  width: 450px;
  height: 450px;
  border-radius: 2rem;
  overflow: hidden;
  border: 2px solid rgba(16, 185, 129, 0.3);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.profile-image-frame:hover .profile-image {
  transform: scale(1.05);
}

.image-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, #10b981, #06b6d4, #8b5cf6);
  border-radius: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
  filter: blur(20px);
}

.profile-image-frame:hover .image-glow {
  opacity: 0.6;
}

/* Tech Stack Pills */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
  justify-content: center;
}

.tech-pill {
  padding: 0.5rem 1rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 50px;
  color: #10b981;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.3s ease;
  animation: fadeInScale 0.5s ease-out backwards;
}

.tech-pill:nth-child(1) { animation-delay: 0.8s; }
.tech-pill:nth-child(2) { animation-delay: 0.9s; }
.tech-pill:nth-child(3) { animation-delay: 1.0s; }
.tech-pill:nth-child(4) { animation-delay: 1.1s; }
.tech-pill:nth-child(5) { animation-delay: 1.2s; }
.tech-pill:nth-child(6) { animation-delay: 1.3s; }

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.tech-pill:hover {
  background: rgba(16, 185, 129, 0.2);
  transform: translateY(-2px);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.6;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}

.mouse {
  width: 24px;
  height: 36px;
  border: 2px solid #64748b;
  border-radius: 12px;
  position: relative;
}

.wheel {
  width: 3px;
  height: 8px;
  background: #64748b;
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 1.5s ease-in-out infinite;
}

@keyframes scroll {
  0% { opacity: 1; top: 6px; }
  100% { opacity: 0; top: 20px; }
}

.scroll-text {
  color: #64748b;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-text {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }

  .hero-image-container {
    max-width: 500px;
    margin: 0 auto;
  }

  .stats-container,
  .cta-buttons,
  .social-links {
    justify-content: center;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 6rem 1.5rem 3rem;
  }

  .name-highlight {
    font-size: 3rem;
  }

  .job-title {
    font-size: 1.5rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .profile-image-frame {
    width: 350px;
    height: 350px;
  }

  .floating-icon {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }

  .stats-container {
    gap: 1.5rem;
  }

  .stat-number {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .name-highlight {
    font-size: 2.5rem;
  }

  .job-title {
    font-size: 1.25rem;
  }

  .profile-image-frame {
    width: 300px;
    height: 300px;
  }

  .floating-icon {
    display: none;
  }

  .tech-stack {
    gap: 0.5rem;
  }

  .tech-pill {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
  }

  .stats-container {
    flex-direction: column;
    gap: 1rem;
  }

  .stat-divider {
    display: none;
  }
}
</style>