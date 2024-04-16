<template>
  <main> 
    <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
      <h1 class="text-center text-success mb-4">Reviews</h1>
      <div class="carousel-inner">
        <div v-for="(testimonial, index) in testimonials" :key="index" :class="{ 'carousel-item': true, active: index === 0 }">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img :src="testimonial.profile" class="img-fluid rounded-start" :alt="testimonial.name">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-black text-decoration-underline fs-4">{{ testimonial.name + ' ' + testimonial.surname }}</h5>
                  <p class="card-text text-success">{{ testimonial.quotes }}</p>
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
#testimonialCarousel {
  padding: 20px;
}

h1, h5, p {
  font-family: Righteous;
}

.card {
  border-radius: 8px;
}

.carousel-inner {
  padding: 30px;
}

h1 {
  font-size: 2rem; 
}

.carousel-item {
  min-height: 300px; /* Set a minimum height for carousel items */
}

</style>
