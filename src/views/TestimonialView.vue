<template>
  <div id="testimonialCarousel" class="carousel slide bg-black" data-bs-ride="carousel">
    <h1 class="text-white ">Testimonials</h1>
    <div class="carousel-inner">
      <!-- <div v-for="(testimonial, index) in testimonials" :key="index" :class="{ 'carousel-item': true, active: index === 0 }">
        <img :src="testimonial.profile" class="d-block w-100" alt="Testimonial">
        <div class="carousel-caption">
          <h5>{{ testimonial.name }}</h5>
          <p>{{ testimonial.quotes }}</p>
        </div>
      </div> -->
      <div class="card mb-3 w-100" v-for="(testimonial, index) in testimonials" :key="index" :class="{ 'carousel-item': true, active: index === 0 }">
        <!-- {{ testimonial.quotes }} -->
        <div class="row g-0 bg-black rounded-2">
          <div class="we col-lg-4 bg-black my-auto">
            <img :src="testimonial.profile" class="img-fluid rounded-start vh-25" :alt="testimonial.name">
          </div>
          <div class="we col-lg-8 bg-black">
            <div class="card-body">
              <h5 class="card-title text-white text-decoration-underline fs-3">{{ testimonial.name + ' ' + testimonial.surname }}</h5>
              <p class="card-text text-white">{{ testimonial.quotes }}</p>
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
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
    // Fetch testimonials from JSON file
    // fetch('path/to/testimonials.json')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.testimonials = data;
    //   })
    //   .catch(error => {
    //     console.error('Error fetching testimonials:', error);
    //   });
  },
  computed: {
    testimonials(){
      return this.$store.state.testimonials;
    }
  }
};
</script>

<style scoped>
#testimonialCarousel{
  padding: 20vh;
 
}

h5 {
  font-family: Righteous;
  
}

p{
font-family: Righteous;
}

.we {
  border-radius: 0%;
  border-color: black;
}

img {
/* width: auto; */
height: auto;
margin-block: auto;
aspect-ratio: 1;
}

.carousel-inner {
padding: 3vh;

}

h1 {
  font-family: Righteous;
  font-size: 3rem; 
}


</style>
