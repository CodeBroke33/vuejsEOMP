<template>
  <div class="contact-page">
    <div class="container">
      <!-- Page Header -->
      <div class="page-header">
        <h1 class="page-title">Reach Me</h1>
        <p class="page-subtitle">Let's Connect</p>
      </div>

      <!-- Original Envelope Form Section -->
      <div class="form-section">
        <div id="wrap">
          <div id="form-wrap">
            <form action="https://formspree.io/f/mzblyrzz" method="POST">
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div class="form-group">
                <label for="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              
              <button class="submit-btn" type="submit">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Contact Details Section -->
      <div class="details-section">
        <h2 class="details-title">My Contact Details</h2>
        
        <div class="contact-cards">
          <!-- Email Card -->
          <div class="contact-card">
            <div class="card-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="card-content">
              <h4>Email</h4>
              <a href="mailto:razIenmackenzie@gmail.com">
                razIenmackenzie@gmail.com
              </a>
            </div>
          </div>

          <!-- Location Card -->
          <div class="contact-card">
            <div class="card-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="card-content">
              <h4>Location</h4>
              <p>Cape Town, Athlone</p>
            </div>
          </div>

          <!-- Phone Card -->
          <div class="contact-card">
            <div class="card-icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="card-content">
              <h4>Cellphone</h4>
              <a href="tel:+27683735646">068 373 5646</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Availability Banner -->
      <div class="availability-banner">
        <div class="status-indicator">
          <span class="status-dot"></span>
          <span class="status-text">Available for opportunities</span>
        </div>
        <h3>Let's build something amazing together</h3>
        <p>I'm currently open to full-time positions, freelance projects, and collaboration opportunities.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* Page Container */
.contact-page {
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
  margin-bottom: 0.5rem;
}

.page-subtitle {
  font-size: 1.5rem;
  color: #10b981;
  font-weight: 600;
}

/* ========== ORIGINAL ENVELOPE STYLES (PRESERVED) ========== */
.form-section {
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
}

div,
form,
fieldset,
input,
textarea {
  outline: none;
}

#wrap {
  width: 530px;
  margin: 20px auto 0;
  height: 700px;
}

#form-wrap {
  overflow: hidden;
  height: 447px;
  bottom: 100px;
  position: relative;
  top: 0px;
  transition: all 1s ease-in-out 0.3s;
}

#form-wrap:before {
  content: "";
  position: absolute;
  bottom: 90px;
  left: 0px;
  background: url("../assets/before-removebg-preview.png");
  width: 530px;
  height: 317px;
}

#form-wrap:after {
  content: "";
  position: absolute;
  bottom: -40px;
  left: 0;
  background: url("../assets/after-removebg-preview.png");
  width: 530px;
  height: 259px;
}

#form-wrap.hide:after,
#form-wrap.hide:before {
  display: none;
}

#form-wrap:hover {
  height: 850px;
  top: -311px;
}

form {
  background: whitesmoke;
  position: relative;
  top: 200px;
  overflow: visible;
  height: auto;
  min-height: 450px;
  width: 500px;
  margin: 0 auto;
  padding: 20px 20px 30px 20px;
  border: 3px solid grey;
  transition: all 1s ease-in-out 0.3s;
}

/* ========== MODERNIZED FORM INPUTS ========== */
.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #1e293b;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
  background: white;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  outline: none;
}

.form-group textarea {
  resize: vertical;
}

.submit-btn {
  width: 100%;
  padding: 0.875rem;
  background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  margin-top: 0.5rem;
  position: relative;
  z-index: 10;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
}

/* ========== CONTACT DETAILS SECTION ========== */
.details-section {
  margin-bottom: 4rem;
}

.details-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.contact-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.contact-card:hover {
  transform: translateY(-8px);
  border-color: rgba(16, 185, 129, 0.3);
  box-shadow: 0 20px 40px rgba(16, 185, 129, 0.2);
}

.card-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
}

.card-content {
  flex: 1;
}

.card-content h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.5rem 0;
}

.card-content p,
.card-content a {
  color: #94a3b8;
  margin: 0;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.card-content a:hover {
  color: #10b981;
}

/* ========== AVAILABILITY BANNER ========== */
.availability-banner {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 1.5rem;
  padding: 3rem;
  text-align: center;
}

.status-indicator {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 2rem;
  margin-bottom: 1.5rem;
}

.status-dot {
  width: 10px;
  height: 10px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.status-text {
  color: #10b981;
  font-weight: 600;
  font-size: 0.95rem;
}

.availability-banner h3 {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 1rem 0;
}

.availability-banner p {
  color: #94a3b8;
  font-size: 1.1rem;
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* ========== ANIMATIONS ========== */
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

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

/* ========== RESPONSIVE ========== */
@media only screen and (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .page-subtitle {
    font-size: 1.2rem;
  }

  #wrap {
    width: 90%;
  }

  form {
    width: 90%;
  }

  #form-wrap:before,
  #form-wrap:after {
    width: 90%;
    height: auto;
  }

  .contact-cards {
    grid-template-columns: 1fr;
  }

  .details-title {
    font-size: 2rem;
  }

  .availability-banner {
    padding: 2rem;
  }

  .availability-banner h3 {
    font-size: 1.5rem;
  }

  .availability-banner p {
    font-size: 1rem;
  }
}

@media only screen and (max-width: 576px) {
  .page-title {
    font-size: 2rem;
  }

  .container {
    padding: 0 1rem;
  }

  #wrap {
    padding-top: 50px;
  }

  #form-wrap:before {
    bottom: 70px;
  }

  #form-wrap:after {
    bottom: -20px;
  }

  .contact-card {
    flex-direction: column;
    text-align: center;
  }

  .card-icon {
    width: 60px;
    height: 60px;
    font-size: 1.75rem;
  }
}
</style>