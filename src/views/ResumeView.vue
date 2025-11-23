<template>
  <div class="resume-page">
    <div class="container">
      <!-- Page Header -->
      <div class="page-header">
        <h1 class="page-title">Experience & Education</h1>
        <p class="page-subtitle">
          My professional journey and technical expertise
        </p>
      </div>

      <!-- Work Experience Section -->
      <section class="section">
        <div class="section-header">
          <div class="section-icon">
            <i class="bi bi-briefcase-fill"></i>
          </div>
          <h2 class="section-title">Work Experience</h2>
        </div>

        <div class="experience-timeline">
          <!-- Glyde Payments -->
          <div class="timeline-item">
            <div class="timeline-marker">
              <div class="marker-dot"></div>
              <div class="marker-line"></div>
            </div>
            <div class="timeline-content">
              <div class="experience-card">
                <div class="card-header">
                  <div class="header-left">
                    <h3 class="company-name">Glyde Payments</h3>
                    <p class="position-title">Automation UAT Developer & Technical Operations</p>
                  </div>
                  <div class="date-badge">2024 - 2025</div>
                </div>
                <div class="card-body">
                  <ul class="achievements-list">
                    <li>Designed and maintained Playwright automation scripts for frontend and backend testing</li>
                    <li>Led User Acceptance Testing (UAT) cycles, ensuring feature quality and release readiness</li>
                    <li>Created test plans, UAT documentation, and release validation reports</li>
                    <li>Performed transaction investigations and resolved backend discrepancies</li>
                    <li>Handled partner integrations, API troubleshooting, and cross-team issue resolution</li>
                  </ul>
                  <div class="tech-tags">
                    <span class="tech-tag">Playwright</span>
                    <span class="tech-tag">TypeScript</span>
                    <span class="tech-tag">UAT</span>
                    <span class="tech-tag">Fintech</span>
                    <span class="tech-tag">API Testing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Woolworths -->
          <div class="timeline-item">
            <div class="timeline-marker">
              <div class="marker-dot"></div>
              <div class="marker-line"></div>
            </div>
            <div class="timeline-content">
              <div class="experience-card">
                <div class="card-header">
                  <div class="header-left">
                    <h3 class="company-name">Woolworths DC</h3>
                    <p class="position-title">Operations Administrator</p>
                  </div>
                  <div class="date-badge">2019 - 2024</div>
                </div>
                <div class="card-body">
                  <ul class="achievements-list">
                    <li>Ensured efficient task and resource distribution, preventing overloads</li>
                    <li>Organized tasks by urgency and importance, keeping teams on track</li>
                    <li>Optimized equipment usage, minimizing idle time and maximizing productivity</li>
                    <li>Used historical data for capacity planning to avoid bottlenecks</li>
                    <li>Youngest person in company history to hold administrative position</li>
                  </ul>
                  <div class="tech-tags">
                    <span class="tech-tag">Operations</span>
                    <span class="tech-tag">Quality Assurance</span>
                    <span class="tech-tag">Process Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Life Choices -->
          <div class="timeline-item">
            <div class="timeline-marker">
              <div class="marker-dot"></div>
            </div>
            <div class="timeline-content">
              <div class="experience-card">
                <div class="card-header">
                  <div class="header-left">
                    <h3 class="company-name">Life Choices Academy</h3>
                    <p class="position-title">Technical Intern - Software Development</p>
                  </div>
                  <div class="date-badge">2024</div>
                </div>
                <div class="card-body">
                  <ul class="achievements-list">
                    <li>Engaged in immersive software development projects</li>
                    <li>Collaborated with fellow interns on team-based challenges</li>
                    <li>Developed practical skills crucial for software development</li>
                    <li>Worked in an agile environment with iterative development processes</li>
                  </ul>
                  <div class="tech-tags">
                    <span class="tech-tag">Full-Stack</span>
                    <span class="tech-tag">Agile</span>
                    <span class="tech-tag">Collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Education Section -->
      <section class="section">
        <div class="section-header">
          <div class="section-icon">
            <i class="bi bi-mortarboard-fill"></i>
          </div>
          <h2 class="section-title">Education & Certifications</h2>
        </div>

        <div class="education-grid">
          <div class="education-card">
            <div class="education-icon">
              <i class="bi bi-award-fill"></i>
            </div>
            <h3 class="education-title">REST API Testing</h3>
            <p class="education-school">Udemy</p>
            <p class="education-year">2025</p>
          </div>

          <div class="education-card">
            <div class="education-icon">
              <i class="bi bi-award-fill"></i>
            </div>
            <h3 class="education-title">INDG Linux Unhatched</h3>
            <p class="education-school">Cisco Networking Academy</p>
            <p class="education-year">2024</p>
          </div>

          <div class="education-card featured">
            <div class="education-icon">
              <i class="bi bi-trophy-fill"></i>
            </div>
            <h3 class="education-title">Full Stack Software Developer</h3>
            <p class="education-school">Life Choices Academy</p>
            <p class="education-year">2024</p>
          </div>

          <div class="education-card">
            <div class="education-icon">
              <i class="bi bi-mortarboard-fill"></i>
            </div>
            <h3 class="education-title">Matric Certificate</h3>
            <p class="education-school">Bridge Town High School</p>
            <p class="education-year">2013 - 2018</p>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="section" id="technical-skills">
        <div class="section-header">
          <div class="section-icon">
            <i class="bi bi-code-square"></i>
          </div>
          <h2 class="section-title">Technical Skills</h2>
        </div>

        <div class="skills-container">
          <!-- Testing & QA -->
          <div class="skill-category">
            <h3 class="category-title">Testing & QA</h3>
            <div class="skill-pills">
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>Playwright</span>
              </div>
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>UAT</span>
              </div>
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>API Testing</span>
              </div>
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>Test Automation</span>
              </div>
            </div>
          </div>

          <!-- Frontend -->
          <div class="skill-category">
            <h3 class="category-title">Frontend Development</h3>
            <div class="skill-pills">
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>React</span>
              </div>
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>Next.js</span>
              </div>
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>Vue.js</span>
              </div>
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>TypeScript</span>
              </div>
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>Tailwind CSS</span>
              </div>
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>Bootstrap</span>
              </div>
            </div>
          </div>

          <!-- Backend -->
          <div class="skill-category">
            <h3 class="category-title">Backend & Database</h3>
            <div class="skill-pills">
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>Node.js</span>
              </div>
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>Python</span>
              </div>
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>Express.js</span>
              </div>
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>MySQL</span>
              </div>
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>REST APIs</span>
              </div>
            </div>
          </div>

          <!-- Tools & Platforms -->
          <div class="skill-category">
            <h3 class="category-title">Tools & Platforms</h3>
            <div class="skill-pills">
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>Git & GitHub</span>
              </div>
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>VS Code</span>
              </div>
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>Linux</span>
              </div>
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>Figma</span>
              </div>
              <div class="skill-pill">
                <i class="bi bi-check-circle-fill"></i>
                <span>Pine Labs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Badges/Certificates Section -->
      <section class="section">
        <div class="section-header">
          <div class="section-icon">
            <i class="bi bi-patch-check-fill"></i>
          </div>
          <h2 class="section-title">Badges & Certificates</h2>
        </div>

        <div class="badges-grid">
          <div class="badge-card">
            <div class="badge-image">
              <img
                src="https://i.ibb.co/kxx0xBp/LCStudio-SCRUM-Badge.png"
                alt="SCRUM Methodology Badge"
              />
            </div>
            <h4 class="badge-title">SCRUM Methodology</h4>
            <p class="badge-issuer">Life Choices Studio</p>
            <a
              href="https://drive.google.com/file/d/1c7nTnJrJNoxhSEGdughylDv58yzRAHaM/view?usp=sharing"
              target="_blank"
              class="badge-link"
            >
              <span>View Certificate</span>
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>

          <div class="badge-card">
            <div class="badge-image">
              <img
                src="https://i.ibb.co/M52VVY4/python-essentials-1-50.png"
                alt="Python Essentials Badge"
              />
            </div>
            <h4 class="badge-title">Python Essentials 1</h4>
            <p class="badge-issuer">Cisco Networking Academy</p>
            <a
              href="https://drive.google.com/file/d/1c7nTnJrJNoxhSEGdughylDv58yzRAHaM/view?usp=sharing"
              target="_blank"
              class="badge-link"
            >
              <span>View Certificate</span>
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumePage'
};
</script>

<style scoped>
.resume-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 6rem 2rem 4rem;
}

.container {
  max-width: 1200px;
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

/* Section */
.section {
  margin-bottom: 4rem;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.section-icon {
  width: 48px;
  height: 48px;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-icon i {
  font-size: 1.5rem;
  color: #10b981;
}

.section-title {
  color: #cbd5e1;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
}

/* Experience Timeline */
.experience-timeline {
  position: relative;
}

.timeline-item {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.marker-dot {
  width: 20px;
  height: 20px;
  background: #10b981;
  border: 4px solid #0f172a;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2);
  flex-shrink: 0;
}

.marker-line {
  width: 2px;
  flex: 1;
  background: linear-gradient(180deg, #10b981 0%, rgba(16, 185, 129, 0.1) 100%);
  margin-top: 0.5rem;
}

.timeline-item:last-child .marker-line {
  display: none;
}

/* Experience Card */
.experience-card {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.experience-card:hover {
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateX(5px);
  box-shadow: 0 8px 30px rgba(16, 185, 129, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.company-name {
  color: #10b981;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.position-title {
  color: #cbd5e1;
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
}

.date-badge {
  padding: 0.5rem 1rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 50px;
  color: #10b981;
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.achievements-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.achievements-list li {
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.6;
  padding-left: 1.5rem;
  position: relative;
}

.achievements-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: bold;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.4rem 0.875rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 50px;
  color: #10b981;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Education Grid */
.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.education-card {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.education-card:hover {
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(16, 185, 129, 0.1);
}

.education-card.featured {
  border-color: rgba(16, 185, 129, 0.3);
  background: rgba(16, 185, 129, 0.05);
}

.education-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.education-icon i {
  font-size: 1.75rem;
  color: #10b981;
}

.education-title {
  color: #cbd5e1;
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.education-school {
  color: #94a3b8;
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
}

.education-year {
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 600;
}

/* Skills Container */
.skills-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skill-category {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.category-title {
  color: #10b981;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.skill-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-pill {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: rgba(148, 163, 184, 0.05);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 50px;
  color: #cbd5e1;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.skill-pill:hover {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateY(-2px);
}

.skill-pill i {
  color: #10b981;
  font-size: 1rem;
}

/* Badges Grid */
.badges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.badge-card {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.badge-card:hover {
  border-color: rgba(16, 185, 129, 0.3);
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(16, 185, 129, 0.1);
}

.badge-image {
  width: 150px;
  height: 150px;
  margin: 0 auto 1.5rem;
  border-radius: 1rem;
  overflow: hidden;
  background: rgba(148, 163, 184, 0.05);
}

.badge-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.badge-title {
  color: #cbd5e1;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.badge-issuer {
  color: #94a3b8;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.badge-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 50px;
  color: #10b981;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.badge-link:hover {
  background: rgba(16, 185, 129, 0.2);
  transform: translateX(5px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .resume-page {
    padding: 4rem 1.5rem 3rem;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .timeline-item {
    grid-template-columns: 30px 1fr;
    gap: 1.5rem;
  }

  .marker-dot {
    width: 16px;
    height: 16px;
  }

  .experience-card,
  .education-card,
  .skill-category,
  .badge-card {
    padding: 1.5rem;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>