<template>
  <div class="projects-page">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">Featured Projects</h1>
        <p class="page-subtitle">
          A showcase of my work in automation testing, fintech applications, and full-stack development
        </p>
      </div>

      <div class="filter-tabs">
        <button 
          v-for="category in categories" 
          :key="category"
          :class="['filter-btn', { active: activeCategory === category }]"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="projects-grid">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="index" 
          class="project-card"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.name" />
            <div class="project-overlay">
              <div class="overlay-content">
                <a 
                  v-if="project.netlify" 
                  :href="project.netlify" 
                  target="_blank"
                  class="overlay-btn"
                >
                  <i class="bi bi-eye"></i> View Live
                </a>
                <a 
                  v-if="project.gitHub" 
                  :href="project.gitHub" 
                  target="_blank"
                  class="overlay-btn secondary"
                >
                  <i class="bi bi-github"></i> Source Code
                </a>
              </div>
            </div>
          </div>

          <div class="project-info">
            <div class="project-header">
              <h3 class="project-title">{{ project.name }}</h3>
              <span v-if="project.featured" class="featured-badge">
                <i class="bi bi-star-fill"></i> Featured
              </span>
            </div>
            
            <p class="project-description">{{ project.description }}</p>

            <div class="tech-stack">
              <span 
                v-for="(tech, i) in project.techStack" 
                :key="i" 
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>

            <div class="project-footer">
              <div class="project-stats">
                <span v-if="project.year" class="stat">
                  <i class="bi bi-calendar"></i> {{ project.year }}
                </span>
                <span v-if="project.category" class="stat">
                  <i class="bi bi-tag"></i> {{ project.category }}
                </span>
              </div>
              <div class="project-links">
                <a 
                  v-if="project.netlify" 
                  :href="project.netlify" 
                  target="_blank"
                  class="link-btn"
                  title="View Live Site"
                >
                  <i class="bi bi-box-arrow-up-right"></i>
                </a>
                <a 
                  v-if="project.gitHub" 
                  :href="project.gitHub" 
                  target="_blank"
                  class="link-btn"
                  title="View Source Code"
                >
                  <i class="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="filteredProjects.length === 0" class="empty-state">
        <i class="bi bi-folder-x"></i>
        <p>No projects found in this category</p>
      </div>

      <div class="cta-section">
        <h2 class="cta-title">Interested in working together?</h2>
        <p class="cta-text">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <router-link to="/contact" class="cta-btn">
          Get In Touch <i class="bi bi-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCategory: 'All',
      categories: ['All', 'Automation', 'Full-Stack', 'Fintech', 'UI/UX'],
      enhancedProjects: [
        {
          name: 'Playwright Automation Framework',
          description: 'Comprehensive test automation suite for fintech applications with frontend and backend testing capabilities.',
          image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
          techStack: ['Playwright', 'TypeScript', 'Node.js', 'API Testing'],
          category: 'Automation',
          year: '2024',
          featured: true,
          gitHub: 'https://github.com/CodeBroke33',
          netlify: null
        },
        {
          name: 'Transaction Testing Suite',
          description: 'Automated testing solution for payment processing systems, integrating Pine Labs and Mastercard back-office tools.',
          image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
          techStack: ['Playwright', 'Pine Labs', 'REST APIs', 'UAT'],
          category: 'Fintech',
          year: '2024',
          featured: true,
          gitHub: 'https://github.com/CodeBroke33',
          netlify: null
        },
        {
          name: 'E-Commerce Platform',
          description: 'Full-stack e-commerce solution with product management, shopping cart, and secure payment integration.',
          image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
          techStack: ['Vue.js', 'Node.js', 'MySQL', 'Bootstrap'],
          category: 'Full-Stack',
          year: '2024',
          gitHub: 'https://github.com/CodeBroke33',
          netlify: 'https://example.com'
        },
        {
          name: 'Portfolio Website',
          description: 'Modern, responsive portfolio showcasing projects and skills with smooth animations and glassmorphism design.',
          image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
          techStack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
          category: 'UI/UX',
          year: '2025',
          gitHub: 'https://github.com/CodeBroke33/rm-portfolio',
          netlify: 'https://razienm-portfolio.vercel.app'
        },
        {
          name: 'API Testing Dashboard',
          description: 'Interactive dashboard for monitoring and testing REST APIs with real-time response visualization.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
          techStack: ['React', 'Node.js', 'Express', 'REST APIs'],
          category: 'Automation',
          year: '2024',
          gitHub: 'https://github.com/CodeBroke33',
          netlify: null
        },
        {
          name: 'Task Management App',
          description: 'Collaborative task management application with real-time updates and team collaboration features.',
          image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
          techStack: ['Vue.js', 'Firebase', 'Vuex', 'CSS3'],
          category: 'Full-Stack',
          year: '2023',
          gitHub: 'https://github.com/CodeBroke33',
          netlify: 'https://example.com'
        }
      ]
    };
  },
  computed: {
    projects() {
      const vuexProjects = this.$store.state.projects || [];
      
      const mappedVuexProjects = vuexProjects.map(project => ({
        name: project.name,
        description: project.description,
        image: project.image,
        gitHub: project.gitHub,
        netlify: project.netlify,
        techStack: project.techStack || ['HTML', 'CSS', 'JavaScript'],
        category: project.category || 'Full-Stack',
        year: project.year || '2024',
        featured: false
      }));

      return [...this.enhancedProjects, ...mappedVuexProjects];
    },
    filteredProjects() {
      if (this.activeCategory === 'All') {
        return this.projects;
      }
      return this.projects.filter(project => project.category === this.activeCategory);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.projects-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 6rem 0 4rem;
  font-family: 'Inter', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
  animation: fadeInUp 0.8s ease;
}

.page-title {
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.25rem;
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  color: #94a3b8;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.filter-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(16, 185, 129, 0.3);
  color: #fff;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
  border-color: transparent;
  color: #fff;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.8s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(16, 185, 129, 0.2);
  border-color: rgba(16, 185, 129, 0.3);
}

.project-image {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.overlay-content {
  display: flex;
  gap: 1rem;
}

.overlay-btn {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.overlay-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.overlay-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
}

.project-info {
  padding: 1.5rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 0.75rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
}

.featured-badge {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  background: rgba(234, 179, 8, 0.1);
  color: #fbbf24;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
}

.project-description {
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  padding: 0.35rem 0.75rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 0.5rem;
  color: #10b981;
  font-size: 0.85rem;
  font-weight: 500;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.project-stats {
  display: flex;
  gap: 1rem;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: #64748b;
  font-size: 0.85rem;
}

.stat i {
  font-size: 0.9rem;
}

.project-links {
  display: flex;
  gap: 0.75rem;
}

.link-btn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  color: #94a3b8;
  text-decoration: none;
  transition: all 0.3s ease;
}

.link-btn:hover {
  background: rgba(16, 185, 129, 0.1);
  border-color: #10b981;
  color: #10b981;
  transform: translateY(-2px);
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: #64748b;
}

.empty-state i {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-state p {
  font-size: 1.1rem;
}

.cta-section {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);
  border-radius: 1rem;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.cta-text {
  font-size: 1.1rem;
  color: #94a3b8;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
  color: white;
  text-decoration: none;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .page-subtitle {
    font-size: 1.1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .filter-tabs {
    gap: 0.5rem;
  }

  .filter-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  .overlay-content {
    flex-direction: column;
  }

  .cta-title {
    font-size: 1.5rem;
  }

  .cta-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 2rem;
  }

  .container {
    padding: 0 1rem;
  }

  .project-header {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>