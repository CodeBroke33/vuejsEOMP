<template>
  <div class="testimonials-page">
    <div class="container">
      <!-- Page Header -->
      <div class="page-header">
        <h1 class="page-title">Colleague Testimonials</h1>
        <p class="page-subtitle">
          What people I've worked with have to say about collaborating with me
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="testimonials-grid">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="testimonial-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Quote Icon -->
          <div class="quote-icon">
            <i class="bi bi-quote"></i>
          </div>

          <!-- Testimonial Content -->
          <div class="testimonial-content">
            <p class="testimonial-text">{{ testimonial.quotes }}</p>
          </div>

          <!-- Author Info -->
          <div class="author-info">
            <img 
              :src="testimonial.profile" 
              :alt="testimonial.name"
              class="author-image"
            />
            <div class="author-details">
              <h4 class="author-name">{{ testimonial.name }} {{ testimonial.surname }}</h4>
              <p class="author-role" v-if="testimonial.role">{{ testimonial.role }}</p>
              <p class="author-company" v-if="testimonial.company">{{ testimonial.company }}</p>
            </div>
          </div>

          <!-- Rating Stars (if available) -->
          <div class="rating" v-if="testimonial.rating">
            <i 
              v-for="star in 5" 
              :key="star"
              :class="star <= testimonial.rating ? 'bi bi-star-fill' : 'bi bi-star'"
              class="star-icon"
            ></i>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="stats-section">
        <div class="stat-card">
          <i class="bi bi-people-fill stat-icon"></i>
          <h3 class="stat-number">{{ testimonials.length }}+</h3>
          <p class="stat-label">Happy Colleagues</p>
        </div>
        <div class="stat-card">
          <i class="bi bi-star-fill stat-icon"></i>
          <h3 class="stat-number">5.0</h3>
          <p class="stat-label">Average Rating</p>
        </div>
        <div class="stat-card">
          <i class="bi bi-briefcase-fill stat-icon"></i>
          <h3 class="stat-number">5+</h3>
          <p class="stat-label">Years Experience</p>
        </div>
        <div class="stat-card">
          <i class="bi bi-trophy-fill stat-icon"></i>
          <h3 class="stat-number">100%</h3>
          <p class="stat-label">Satisfaction</p>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="cta-section">
        <h2 class="cta-title">Want to work together?</h2>
        <p class="cta-text">
          I'm always excited to collaborate with great teams and tackle interesting challenges.
        </p>
        <router-link to="/contact" class="cta-btn">
          Let's Connect <i class="bi bi-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    testimonials() {
      // Get testimonials from Vuex store
      const storeTestimonials = this.$store.state.testimonials || [];
      
      // Add role and company info to testimonials
      return storeTestimonials.map(testimonial => ({
        ...testimonial,
        role: testimonial.role || 'Colleague',
        company: testimonial.company || 'Life Choices Academy',
        rating: testimonial.rating || 5
      }));
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

.testimonials-page {
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

/* Page Header */
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

/* Testimonials Grid */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

/* Testimonial Card */
.testimonial-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  animation: fadeInUp 0.8s ease both;
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(16, 185, 129, 0.2);
  border-color: rgba(16, 185, 129, 0.3);
}

/* Quote Icon */
.quote-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.quote-icon i {
  font-size: 2rem;
  color: white;
}

/* Testimonial Content */
.testimonial-content {
  margin-bottom: 2rem;
}

.testimonial-text {
  color: #cbd5e1;
  font-size: 1rem;
  line-height: 1.8;
  font-style: italic;
  margin: 0;
}

/* Author Info */
.author-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.author-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(16, 185, 129, 0.3);
}

.author-details {
  flex: 1;
}

.author-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.25rem 0;
}

.author-role {
  font-size: 0.9rem;
  color: #10b981;
  margin: 0;
  font-weight: 500;
}

.author-company {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0;
}

/* Rating Stars */
.rating {
  display: flex;
  gap: 0.25rem;
  margin-top: 1rem;
}

.star-icon {
  color: #fbbf24;
  font-size: 1rem;
}

/* Stats Section */
.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  padding: 3rem 0;
}

.stat-card {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: rgba(16, 185, 129, 0.3);
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.2);
}

.stat-icon {
  font-size: 2.5rem;
  background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0.5rem 0;
}

.stat-label {
  color: #94a3b8;
  font-size: 0.95rem;
  margin: 0;
}

/* CTA Section */
.cta-section {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);
  border-radius: 1.5rem;
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

/* Animations */
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

/* Responsive */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .page-subtitle {
    font-size: 1.1rem;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .stats-section {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .cta-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 2rem;
  }

  .container {
    padding: 0 1rem;
  }

  .testimonial-card {
    padding: 1.5rem;
  }

  .quote-icon {
    width: 50px;
    height: 50px;
  }

  .quote-icon i {
    font-size: 1.5rem;
  }

  .stats-section {
    grid-template-columns: 1fr;
  }

  .stat-card {
    padding: 1.5rem;
  }
}
</style>