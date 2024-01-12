<template>
    <div class="testimonial bg-black text-white">
    <h2 class="text-center mb-4">Testimonials</h2>

    <div id="testimonialCarousel" class="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="testimonial">
            <p>This is the first testimonial. It's great!</p>
            <p><strong>John Doe</strong></p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="testimonials">
            <p>This is the second testimonial. It's even better!</p>
            <p><strong>Jane Doe</strong></p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="testimonials">
            <p>This is the second testimonial. It's even better!</p>
            <p><strong>Jane Doe</strong></p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="testimonials">
            <p>This is the second testimonial. It's even better!</p>
            <p><strong>Jane Doe</strong></p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="testimonials">
            <p>This is the second testimonial. It's even better!</p>
            <p><strong>Jane Doe</strong></p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="testimonials">
            <p>This is the second testimonial. It's even better!</p>
            <p><strong>Jane Doe</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TestimonialPage"
    }
</script>

<style scoped>
.testimonial {
    padding: 30vh;
    font-family: Righteous;
}

.carousel {
  display: flex;
  overflow: hidden;
  width: 100%;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  flex: 0 0 100%;
}

.testimonial {
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
}

@media (min-width: 576px) {
  .testimonial-container {
    padding: 40px;
  }
}
</style>