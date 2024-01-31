<!-- resumePage.vue -->
<template>
  <div class="container-fluid mt-5 bg-black" >
    <h1 class="we mb-4 text-white fs-1 ">Resume</h1>

    <section class="we mt-5">
      <h2 class=" text-success text-decoration-underline">Work Experience</h2>
      <div class="carousel slide" id="workCarousel" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div v-for="(work, index) in workExperiece" :key="index" :class="{ 'carousel-item': true, active: index === 0 }">
            <div class="card bg-dark text-white mb-4">
              <div class="card-body">
                <h5 class="card-title">{{ work.title }}</h5>
                <p class="card-text">{{ work.company }} - {{ work.location }}</p>
                <p class="card-text">{{ work.date }}</p>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#workCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#workCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    <section class="we mt-5">
      <h2 class="text-success text-decoration-underline">Education</h2>
      <div class="carousel slide" id="eduCarousel" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div v-for="(edu, index) in education" :key="index" :class="{ 'carousel-item': true, active: index === 0 }">
            <div class="card bg-dark text-white mb-4">
              <div class="card-body bg-white">
                <h5 class="card-title">{{ edu.position }}</h5>
                <p class="card-text">{{ edu.company }} - {{ edu.location }}</p>
                <p class="card-text">{{ edu.date }}</p>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#eduCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#eduCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workExperiece: [
        {
          position: 'OPS Administrater',
          company: 'Woolworths',
          location: 'Cape Town, South Africa',
          date: 'November 2019 - Present',
        }
        
      ]
      // education: [
      //   {
      //     degree: 'Bachelor of Science in Computer Science',
      //     school: 'XYZ University',
      //     location: 'City, Country',
      //     date: 'September 2016 - May 2020',
      //   },
        
      // ],
    }
  },
  computed: {

  //  jobTitile(){
  //     return this.$store.state.jobTitile
  //   },
    education(){
      return this.$store.state.education
    }
  }
}
</script>

<style scoped>
div {
  padding: 5vh;
}

.we {
  font-family: Righteous ;
}
</style>
