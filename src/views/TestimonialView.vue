<template>
  <main> 
    <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
      <h1 class="text-success">Reviews</h1>
      <div class="carousel-inner">
        <div v-for="(testimonial, index) in testimonials" :key="index" :class="{ 'carousel-item': true, active: index === 0 }">
          <div class="card mb-3 w-100">
            <div class="row g-0 bg-white rounded-2">
              <div class="col-lg-4 bg-white my-auto">
                <img :src="testimonial.profile" class="img-fluid rounded-start vh-25" :alt="testimonial.name">
              </div>
              <div class="col-lg-8 bg-white">
                <div class="card-body">
                  <h5 class="card-title text-black text-decoration-underline fs-3">{{ testimonial.name + ' ' + testimonial.surname }}</h5>
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
  padding: 20vh;
}

h1, h5, p {
  font-family: Righteous;
}

.card {
  border-radius: 8px;
}

.carousel-inner {
  padding: 3vh;
}

h1 {
  font-size: 3rem; 
}

</style>
