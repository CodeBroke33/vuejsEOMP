<template>
  <div class="about-page">
    <div class="container">
      <!-- Page Header -->
      <div class="page-header">
        <h1 class="page-title">About Me</h1>
        <p class="page-subtitle">
          From operations to automation - my journey in tech
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="about-content">
        <!-- Left Side - Image & Quick Facts -->
        <div class="about-sidebar">
          <!-- Profile Image -->
          <div class="profile-card">
            <div class="profile-image-wrapper">
              <img
                class="profile-image"
                src="https://i.ibb.co/30J6q1x/Whats-App-Image-2024-01-23-at-12-14-21.jpg"
                alt="Razien Mackenzie"
              />
              <div class="status-indicator">
                <span class="status-dot"></span>
                <span class="status-text">Available for hire</span>
              </div>
            </div>

            <!-- Quick Info -->
            <div class="quick-info">
              <div class="info-item">
                <i class="bi bi-geo-alt-fill"></i>
                <span>Cape Town, South Africa</span>
              </div>
              <div class="info-item">
                <i class="bi bi-briefcase-fill"></i>
                <span>QA Automation Engineer</span>
              </div>
              <div class="info-item">
                <i class="bi bi-calendar-check"></i>
                <span>5+ Years Experience</span>
              </div>
            </div>

            <!-- CTA Button -->
            <button class="cv-button" @click="viewCV">
              <i class="bi bi-download"></i>
              <span>Download CV</span>
            </button>
          </div>

          <!-- Hobbies & Interests -->
          <div class="interests-card">
            <h3 class="card-title">Hobbies & Interests</h3>
            <div class="interests-grid">
              <div class="interest-item">
                <i class="bi bi-code-slash"></i>
                <span>Coding</span>
              </div>
              <div class="interest-item">
                <i class="bi bi-bug"></i>
                <span>Testing</span>
              </div>
              <div class="interest-item">
                <i class="bi bi-person-arms-up"></i>
                <span>Fitness</span>
              </div>
              <div class="interest-item">
                <i class="bi bi-controller"></i>
                <span>Gaming</span>
              </div>
              <div class="interest-item">
                <i class="bi bi-graph-up"></i>
                <span>Trading</span>
              </div>
              <div class="interest-item">
                <i class="bi bi-pencil"></i>
                <span>Design</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Story & Journey -->
        <div class="about-main">
          <!-- My Story Section -->
          <div class="story-section">
            <h2 class="section-title">My Journey</h2>
            
            <div class="story-content">
              <p class="story-paragraph">
                I'm <strong>Razien Mackenzie</strong>, a QA Automation Engineer and Full-Stack Developer 
                with a unique journey that spans operations, software development, and fintech testing. 
                My path into tech wasn't conventional, but it's shaped me into the professional I am today.
              </p>

              <p class="story-paragraph">
                My story began at <strong>Woolworths DC</strong>, where I spent 5 years as an Operations 
                Administrator. I didn't just manage tasks—I optimized workflows, planned capacity, and ensured 
                quality across every operation. At 22, I became the youngest person to hold that administrative 
                position in Woolworths history. But I wanted more.
              </p>

              <p class="story-paragraph">
                Determined to pursue my passion for technology, I enrolled at <strong>Life Choices Coding Academy</strong> 
                in 2024. There, I earned my Full-Stack Software Developer certification and discovered my love for 
                building and testing software. I dove deep into React, Vue.js, Node.js, and everything in between.
              </p>

              <p class="story-paragraph">
                This led me to <strong>Glyde Payments</strong>, where I specialized in QA automation and fintech 
                operations. I designed Playwright automation frameworks, led UAT cycles, investigated transaction 
                workflows, and worked with Pine Labs and Mastercard systems. I didn't just test applications—I ensured 
                they worked flawlessly in production.
              </p>

              <p class="story-paragraph highlight-box">
                <i class="bi bi-lightbulb-fill"></i>
                <span>
                  <strong>What drives me:</strong> I bridge the gap between operations and software development. 
                  My background in operations gives me a practical understanding of how systems should work, and my 
                  development skills let me build and test them properly. I'm passionate about quality, automation, 
                  and creating digital experiences that just work.
                </span>
              </p>
            </div>
          </div>

          <!-- Skills Highlight -->
          <div class="skills-highlight">
            <h3 class="section-title">What I Bring</h3>
            <div class="skills-grid">
              <div class="skill-card">
                <div class="skill-icon">
                  <i class="bi bi-bug-fill"></i>
                </div>
                <h4>QA Automation</h4>
                <p>Playwright frameworks, UAT cycles, API testing, and release management</p>
              </div>
              <div class="skill-card">
                <div class="skill-icon">
                  <i class="bi bi-code-square"></i>
                </div>
                <h4>Full-Stack Dev</h4>
                <p>React, Next.js, Vue.js, Node.js, TypeScript, and MySQL databases</p>
              </div>
              <div class="skill-card">
                <div class="skill-icon">
                  <i class="bi bi-cash-coin"></i>
                </div>
                <h4>Fintech Operations</h4>
                <p>Transaction testing, payment systems, Pine Labs & Mastercard tools</p>
              </div>
            </div>
          </div>

          <!-- Timeline -->
          <div class="timeline-section">
            <h3 class="section-title">Career Timeline</h3>
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <div class="timeline-year">2024 - 2025</div>
                  <h4 class="timeline-title">Glyde Payments</h4>
                  <p class="timeline-role">Automation UAT Developer & Technical Operations</p>
                  <p class="timeline-description">
                    Led QA automation with Playwright, managed UAT cycles, and handled fintech operations
                  </p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <div class="timeline-year">2024</div>
                  <h4 class="timeline-title">Life Choices Academy</h4>
                  <p class="timeline-role">Full-Stack Software Development</p>
                  <p class="timeline-description">
                    Earned certification in full-stack development, specializing in modern JavaScript frameworks
                  </p>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <div class="timeline-year">2019 - 2024</div>
                  <h4 class="timeline-title">Woolworths DC</h4>
                  <p class="timeline-role">Operations Administrator</p>
                  <p class="timeline-description">
                    Youngest person in company history to hold the position. Optimized operations and ensured quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  methods: {
    viewCV() {
      window.open(
        'https://drive.google.com/file/d/19653loiqCVZa0jCfbBtd8ZU8D99fBCJa/view?usp=sharing',
        '_blank'
      );
    }
  }
};
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 6rem 2rem 4rem;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

/* Page Header */
.page-header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-title {
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.page-subtitle {
  color: #94a3b8;
  font-size: 1.25rem;
}

/* Main Content Grid */
.about-content {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 3rem;
}

/* Sidebar */
.about-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile-card,
.interests-card {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

/* Profile Image */
.profile-image-wrapper {
  position: relative;
  margin-bottom: 1.5rem;
}

.profile-image {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 1rem;
  border: 2px solid rgba(16, 185, 129, 0.3);
}

.status-indicator {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(15, 23, 42, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  backdrop-filter: blur(10px);
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
  font-weight: 600;
}

/* Quick Info */
.quick-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #cbd5e1;
  font-size: 0.95rem;
}

.info-item i {
  color: #10b981;
  font-size: 1.25rem;
}

/* CV Button */
.cv-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cv-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
}

/* Interests Card */
.card-title {
  color: #cbd5e1;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.interest-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(148, 163, 184, 0.05);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.interest-item:hover {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateY(-2px);
}

.interest-item i {
  font-size: 1.75rem;
  color: #10b981;
}

.interest-item span {
  color: #cbd5e1;
  font-size: 0.875rem;
  font-weight: 600;
}

/* Main Content */
.about-main {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.section-title {
  color: #cbd5e1;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

/* Story Section */
.story-section {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 1.5rem;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
}

.story-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.story-paragraph {
  color: #94a3b8;
  font-size: 1.125rem;
  line-height: 1.8;
  margin: 0;
}

.story-paragraph strong {
  color: #10b981;
  font-weight: 600;
}

.highlight-box {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(16, 185, 129, 0.1);
  border-left: 4px solid #10b981;
  border-radius: 0.75rem;
  margin-top: 1rem;
}

.highlight-box i {
  color: #10b981;
  font-size: 1.5rem;
  flex-shrink: 0;
}

/* Skills Highlight */
.skills-highlight {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 1.5rem;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.skill-card {
  text-align: center;
  padding: 2rem 1.5rem;
  background: rgba(148, 163, 184, 0.05);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 1rem;
  transition: all 0.3s ease;
}

.skill-card:hover {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateY(-5px);
}

.skill-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 1rem;
}

.skill-icon i {
  font-size: 1.75rem;
  color: #10b981;
}

.skill-card h4 {
  color: #cbd5e1;
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.skill-card p {
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

/* Timeline */
.timeline-section {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 1.5rem;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #10b981 0%, rgba(16, 185, 129, 0.1) 100%);
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -2.5rem;
  top: 0.5rem;
  width: 16px;
  height: 16px;
  background: #10b981;
  border: 3px solid #0f172a;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2);
}

.timeline-year {
  color: #10b981;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.timeline-title {
  color: #cbd5e1;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.timeline-role {
  color: #94a3b8;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.timeline-description {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .about-content {
    grid-template-columns: 320px 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 992px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .about-sidebar {
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .about-page {
    padding: 4rem 1.5rem 3rem;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }

  .interests-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .story-section,
  .skills-highlight,
  .timeline-section {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .story-paragraph {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .interests-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .timeline {
    padding-left: 1.5rem;
  }

  .timeline-dot {
    left: -2rem;
  }
}
</style>