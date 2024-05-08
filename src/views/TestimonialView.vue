<template>
  <main class="testimonials-section"> 
    <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
      <div><br><br></div>
      
      <div class="carousel-inner">
        <h1 class="what text-center fs-1 text-black fw-bold mb-4">Colleague Testimonials</h1>
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :class="{ 'carousel-item': true, active: index === 0 }"
          class="p-3"
        >
          <div class="card testimonial-card">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  :src="testimonial.profile"
                  class="img-fluid rounded-start testimonial-image"
                  :alt="testimonial.name"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-success fw-bold fs-3">{{ testimonial.name }} {{ testimonial.surname }}</h5>
                  <div><br><br></div>
                  <p class="card-text text-secondary text-black">{{ testimonial.quotes }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.testimonials-section {
  padding: 40px;
  background-color: #f8f9fa; /* A subtle background color to contrast with the white carousel */
}

h1 {
  font-size: 2.5rem; /* Larger font size for a more authoritative look */
  font-family: 'Righteous'; /* A more formal font */
}

.testimonial-card {
  border-radius: 12px; /* Softer border radius for a more premium look */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  background-color: white;
}

.testimonial-image {
  object-fit: cover; /* Ensure the image is cropped nicely */
}

.carousel-inner {
  padding: 20px; /* Less padding for a tighter design */
}

.carousel-item {
  min-height: 350px; /* Slightly taller carousel items */
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(100%); /* Change the color of carousel controls to suit the theme */
}

/* .card-text {
  display: ;
} */

.card-title, .card-text {
 font-family: righteos;
}

.what{
  font-family: 'Poppins', sans-serif;
}
</style>
